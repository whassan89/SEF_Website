import { useEffect } from 'react'
import { useClient, useFormValue, set } from 'sanity'
import type { StringInputProps } from 'sanity'

// Custom input component for serialNumber field on galleryItem.
// Auto-assigns SEF-YYYY-NNN format on new document creation.
// Sequence resets each year. Never re-sequences on deletion.
export function AutoSerialNumberInput(props: StringInputProps) {
  const client = useClient({ apiVersion: '2026-03-14' })
  const docId = useFormValue(['_id']) as string | undefined
  const currentValue = props.value

  useEffect(() => {
    // Only auto-assign for brand-new drafts with no serial yet
    if (!docId || currentValue !== undefined) return
    if (!docId.startsWith('drafts.')) return

    const year = new Date().getFullYear()
    const prefix = `SEF-${year}-`

    client
      .fetch<Array<{ serialNumber: string }>>(
        `*[_type == "galleryItem" && defined(serialNumber) && serialNumber match $prefix] | order(serialNumber desc)[0]{ serialNumber }`,
        { prefix: `${prefix}*` }
      )
      .then((results) => {
        const last = results[0]?.serialNumber
        const lastSeq = last ? parseInt(last.split('-')[2] ?? '0', 10) : 0
        const nextSeq = String(lastSeq + 1).padStart(3, '0')
        props.onChange(set(`${prefix}${nextSeq}`))
      })
      .catch(() => {
        // silently ignore — staff can set manually if needed
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docId])

  return props.renderDefault(props)
}

import { useEffect } from 'react'
import { useClient, useFormValue, set } from 'sanity'
import type { NumberInputProps } from 'sanity'

// Custom input component for serialNumber field on galleryItem.
// On mount, if the field has no value yet, queries Sanity for the
// current max serialNumber and sets this document to max + 1.
export function AutoSerialNumberInput(props: NumberInputProps) {
  const client = useClient({ apiVersion: '2026-03-14' })
  const docId = useFormValue(['_id']) as string | undefined
  const currentValue = props.value

  useEffect(() => {
    // Only auto-assign for brand-new drafts with no serial yet
    if (!docId || currentValue !== undefined) return
    if (!docId.startsWith('drafts.')) return

    client
      .fetch<Array<{ serialNumber: number }>>(
        `*[_type == "galleryItem" && defined(serialNumber)] | order(serialNumber desc)[0]{ serialNumber }`
      )
      .then((results) => {
        const maxSerial = results[0]?.serialNumber ?? 0
        props.onChange(set(maxSerial + 1))
      })
      .catch(() => {
        // silently ignore — staff can set manually if needed
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docId])

  return props.renderDefault(props)
}

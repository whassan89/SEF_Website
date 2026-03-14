import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // When RESEND_API_KEY is configured, uncomment below:
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'SEF Website <noreply@sefngo.com>',
    //   to: process.env.CONTACT_FORM_TO_EMAIL ?? 'info@sefngo.com',
    //   subject: `[SEF Contact] ${subject} — from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`,
    // })

    console.log('Contact form submission:', { name, email, phone, subject, message })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

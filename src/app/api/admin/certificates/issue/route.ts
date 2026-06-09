import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { enrollmentId } = body
    
    if (!enrollmentId) {
      return NextResponse.json({ error: 'Enrollment ID is required' }, { status: 400 })
    }

    const supabase = createClient()
    
    // Auth Check (Commented out for local testing as usual)
    /*
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single()
    if (profile?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    */

    // Fetch enrollment to get user_id and cohort_id
    /*
    const { data: enrollment, error: fetchError } = await supabase
      .from('enrollments')
      .select(`
        user_id, 
        cohort_id,
        profiles ( full_name ),
        cohorts (
          start_date, end_date,
          courses ( title )
        )
      `)
      .eq('id', enrollmentId)
      .single()
      
    if (fetchError || !enrollment) throw fetchError
    */

    // MOCK DATA for PDF generation
    const enrollment = {
      user_id: 'mock-user-id',
      cohort_id: 'mock-cohort-id',
      profiles: { full_name: 'Aarav Sharma' },
      cohorts: {
        start_date: '2026-07-14',
        end_date: '2026-08-25',
        courses: { title: 'ESP32 IoT Fundamentals' }
      }
    }

    // Generate unique cert ID
    const certId = 'DV-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000).toString().padStart(4, '0')

    // Generate PDF using pdf-lib
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([1123, 794]) // A4 landscape
    const { width, height } = page.getSize()

    // Background
    page.drawRectangle({
      x: 0,
      y: 0,
      width,
      height,
      color: rgb(0.070, 0.070, 0.070), // #121212
    })

    // Orange Border
    const inset = 20
    page.drawRectangle({
      x: inset,
      y: inset,
      width: width - inset * 2,
      height: height - inset * 2,
      borderColor: rgb(1.0, 0.420, 0.0), // #FF6B00
      borderWidth: 3,
    })

    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const courier = await pdfDoc.embedFont(StandardFonts.CourierBold)

    // Logo Area
    const logoY = height - 100
    // Triangle (Δ)
    page.drawLine({
      start: { x: width / 2, y: logoY + 20 },
      end: { x: width / 2 - 15, y: logoY - 10 },
      thickness: 3,
      color: rgb(1.0, 0.420, 0.0)
    })
    page.drawLine({
      start: { x: width / 2, y: logoY + 20 },
      end: { x: width / 2 + 15, y: logoY - 10 },
      thickness: 3,
      color: rgb(1.0, 0.420, 0.0)
    })
    page.drawLine({
      start: { x: width / 2 - 15, y: logoY - 10 },
      end: { x: width / 2 + 15, y: logoY - 10 },
      thickness: 3,
      color: rgb(1.0, 0.420, 0.0)
    })

    // "DELTA V" Text
    const deltaVText = "DELTA V"
    const deltaVWidth = helveticaBold.widthOfTextAtSize(deltaVText, 28)
    page.drawText(deltaVText, {
      x: width / 2 - deltaVWidth / 2,
      y: logoY - 45,
      size: 28,
      font: helveticaBold,
      color: rgb(1, 1, 1),
    })

    // Subtitle
    const subText = "LEARN · BUILD · LAUNCH"
    const subWidth = helvetica.widthOfTextAtSize(subText, 10)
    page.drawText(subText, {
      x: width / 2 - subWidth / 2,
      y: logoY - 65,
      size: 10,
      font: helvetica,
      color: rgb(0.63, 0.63, 0.66), // #A1A1AA
    })

    // Horizontal Divider
    page.drawLine({
      start: { x: width / 2 - 200, y: height - 200 },
      end: { x: width / 2 + 200, y: height - 200 },
      thickness: 1,
      color: rgb(1.0, 0.420, 0.0)
    })

    // Center Content
    const certText = "CERTIFICATE OF COMPLETION"
    const certWidth = helveticaBold.widthOfTextAtSize(certText, 14)
    page.drawText(certText, {
      x: width / 2 - certWidth / 2,
      y: height - 240,
      size: 14,
      font: helveticaBold,
      color: rgb(0.63, 0.63, 0.66),
    })

    const studentName = enrollment.profiles.full_name
    const nameWidth = helveticaBold.widthOfTextAtSize(studentName, 52)
    page.drawText(studentName, {
      x: width / 2 - nameWidth / 2,
      y: height - 310,
      size: 52,
      font: helveticaBold,
      color: rgb(1, 1, 1),
    })

    const hasCompletedText = "has successfully completed"
    const hasCompletedWidth = helvetica.widthOfTextAtSize(hasCompletedText, 14)
    page.drawText(hasCompletedText, {
      x: width / 2 - hasCompletedWidth / 2,
      y: height - 370,
      size: 14,
      font: helvetica,
      color: rgb(0.63, 0.63, 0.66),
    })

    const courseName = enrollment.cohorts.courses.title
    const courseWidth = helveticaBold.widthOfTextAtSize(courseName, 28)
    page.drawText(courseName, {
      x: width / 2 - courseWidth / 2,
      y: height - 415,
      size: 28,
      font: helveticaBold,
      color: rgb(1.0, 0.420, 0.0),
    })

    const startDate = new Date(enrollment.cohorts.start_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
    const endDate = new Date(enrollment.cohorts.end_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    const datesText = `${startDate} – ${endDate}`
    const datesWidth = helvetica.widthOfTextAtSize(datesText, 13)
    page.drawText(datesText, {
      x: width / 2 - datesWidth / 2,
      y: height - 455,
      size: 13,
      font: helvetica,
      color: rgb(0.63, 0.63, 0.66),
    })

    // Bottom Section
    const bottomY = 80
    
    // Left: Issued by
    page.drawText("Issued by", { x: 100, y: bottomY + 20, size: 10, font: helvetica, color: rgb(0.32, 0.32, 0.35) }) // #52525B
    page.drawText("Delta V", { x: 100, y: bottomY, size: 14, font: helveticaBold, color: rgb(1, 1, 1) })
    page.drawText("Orbital Research Lab Pvt. Ltd.", { x: 100, y: bottomY - 15, size: 11, font: helvetica, color: rgb(0.32, 0.32, 0.35) })

    // Center: Triangle
    page.drawLine({
      start: { x: width / 2, y: bottomY + 15 },
      end: { x: width / 2 - 10, y: bottomY - 5 },
      thickness: 2,
      color: rgb(1.0, 0.420, 0.0)
    })
    page.drawLine({
      start: { x: width / 2, y: bottomY + 15 },
      end: { x: width / 2 + 10, y: bottomY - 5 },
      thickness: 2,
      color: rgb(1.0, 0.420, 0.0)
    })
    page.drawLine({
      start: { x: width / 2 - 10, y: bottomY - 5 },
      end: { x: width / 2 + 10, y: bottomY - 5 },
      thickness: 2,
      color: rgb(1.0, 0.420, 0.0)
    })

    // Right: Certificate ID & Verify
    const certIdLabel = "Certificate ID"
    page.drawText(certIdLabel, { x: width - 250, y: bottomY + 20, size: 10, font: helvetica, color: rgb(0.32, 0.32, 0.35) })
    page.drawText(certId, { x: width - 250, y: bottomY, size: 13, font: courier, color: rgb(1.0, 0.420, 0.0) })
    page.drawText(`Verify: deltav.in/verify/${certId}`, { x: width - 250, y: bottomY - 15, size: 10, font: helvetica, color: rgb(0.32, 0.32, 0.35) })

    // Serialize PDF
    const pdfBytes = await pdfDoc.save()
    
    // Upload to Supabase Storage (Mocked out for dev if no URL)
    let pdfUrl = ''
    /*
    const filePath = `${enrollment.user_id}/${certId}.pdf`
    const { error: uploadError } = await supabase.storage
      .from('certificates')
      .upload(filePath, pdfBytes, {
        contentType: 'application/pdf',
        upsert: true
      })
      
    if (uploadError) throw uploadError

    const { data: publicUrlData } = supabase.storage
      .from('certificates')
      .getPublicUrl(filePath)
      
    pdfUrl = publicUrlData.publicUrl

    // Insert Certificate Record
    const { data: certificate, error: insertError } = await supabase
      .from('certificates')
      .insert({
        user_id: enrollment.user_id,
        enrollment_id: enrollmentId,
        cohort_id: enrollment.cohort_id,
        cert_id: certId,
        issue_date: new Date().toISOString(),
        revoked: false,
        pdf_url: pdfUrl
      })
      .select()
      .single()
      
    if (insertError) throw insertError
    */

    // For local dev, we convert PDF to base64 so we can at least view it
    const base64Pdf = Buffer.from(pdfBytes).toString('base64')
    pdfUrl = `data:application/pdf;base64,${base64Pdf}`

    // Mock response
    const certificate = {
      id: 'mock-cert-id',
      cert_id: certId,
      issue_date: new Date().toISOString(),
      revoked: false,
      pdf_url: pdfUrl
    }

    return NextResponse.json({ success: true, certificate, pdfUrl })

  } catch (error: any) {
    console.error('Issue Certificate Error:', error)
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const leadId = searchParams.get('leadId')
    const status = searchParams.get('status')

    const where: Record<string, unknown> = {}
    if (leadId) where.leadId = leadId
    if (status) where.status = status

    const appointments = await prisma.appointment.findMany({
      where,
      orderBy: { startTime: 'asc' },
      include: {
        lead: {
          select: { name: true, company: true, email: true },
        },
      },
    })

    return NextResponse.json({ appointments })
  } catch (error) {
    console.error('GET /api/appointments error:', error)
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { leadId, title, description, startTime, endTime, meetingUrl } = body

    if (!leadId || !title || !startTime || !endTime) {
      return NextResponse.json(
        { error: 'leadId, title, startTime and endTime are required' },
        { status: 400 }
      )
    }

    const appointment = await prisma.appointment.create({
      data: {
        leadId,
        title,
        description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        meetingUrl,
        status: 'SCHEDULED',
      },
    })

    return NextResponse.json({ appointment }, { status: 201 })
  } catch (error) {
    console.error('POST /api/appointments error:', error)
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 })
  }
}

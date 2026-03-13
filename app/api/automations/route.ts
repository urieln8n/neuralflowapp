import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { readdir, readFile } from 'fs/promises'
import path from 'path'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const type = searchParams.get('type')
    const includeTemplates = searchParams.get('templates') === 'true'

    // Get automations from DB
    const where: Record<string, unknown> = {}
    if (type) where.type = type

    const automations = await prisma.automation.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        _count: { select: { runs: true } },
      },
    })

    // Optionally include templates
    let templates = []
    if (includeTemplates) {
      try {
        const templatesDir = path.join(process.cwd(), 'automations', 'templates')
        const files = await readdir(templatesDir)
        const templatePromises = files
          .filter(f => f.endsWith('.json'))
          .map(async f => {
            const content = await readFile(path.join(templatesDir, f), 'utf-8')
            return JSON.parse(content)
          })
        templates = await Promise.all(templatePromises)
      } catch {
        // Templates directory might not exist
      }
    }

    return NextResponse.json({ automations, templates })
  } catch (error) {
    console.error('GET /api/automations error:', error)
    return NextResponse.json({ error: 'Failed to fetch automations' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, description, type, trigger, actions, config } = body

    if (!name || !type) {
      return NextResponse.json(
        { error: 'Name and type are required' },
        { status: 400 }
      )
    }

    const automation = await prisma.automation.create({
      data: {
        name,
        description,
        type,
        trigger: trigger || 'webhook',
        actions: actions || [],
        config: config || {},
        status: 'DRAFT',
      },
    })

    return NextResponse.json({ automation }, { status: 201 })
  } catch (error) {
    console.error('POST /api/automations error:', error)
    return NextResponse.json({ error: 'Failed to create automation' }, { status: 500 })
  }
}

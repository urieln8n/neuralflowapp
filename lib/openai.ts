import OpenAI from 'openai'

let openaiInstance: OpenAI | null = null

export function getOpenAI(): OpenAI {
  if (!openaiInstance) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY environment variable is not set')
    }
    openaiInstance = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  }
  return openaiInstance
}

export const BOT_SYSTEM_PROMPT = `You are an intelligent business automation assistant for an AI-powered SaaS platform.
Your goal is to:
1. Understand the visitor's business needs
2. Identify manual processes that can be automated
3. Recommend specific automation solutions
4. Qualify them as a potential lead
5. Schedule a discovery call

Ask questions naturally and concisely. Be professional but friendly.
Gather: company name, industry, team size, main manual processes.
After gathering info, recommend 2-3 specific automations and offer to schedule a call.

Always respond in the same language the user writes in.
Keep responses short (2-3 sentences max). Ask one question at a time.`

export async function generateBotResponse(
  messages: Array<{ role: 'user' | 'assistant'; content: string }>,
  systemPrompt: string = BOT_SYSTEM_PROMPT
): Promise<string> {
  const ai = getOpenAI()
  
  const completion = await ai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages,
    ],
    max_tokens: 300,
    temperature: 0.7,
  })
  
  return completion.choices[0]?.message?.content || "I'd be happy to help! Could you tell me more about your business?"
}

export async function analyzeLeadProfile(lead: {
  company: string
  industry?: string
  employees?: number
  processes?: string[]
}): Promise<{
  score: number
  recommendations: string[]
  summary: string
}> {
  const ai = getOpenAI()
  
  const prompt = `Analyze this lead and provide automation recommendations:
Company: ${lead.company}
Industry: ${lead.industry || 'Unknown'}
Employees: ${lead.employees || 'Unknown'}
Manual processes: ${lead.processes?.join(', ') || 'Not specified'}

Respond with JSON: { score: 1-100, recommendations: string[], summary: string }`
  
  const completion = await ai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' },
    max_tokens: 500,
  })
  
  try {
    return JSON.parse(completion.choices[0]?.message?.content || '{}')
  } catch {
    return { score: 50, recommendations: [], summary: 'Analysis pending' }
  }
}

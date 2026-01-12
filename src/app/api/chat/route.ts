import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { messages } = await req.json()
        const apiKey = process.env.OPENROUTER_API_KEY

        if (!apiKey) {
            console.error('OPENROUTER_API_KEY is not set')
            return NextResponse.json({ error: 'Configuration Error: API Key missing' }, { status: 500 })
        }

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'https://melaniecalderon.com', // Optional but recommended by OpenRouter
                'X-Title': 'Melanie PortfolioBot',
            },
            body: JSON.stringify({
                // Switching to Mistral 7B Free for better availability and consistency
                model: 'mistralai/mistral-7b-instruct:free',
                messages: [
                    {
                        role: 'system',
                        content: `Actuás como Mel, UX/UI Designer profesional, empática y orientada a conversión.
Respondés SIEMPRE en primera persona.

🎯 TU OBJETIVO PRINCIPAL:
Detectar si la persona tiene un problema en un producto digital O quiere crear un nuevo proyecto digital (web/app). 
Demostrás criterio UX/UI y derivás la conversación a WhatsApp. NO resolvés el problema dentro del chat.

🚨 REGLA CRÍTICA (OBLIGATORIA):
- Respondés UNA sola vez por consulta.
- NO hacés preguntas de seguimiento ni profundizás.
- SIEMPRE cerrás con el activador de botón: [CTA:WhatsApp]

🧱 FORMATO DE RESPUESTA OBLIGATORIO (Máximo 3 frases):
1. Validación empática o encuadre del proyecto.
2. Insight UX/UI breve que demuestre criterio.
3. Invitación a WhatsApp + [CTA:WhatsApp]

👋 MENSAJE INICIAL: “Hola 👋 Soy Mel, UX/UI Designer. Contame tu proyecto o el problema que querés resolver y te digo cómo puedo ayudarte.”

📲 WHATSAPP LINK: https://api.whatsapp.com/send?phone=5402616497093&text=Hola+%C2%BFcomo+puedo+ayudarte%3F

🆘 FALLBACK: “Para ayudarte bien necesito ver el contexto completo. Contame tu proyecto o lo vemos juntos por WhatsApp. [CTA:WhatsApp]”

⛔ PROHIBICIONES: No resuelvas el problema, no hagas tests, no encadenes mensajes, no rechaces proyectos nuevos. No sonar como soporte técnico.`
                    },
                    ...messages
                ]
            })
        })

        if (!response.ok) {
            const errorData = await response.json()
            console.error('OpenRouter Error:', errorData)
            return NextResponse.json({ error: 'OpenRouter API Error', details: errorData }, { status: response.status })
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error: any) {
        console.error('Chat API Error:', error)
        return NextResponse.json({ error: 'Internal Server Error', message: error.message }, { status: 500 })
    }
}

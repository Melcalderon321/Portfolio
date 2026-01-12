'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Loader2, ExternalLink } from 'lucide-react'
import { useI18n } from '@/lib/useI18n'

export default function Chatbot() {
    const { lang, t } = useI18n()
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<{ role: string, content: string }[]>([])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isLoading])

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return
        const userMsg = { role: 'user', content: input }
        setMessages(prev => [...prev, userMsg])
        setInput('')
        setIsLoading(true)
        setError(null)

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMsg],
                    lang: lang
                })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Failed to get response')
            }

            const aiResponse = data.choices[0].message.content
            setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }])
        } catch (err: any) {
            console.error(err)
            setError("Dificultades técnicas. Por favor intenta de nuevo o agenda una reunión directa.")
        } finally {
            setIsLoading(false)
        }
    }

    const renderMessageContent = (content: string) => {
        const parts = content.split(/(\[CTA:WhatsApp\])/g)
        return parts.map((part, index) => {
            if (part === '[CTA:WhatsApp]') {
                return (
                    <motion.a
                        key={index}
                        href="https://api.whatsapp.com/send?phone=5402616497093&text=Hola+%C2%BFcomo+puedo+ayudarte%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            background: '#25D366',
                            color: 'white',
                            padding: '0.8rem',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            marginTop: '0.5rem',
                            fontSize: '0.9rem',
                            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                        }}
                    >
                        Hablar por WhatsApp <ExternalLink size={16} />
                    </motion.a>
                )
            }
            return <span key={index}>{part}</span>
        })
    }

    return (
        <>
            <motion.button
                animate={isOpen ? { scale: 0 } : { scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="glass"
                style={{
                    position: 'fixed',
                    bottom: 'max(30px, env(safe-area-inset-bottom))',
                    right: '30px',
                    width: '65px',
                    height: '65px',
                    borderRadius: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--neon-pink)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 0 30px var(--primary-glow)',
                    zIndex: 1000,
                    cursor: 'pointer'
                }}
            >
                <MessageSquare size={26} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
                        className="glass"
                        style={{
                            position: 'fixed',
                            bottom: '30px',
                            right: '30px',
                            width: '380px',
                            height: '550px',
                            zIndex: 1001,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            boxShadow: '0 20px 80px rgba(0,0,0,0.8)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '24px',
                            background: 'rgba(10, 10, 15, 0.95)', // Increased opacity
                            backdropFilter: 'blur(20px)'
                        }}
                    >
                        <div style={{
                            padding: '1.5rem',
                            background: 'rgba(255,255,255,0.03)',
                            borderBottom: '1px solid var(--glass-border)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--neon-pink)' }}>MEL</div>
                                <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>UX/UI Designer</div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    href="https://api.whatsapp.com/send?phone=5402616497093&text=Hola+%C2%BFcomo+puedo+ayudarte%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#25D366', display: 'flex', alignItems: 'center' }}
                                    title="Hablar conmigo por WhatsApp"
                                >
                                    <MessageSquare size={18} />
                                </motion.a>
                                <X cursor="pointer" onClick={() => setIsOpen(false)} size={20} />
                            </div>
                        </div>

                        <div ref={scrollRef} style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {messages.length === 0 && (
                                <div style={{ opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.5' }}>
                                    Hola 👋 Soy Mel, UX/UI Designer. <br /><br />
                                    Contame tu proyecto o el problema que querés resolver y te digo cómo puedo ayudarte.
                                </div>
                            )}
                            {messages.map((m, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={i}
                                    style={{
                                        alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                                        background: m.role === 'user' ? 'var(--neon-pink)' : 'rgba(255,255,255,0.07)',
                                        padding: '0.9rem 1.1rem',
                                        borderRadius: m.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                                        maxWidth: '85%',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        boxShadow: m.role === 'user' ? '0 5px 15px rgba(255,45,149,0.2)' : 'none'
                                    }}
                                >
                                    {renderMessageContent(m.content)}
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div style={{ alignSelf: 'flex-start', opacity: 0.5, display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <Loader2 className="animate-spin" size={16} /> Procesando...
                                </div>
                            )}
                            {error && (
                                <div style={{ color: '#ff4444', fontSize: '0.8rem', textAlign: 'center', padding: '1rem' }}>
                                    {error}
                                </div>
                            )}
                        </div>

                        <div style={{ padding: '1.2rem', background: 'rgba(0,0,0,0.2)', display: 'flex', gap: '0.8rem' }}>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                placeholder="Cuéntame tu problema..."
                                style={{
                                    flex: 1,
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '12px',
                                    padding: '0.7rem 1rem',
                                    color: 'white',
                                    fontSize: '0.9rem'
                                }}
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={sendMessage}
                                style={{
                                    background: 'var(--neon-pink)',
                                    border: 'none',
                                    borderRadius: '12px',
                                    width: '45px',
                                    height: '45px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                <Send size={18} />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

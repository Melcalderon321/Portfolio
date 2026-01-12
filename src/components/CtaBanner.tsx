'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function CtaBanner() {
    const { t } = useI18n()

    return (
        <section className="container" style={{ padding: '4rem 0', display: 'flex', justifyContent: 'center' }}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                    padding: '3rem',
                    borderRadius: '32px',
                    width: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--neon-pink) 100%)',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        width: '120px',
                        height: '120px',
                        position: 'relative',
                        marginBottom: '-10px',
                    }}
                >
                    <Image
                        src="/assets/avatar-cta-v2.png"
                        alt="Melanie Avatar"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </motion.div>

                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800 }}>
                    {t.cta_banner.title}
                </h2>
                <p style={{ fontSize: '1.2rem', opacity: 1, maxWidth: '600px' }}>
                    {t.cta_banner.text}
                </p>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://api.whatsapp.com/send?phone=5402616497093&text=Hola+%C2%BFcomo+puedo+ayudarte%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        background: 'white',
                        color: 'var(--primary)',
                        padding: '1rem 2rem',
                        borderRadius: '100px',
                        textDecoration: 'none',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '1rem'
                    }}
                >
                    {t.cta_banner.button} <ArrowRight size={20} />
                </motion.a>
            </motion.div>
        </section>
    )
}

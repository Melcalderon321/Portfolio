'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import { ArrowRight } from 'lucide-react'

export default function HeroRedesign() {
    const { t } = useI18n()

    return (
        <section className="container" style={{
            minHeight: '90vh',
            paddingTop: '140px', // Added to prevent Navbar overlap
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative'
        }}>
            {/* Background Shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '400px',
                    height: '400px',
                    background: 'url(/assets/abstract_3d_glass_shapes_1768157607743.png) center/cover',
                    zIndex: -1,
                    opacity: 0.5,
                    filter: 'blur(20px)'
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="section-tag" style={{ color: 'white', background: 'var(--primary)', marginBottom: '2rem' }}>
                    {t.hero.tag}
                </div>
                <h1 style={{ marginBottom: '2rem', lineHeight: '1.2' }}>
                    {t.hero.title_line1} <br />
                    {t.hero.title_line2} <span className="neon-text">{t.hero.title_accent}</span>
                </h1>
                <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', opacity: 0.7, maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
                    {t.hero.subtitle}
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://api.whatsapp.com/send?phone=5402616497093&text=Hola+%C2%BFcomo+puedo+ayudarte%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'white',
                            color: 'black',
                            padding: '1rem 2rem',
                            borderRadius: '100px',
                            textDecoration: 'none',
                            fontWeight: 800,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        {t.hero.cta_meeting} <ArrowRight size={20} />
                    </motion.a>
                </div>
            </motion.div>

            {/* Hero Stats */}
            <div className="skills-carousel" style={{
                marginTop: 'clamp(3rem, 10vw, 80px)',
                width: '100%',
                opacity: 0.5,
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '2rem',
                justifyContent: 'center'
            }}>
                {t.hero.stats.map((stat: string) => <div key={stat}>{stat}</div>)}
            </div>
        </section>
    )
}

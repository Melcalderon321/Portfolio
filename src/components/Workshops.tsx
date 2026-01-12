'use client'

import { useI18n } from '@/lib/useI18n'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Workshops() {
    const { t } = useI18n()

    return (
        <section id="workshops" className="container" style={{ paddingBottom: '100px', paddingTop: '100px' }}>
            <div className="section-tag">Educación y Comunidad</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '1.5rem' }}>Workshops <span className="neon-text">y Capacitaciones</span></h2>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', opacity: 0.8, maxWidth: '800px', marginBottom: '3rem', lineHeight: '1.6' }}>
                {t.workshops.desc}
            </p>
            <div className="bento-grid">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bento-item"
                    style={{ gridColumn: 'span 6', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <Link href="/workshops/ux-ui-conversion" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span style={{ color: 'var(--neon-pink)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>{t.workshops.past_label}</span>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>{t.workshops.past} <ArrowUpRight size={20} /></h3>
                        <p style={{ opacity: 0.7, fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>Optimización de conversión a través de UX/UI y diseño estratégico.</p>
                        <div className="neon-text" style={{ fontWeight: 800, fontSize: '0.9rem' }}>{t.workshops.view_details} →</div>
                    </Link>
                </motion.div>
                <div className="bento-item" style={{ gridColumn: 'span 6', padding: '2.5rem', border: '1px solid var(--neon-pink)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ color: 'var(--neon-pink)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>{t.workshops.upcoming_label}</span>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{t.workshops.upcoming}</h3>
                    <p style={{ opacity: 0.7, fontSize: '1.1rem', lineHeight: '1.6' }}>Mejora de sitios web complejos basada en data y recorridos de usuario.</p>
                </div>
            </div>
        </section>
    )
}

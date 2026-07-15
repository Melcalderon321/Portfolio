'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import Link from 'next/link'
import { BarChart3, Search, Lightbulb, Compass, Award, ShieldCheck } from 'lucide-react'

export default function ProductOptimization() {
    const { t } = useI18n()

    // Map icons to the methodology steps
    const stepIcons = [
        <BarChart3 key="1" size={20} color="var(--neon-pink)" />,
        <Search key="2" size={20} color="var(--neon-pink)" />,
        <Compass key="3" size={20} color="var(--neon-pink)" />,
        <Lightbulb key="4" size={20} color="var(--neon-pink)" />,
        <Award key="5" size={20} color="var(--neon-pink)" />,
        <ShieldCheck key="6" size={20} color="var(--neon-pink)" />
    ]

    const data = t.product_optimization

    return (
        <section id="product-optimization" className="container" style={{ paddingBottom: '100px', paddingTop: '60px' }}>
            {/* Header */}
            <div className="section-tag">{data.title}</div>
            <h2 
                style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '2rem', lineHeight: '1.25' }}
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '850px', marginBottom: '4rem', opacity: 0.85, fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)', lineHeight: '1.7' }}>
                {data.desc.map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </div>

            {/* Methodology */}
            <div style={{ marginBottom: '80px' }}>
                <h3 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginBottom: '0.5rem', fontWeight: 800 }}>
                    {data.methodology.title}
                </h3>
                <p style={{ opacity: 0.7, marginBottom: '2.5rem', fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)' }}>
                    {data.methodology.subtitle}
                </p>

                <div className="steps-grid-carousel">
                    {data.methodology.steps.map((step: any, idx: number) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.01 }}
                            className="bento-item"
                            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="neon-text" style={{ fontSize: '2rem', fontWeight: 900, opacity: 0.8 }}>{step.num}</span>
                                <div className="glass" style={{ padding: '0.5rem', borderRadius: '12px' }}>
                                    {stepIcons[idx]}
                                </div>
                            </div>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 750, color: 'white' }}>{step.title}</h4>
                            <p style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: '1.6' }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Case Studies */}
            <div style={{ marginBottom: '80px' }}>
                <h3 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginBottom: '3rem', fontWeight: 800 }}>
                    {data.cases_title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {data.cases.map((caseItem: any, idx: number) => (
                        <Link 
                            href={`/projects/${caseItem.id}`}
                            key={idx}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <motion.div 
                                whileHover={{ scale: 1.01 }}
                                className="glass" 
                                style={{ 
                                    padding: '2.5rem clamp(1.5rem, 4vw, 3rem)', 
                                    borderRadius: '24px', 
                                    border: '1px solid var(--glass-border)',
                                    transition: 'background 0.3s ease',
                                    background: 'rgba(255,255,255,0.015)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: '1.5rem'
                                }}
                            >
                                <div style={{ flex: '1 1 500px' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1rem' }}>
                                        <span className="glass" style={{ fontSize: '0.7rem', padding: '0.3rem 0.8rem', borderRadius: '100px', fontWeight: 700, color: 'var(--neon-pink)' }}>
                                            {caseItem.industry}
                                        </span>
                                        <span className="glass" style={{ fontSize: '0.7rem', padding: '0.3rem 0.8rem', borderRadius: '100px', opacity: 0.8 }}>
                                            {caseItem.focus}
                                        </span>
                                    </div>
                                    <h4 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, marginBottom: '0.5rem', color: 'white' }}>
                                        {caseItem.title}
                                    </h4>
                                    <p style={{ fontSize: '1.1rem', opacity: 0.7, margin: 0, lineHeight: '1.5' }}>
                                        {caseItem.subtitle}
                                    </p>
                                </div>
                                <div className="neon-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 850, fontSize: '0.9rem' }}>
                                    {data.view_details_opt} →
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

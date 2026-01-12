'use client'

import { motion } from 'framer-motion'
import { Plus, Layout, Zap, Users, Globe } from 'lucide-react'
import { useI18n } from '@/lib/useI18n'

export default function BentoProfile() {
    const { t } = useI18n()

    return (
        <section className="container" style={{ paddingTop: '40px' }}>
            <div className="section-tag">{t.profile.tag}</div>
            <div className="bento-grid">
                {/* Main Profile Bento */}
                <div className="bento-item" style={{ gridColumn: 'span 8', gridRow: 'span 2' }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1.5rem' }}>{t.profile.title}</h2>
                        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', lineHeight: '1.8', opacity: 0.8, maxWidth: '100%' }}>
                            {t.profile.text}
                        </p>
                        <div style={{ display: 'flex', gap: 'clamp(1rem, 4vw, 2rem)', marginTop: '3rem', flexWrap: 'wrap' }}>
                            <div>
                                <div style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', fontWeight: 800, color: 'var(--neon-pink)' }}>15+</div>
                                <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>{t.profile.stats.projects}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', fontWeight: 800, color: 'var(--neon-pink)' }}>360°</div>
                                <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>{t.profile.stats.vision}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', fontWeight: 800, color: 'var(--neon-pink)' }}>40%</div>
                                <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>{t.profile.stats.efficiency}</div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative Glow */}
                    <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)', opacity: 0.2 }} />
                </div>

                {/* Education/Certifications */}
                <div className="bento-item" style={{ gridColumn: 'span 4', gridRow: 'span 2' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div className="glass" style={{ padding: '0.5rem', borderRadius: '12px' }}><Plus size={20} color="var(--neon-pink)" /></div>
                        <h3 style={{ fontSize: '1.1rem' }}>{t.profile.certifications}</h3>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                        {t.profile.certifications_list.map((cert: string) => (
                            <li key={cert}>• {cert}</li>
                        ))}
                    </ul>
                </div>

                {/* Skills Bento */}
                <div className="bento-item skills-carousel" style={{ gridColumn: 'span 12' }}>
                    <span style={{ fontWeight: 700, opacity: 0.5, fontSize: '0.8rem' }}>SKILLS:</span>
                    {t.profile.skills.map((skill: string) => (
                        <span key={skill} className="glass" style={{ padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.8rem' }}>{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

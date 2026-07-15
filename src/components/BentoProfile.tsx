'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useI18n } from '@/lib/useI18n'

export default function BentoProfile() {
    const { t } = useI18n()

    // Rotating workshop images for interactive visual appeal
    const workshopImages = [
        "/assets/workshops/uploaded_image_0_1768167836468.jpg",
        "/assets/workshops/uploaded_image_1_1768167836468.jpg",
        "/assets/workshops/uploaded_image_2_1768167836468.jpg",
        "/assets/workshops/uploaded_image_3_1768167836468.jpg"
    ]
    const [imgIdx, setImgIdx] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIdx(prev => (prev + 1) % workshopImages.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [workshopImages.length])

    return (
        <section id="sobre-mi" className="container" style={{ paddingTop: '40px' }}>
            <div className="section-tag">{t.profile.tag}</div>
            <div className="bento-grid">
                {/* Main Profile Bento */}
                <div className="bento-item" style={{ gridColumn: 'span 8', gridRow: 'span 3' }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1.5rem' }}>{t.profile.title}</h2>
                        <p style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)', lineHeight: '1.7', opacity: 0.8, maxWidth: '100%', whiteSpace: 'pre-line' }}>
                            {t.profile.text}
                        </p>
                        <div style={{ display: 'flex', gap: 'clamp(1.2rem, 4vw, 3rem)', marginTop: '3rem', flexWrap: 'wrap' }}>
                            {t.profile.stats.map((stat: any, idx: number) => (
                                <div key={idx}>
                                    <div style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', fontWeight: 800, color: 'var(--neon-pink)' }}>{stat.value}</div>
                                    <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>{stat.label}</div>
                                </div>
                            ))}
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
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', opacity: 0.8 }}>
                        {t.profile.certifications_list.map((cert: string) => (
                            <li key={cert}>• {cert}</li>
                        ))}
                    </ul>
                </div>

                {/* Interactive Workshops Slideshow Bento */}
                <div className="bento-item" style={{ gridColumn: 'span 4', gridRow: 'span 1', padding: 0, overflow: 'hidden', position: 'relative', minHeight: '220px' }}>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={imgIdx}
                            src={workshopImages[imgIdx]}
                            alt="Melanie Workshops"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                        />
                    </AnimatePresence>
                </div>

                {/* Skills Marquee Bento */}
                <div className="skills-marquee-container" style={{ gridColumn: 'span 12', flexDirection: 'column', alignItems: 'flex-start', gap: '1.2rem', padding: '2rem' }}>
                    <span style={{ fontWeight: 800, opacity: 0.6, fontSize: '0.85rem', letterSpacing: '0.1em', color: 'white' }}>SKILLS:</span>
                    <div className="skills-marquee-track">
                        {[...t.profile.skills, ...t.profile.skills, ...t.profile.skills].map((skill: string, idx: number) => (
                            <span key={`${skill}-${idx}`} className="skills-pill">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import { ArrowLeft, CheckCircle2, Users, Target, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const galleryImages = [
    '/assets/workshops/uploaded_image_0_1768167836468.jpg',
    '/assets/workshops/uploaded_image_1_1768167836468.jpg',
    '/assets/workshops/uploaded_image_2_1768167836468.jpg',
    '/assets/workshops/uploaded_image_3_1768167836468.jpg'
]

export default function WorkshopDetailPage() {
    const { lang } = useI18n()

    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)', color: 'white' }}>
            <div className="mesh-gradient" />

            {/* Header / Nav */}
            <nav className="container" style={{ padding: '2rem 1.5rem', display: 'flex', alignItems: 'center' }}>
                <Link href="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    <ArrowLeft size={20} /> Volver al Inicio
                </Link>
            </nav>

            <section className="container" style={{ padding: '4rem 1.5rem 8rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-tag">PAST WORKSHOP — SEP 2025</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                        UX/UI & <span className="neon-text">Conversión</span> — De la Intuición a la Estrategia
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.6, marginBottom: '4rem' }}>
                        Dictado en Workplace Palmares | 16 de Septiembre, 2025
                    </p>
                </motion.div>

                <div className="bento-grid" style={{ marginTop: '4rem' }}>
                    {/* El Objetivo */}
                    <div className="bento-item" style={{ gridColumn: 'span 7' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Target color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '1.8rem' }}>El Objetivo</h2>
                        </div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8 }}>
                            Diseñé esta capacitación intensiva para transformar la mentalidad del equipo, pasando de ver el diseño como una decisión estética a entenderlo como una herramienta de negocio. El foco principal fue cerrar la brecha entre la creatividad visual y los objetivos de conversión.
                        </p>
                    </div>

                    {/* La Dinámica */}
                    <div className="bento-item" style={{ gridColumn: 'span 5' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Zap color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '1.8rem' }}>La Dinámica</h2>
                        </div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8 }}>
                            Una sesión de 2 horas con metodología 100% práctica y gamificada, donde los asistentes aprendieron a justificar el "por qué" detrás de cada decisión, vinculando principios de interfaz con métricas de conversión (CRO).
                        </p>
                    </div>

                    {/* Qué se llevó el equipo */}
                    <div className="bento-item" style={{ gridColumn: 'span 12' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <Users color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '1.8rem' }}>Qué se llevó el equipo</h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {[
                                { title: 'Argumentación Estratégica', desc: 'Técnicas para defender decisiones de diseño ante clientes exigentes basándose en datos, no en gustos.' },
                                { title: 'Visión de Negocio', desc: 'Análisis de anatomías web de alta conversión y patrones de escaneabilidad (F-Patterns / Z-Patterns).' },
                                { title: 'Eficiencia en el Flujo', desc: 'Herramientas para reducir subjetividades y ciclos de revisión, aumentando la confianza del cliente.' },
                                { title: 'Práctica Real', desc: 'Role-playing de negociación y defensa de propuestas en escenarios complejos.' }
                            ].map((item, i) => (
                                <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                                    <h4 style={{ color: 'var(--neon-pink)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: '1.5' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Galería */}
                    <div className="bento-item" style={{ gridColumn: 'span 12' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Fotos del Workshop</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            {galleryImages.map((src, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    style={{
                                        position: 'relative',
                                        height: '400px',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        border: '1px solid var(--glass-border)'
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt={`Workshop photo ${i + 1}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

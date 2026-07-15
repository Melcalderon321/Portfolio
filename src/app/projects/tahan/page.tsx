'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import { ArrowLeft, Brain, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function TahanCaseStudy() {
    const { t, lang } = useI18n()

    const data = t.product_optimization.cases.find((c: any) => c.id === 'tahan')
    if (!data) return null

    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)', color: 'white' }}>
            <div className="mesh-gradient" />

            {/* Nav */}
            <nav className="container" style={{ padding: '2rem 1.5rem', display: 'flex', alignItems: 'center' }}>
                <Link href="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    <ArrowLeft size={20} /> {lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}
                </Link>
            </nav>

            <section className="container" style={{ padding: '4rem 1.5rem 8rem' }}>
                {/* 1. Header and Intro Context (900px) */}
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">{data.focus}</div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                            {data.title}: <span className="neon-text">{lang === 'es' ? 'Optimización' : 'Optimization'}</span>
                        </h1>
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', opacity: 0.7, fontSize: '1.1rem', marginBottom: '4rem' }}>
                            <span><strong>{lang === 'es' ? 'Industria:' : 'Industry:'}</strong> {data.industry}</span>
                            <span><strong>{lang === 'es' ? 'Enfoque:' : 'Focus:'}</strong> {data.focus}</span>
                        </div>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '2rem' }}>
                        {/* Context & Challenge */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                            {data.sections.context && (
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                        {data.sections.context.title}
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                        {data.sections.context.text}
                                    </p>
                                </div>
                            )}
                            {data.sections.challenge && (
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                        {data.sections.challenge.title}
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                        {data.sections.challenge.text}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* 2. Centered Image Block (800px) - Pulls content below up to eat empty bottom space */}
                {data.image && (
                    <div className="project-image-container">
                        <img
                            src={data.image}
                            alt={data.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                borderRadius: '16px'
                            }}
                        />
                    </div>
                )}

                {/* 3. Investigation & remaining sections (900px) */}
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {/* Investigation */}
                        {data.sections.investigation && (
                            <div>
                                <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800 }}>
                                    {data.sections.investigation.title}
                                </h3>
                                <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                    {data.sections.investigation.text}
                                </p>
                            </div>
                        )}

                        {/* Findings & Recommendations */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                            {data.sections.findings && (
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800 }}>
                                        {data.sections.findings.title}
                                    </h3>
                                    {data.sections.findings.bullets && (
                                        <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                            {data.sections.findings.bullets.map((b: string, bIdx: number) => (
                                                <li key={bIdx} style={{ marginBottom: '0.5rem' }}>{b}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                            {data.sections.recommendations && (
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800 }}>
                                        {data.sections.recommendations.title}
                                    </h3>
                                    {data.sections.recommendations.bullets && (
                                        <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                            {data.sections.recommendations.bullets.map((b: string, bIdx: number) => (
                                                <li key={bIdx} style={{ marginBottom: '0.5rem' }}>{b}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Hypothesis - Clean Section */}
                        {data.sections.hypothesis && (
                            <div style={{ padding: '0.5rem 0' }}>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Brain size={22} /> {data.sections.hypothesis.title}
                                </h3>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                    {data.sections.hypothesis.text}
                                </p>
                            </div>
                        )}

                        {/* Results - Clean Section */}
                        {data.sections.result && (
                            <div style={{ padding: '0.5rem 0' }}>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle2 size={22} /> {data.sections.result.title}
                                </h3>
                                <p style={{ opacity: 0.9, fontSize: '1.05rem', lineHeight: '1.7', color: 'white' }}>
                                    {data.sections.result.text}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}

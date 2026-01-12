'use client'

import { useI18n } from '@/lib/useI18n'

export default function Experience() {
    const { t } = useI18n()

    const items = [
        {
            company: 'Freelance',
            date: 'Junio 2023 – Actualidad',
            role: 'UX/UI Designer'
        },
        {
            company: 'Digital Health Project (Happ)',
            date: 'Marzo – Noviembre 2025',
            role: 'Product Designer'
        },
        {
            company: 'Tehuentec – Agencia Digital',
            date: 'Previous',
            role: 'UX/UI Designer'
        }
    ]

    return (
        <section id="experiencia" className="container" style={{ paddingTop: '40px' }}>
            <div className="glass" style={{ padding: '4rem', borderRadius: '32px' }}>
                <h2 className="neon-text" style={{ marginBottom: '3rem' }}>{t.nav.experience}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {t.profile.experience_items.map((item: any, idx: number) => (
                        <div key={idx} className="experience-item" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingBottom: '2rem',
                            borderBottom: '1px solid var(--glass-border)'
                        }}>
                            <div>
                                <h3 style={{ fontSize: '1.4rem' }}>{item.company} <span style={{ fontWeight: 400, opacity: 0.8 }}>{item.role}</span></h3>
                            </div>
                            <div style={{ textAlign: 'right', opacity: 0.8 }}>
                                – {item.location}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

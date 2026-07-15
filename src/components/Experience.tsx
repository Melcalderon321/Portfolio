'use client'

import { useI18n } from '@/lib/useI18n'

export default function Experience() {
    const { t } = useI18n()

    // Helper to render high-quality country flag images, compatible with Windows OS
    const renderFlag = (location: string) => {
        const loc = location.toLowerCase()
        let code = ''
        if (loc.includes('argentina')) code = 'ar'
        else if (loc.includes('chile')) code = 'cl'
        else if (loc.includes('españa') || loc.includes('spain')) code = 'es'

        if (!code) return null
        
        return (
            <img
                src={`https://flagcdn.com/w40/${code}.png`}
                alt={location}
                style={{
                    width: '20px',
                    height: 'auto',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '0.5rem',
                    borderRadius: '3px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}
            />
        )
    }

    return (
        <section id="experiencia" className="container" style={{ paddingTop: '10px' }}>
            <div className="glass" style={{ padding: '4rem clamp(1.5rem, 5vw, 4rem)', borderRadius: '32px', border: '1px solid var(--neon-pink)', background: 'rgba(255, 45, 149, 0.025)', boxShadow: '0 20px 40px rgba(255, 45, 149, 0.05)' }}>
                <h2 className="neon-text" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '3rem', fontWeight: 800, lineHeight: '1.25' }}>{t.nav.experience}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {t.profile.experience_items.map((item: any, idx: number) => (
                        <div key={idx} className="experience-item" style={{
                            paddingBottom: '2rem',
                            borderBottom: '1px solid var(--glass-border)'
                        }}>
                            <div>
                                <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', fontWeight: 750, color: 'white' }}>
                                    {item.company} <span style={{ fontWeight: 400, opacity: 0.8 }}>{item.role}</span>
                                </h3>
                            </div>
                            <div className="experience-location" style={{ opacity: 0.8, fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}>
                                – {item.location} {renderFlag(item.location)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

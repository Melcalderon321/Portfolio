'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const uxProjects = [
    {
        id: 'happ',
        title: 'Happ - HealthTech',
        desc: 'Transformé concepto inicial en prototipos de alta fidelidad para cerrar acuerdos estratégicos enterprise.',
        tags: ['Product Design', 'HealthTech', 'Enterprise'],
        image: '/assets/projects/happ/hero.png'
    },
    {
        id: 'rastrea-patitas',
        title: 'Rastrea Patitas',
        desc: 'Conectando esperanza para el bienestar animal mediante un ecosistema digital centralizado.',
        tags: ['UX/UI Design', 'Social Impact', 'PetTech'],
        image: '/assets/projects/rastrea-patitas.png'
    }
]

const galleryImages = [
    '/assets/web-projects/web1.png',
    '/assets/web-projects/web2.png',
    '/assets/web-projects/web3.png',
    '/assets/web-projects/web4.png',
    '/assets/web-projects/web8.png',
    '/assets/web-projects/web5.png',
    '/assets/web-projects/web6.png',
    '/assets/web-projects/web7.jpg',
    '/assets/web-projects/web9.png',
    '/assets/web-projects/web10.png',
    '/assets/web-projects/web11.png',
    '/assets/web-projects/web12.png',
    '/assets/web-projects/web13.png',
    '/assets/web-projects/web14.png'
]

export default function CategorizedProjects() {
    const { t } = useI18n()
    const scrollRef = useRef<HTMLDivElement>(null)

    // Handle horizontal carousel scroll
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollAmount = clientWidth * 0.75
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id="proyectos" className="container" style={{ paddingBottom: '80px', paddingTop: '80px' }}>
            {/* 1. Productos Digitales (Casos de Estudio) */}
            <div style={{ marginBottom: '80px' }}>
                <div className="section-tag">{t.projects.ux_projects_tag}</div>
                <h2
                    style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '3rem', fontWeight: 800 }}
                    dangerouslySetInnerHTML={{ __html: t.projects.ux_projects_title }}
                />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '2.5rem' }}>
                    {uxProjects.map(project => (
                        <Link
                            key={project.id}
                            href={project.id === 'happ' ? '/projects/happ' : project.id === 'rastrea-patitas' ? '/projects/rastrea-patitas' : '#'}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bento-item project-card-height"
                                style={{ padding: 0, display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{
                                    height: '70%',
                                    background: (project.id === 'happ' || project.id === 'rastrea-patitas') ? `url(${project.image}) center/contain no-repeat` : '#1a1a1e',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingRight: '20px' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} className="glass" style={{ fontSize: '0.7rem', padding: '0.3rem 0.8rem', borderRadius: '100px', backdropFilter: 'blur(10px)' }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)', marginBottom: '0.5rem', fontWeight: 750 }}>{project.title}</h3>
                                    <p style={{ opacity: 0.8, fontSize: 'clamp(0.9rem, 1.1vw, 1rem)', lineHeight: '1.6' }}>{project.desc}</p>
                                    <span className="neon-text" style={{ marginTop: '1.5rem', fontWeight: 800, textDecoration: 'none', fontSize: '0.9rem' }}>{t.projects.view_case} →</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* 2. Proyectos Web (Carrusel Atractivo con border-radius de 15px) */}
            <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <div className="section-tag">{t.projects.web_projects_tag}</div>
                        <h2
                            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', margin: 0, fontWeight: 800 }}
                            dangerouslySetInnerHTML={{ __html: t.projects.web_projects_title }}
                        />
                    </div>
                    {/* Navigation Buttons */}
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button 
                            onClick={() => scroll('left')}
                            className="glass"
                            style={{ 
                                width: '48px', 
                                height: '48px', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                cursor: 'pointer', 
                                color: 'white', 
                                border: '1px solid var(--glass-border)',
                                background: 'rgba(255,255,255,0.02)',
                                transition: 'all 0.2s',
                                outline: 'none'
                            }}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="glass"
                            style={{ 
                                width: '48px', 
                                height: '48px', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                cursor: 'pointer', 
                                color: 'white', 
                                border: '1px solid var(--glass-border)',
                                background: 'rgba(255,255,255,0.02)',
                                transition: 'all 0.2s',
                                outline: 'none'
                            }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
                
                {/* Carousel Track container */}
                <div 
                    ref={scrollRef}
                    className="hide-scrollbar"
                    style={{ 
                        display: 'flex', 
                        gap: '1.5rem', 
                        overflowX: 'auto', 
                        scrollSnapType: 'x mandatory',
                        scrollBehavior: 'smooth',
                        paddingBottom: '20px',
                        paddingTop: '5px'
                    }}
                >
                    {galleryImages.map((imgSrc, idx) => (
                        <motion.div
                            key={idx}
                            whileHover="hover"
                            className="glass"
                            style={{
                                flex: '0 0 clamp(290px, 45vw, 550px)',
                                scrollSnapAlign: 'start',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                border: '1px solid var(--glass-border)',
                                background: 'rgba(255, 255, 255, 0.015)',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                                cursor: 'pointer',
                                aspectRatio: '16/10'
                            }}
                        >
                            <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                                <motion.img
                                    variants={{
                                        hover: { scale: 1.04 }
                                    }}
                                    transition={{ duration: 0.4 }}
                                    src={imgSrc}
                                    alt={`Web Project ${idx + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none'
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    )
}

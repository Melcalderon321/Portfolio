'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import Image from 'next/image'
import Link from 'next/link'

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

const webProjects = [
    {
        id: 'tehuentec',
        title: 'Tehuentec Agency',
        desc: 'Diseñadora Web y encargada de Innovación en Tehuentec. Estratega digital con experiencia en el diseño de más de 15 proyectos para mercados de Miami, Argentina, Colombia y Alemania. Mi especialidad es la creación de webs para campañas y ecommerce que combinan estética y funcionalidad. Como líder de modernización, estoy a cargo de la investigación de nuevas tecnologías y la optimización de procesos con IA, elevando el estándar de eficiencia en cada entrega de la agencia.',
        tags: ['Web Design', 'Innovation Lead', 'IA Optimization'],
        image: ''
    }
]

export default function CategorizedProjects() {
    const { t } = useI18n()

    return (
        <section id="proyectos" className="container" style={{ paddingBottom: '80px', paddingTop: '80px' }}>
            <div style={{ marginBottom: '60px' }}>
                <div className="section-tag">{t.projects.ux_projects_tag}</div>
                <h2
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '3rem' }}
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
                                    <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '0.5rem' }}>{project.title}</h3>
                                    <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>{project.desc}</p>
                                    <span className="neon-text" style={{ marginTop: '1.5rem', fontWeight: 800, textDecoration: 'none', fontSize: '0.9rem' }}>{t.projects.view_case} →</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <div className="section-tag">{t.projects.web_projects_tag}</div>
                <h2
                    style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '3rem' }}
                    dangerouslySetInnerHTML={{ __html: t.projects.web_projects_title }}
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.25rem' }}>
                    {webProjects.map(project => (
                        <div key={project.id} className="bento-item" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--neon-pink)', fontWeight: 700, marginBottom: '0.5rem' }}>{project.tags[0]}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                            <p style={{ opacity: 0.6, fontSize: '1.1rem', lineHeight: '1.6' }}>{project.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

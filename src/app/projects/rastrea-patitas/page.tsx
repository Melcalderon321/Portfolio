'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import { ArrowLeft, Target, Award, Brain, ShieldCheck, Heart, Map, GraduationCap, Users } from 'lucide-react'
import Link from 'next/link'

export default function RastreaPatitasCaseStudy() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)', color: 'white' }}>
            <div className="mesh-gradient" />

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
                    <div className="section-tag">Case Study — Social Impact & PetTech</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                        Rastrea Patitas: <span className="neon-text">Conectando esperanza</span> para el bienestar animal
                    </h1>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', opacity: 0.7, fontSize: '1.1rem', marginBottom: '4rem' }}>
                        <span><strong>Rol:</strong> Equipo de Product Design (UX/UI)</span>
                        <span><strong>Mercado:</strong> Global / Sin fines de lucro</span>
                        <span><strong>Impacto:</strong> Escalabilidad comunitaria</span>
                    </div>
                </motion.div>

                <div className="bento-grid">
                    {/* El Impacto Social */}
                    <div className="bento-item" style={{ gridColumn: 'span 8' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Award color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '2rem' }}>El Impacto Social</h2>
                        </div>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8, marginBottom: '2rem' }}>
                            Como equipo, diseñamos Rastrea Patitas bajo la premisa de profesionalizar el proceso de reporte de mascotas extraviadas. Transformamos un ecosistema fragmentado en redes sociales en una infraestructura digital centralizada. Los prototipos de alta fidelidad que desarrollamos no solo definieron la interfaz, sino que sirvieron como una herramienta para atraer voluntarios y alianzas con refugios. Al simplificar la carga de datos, logramos reducir el tiempo de respuesta entre el avistamiento y el rescate, convirtiendo la empatía ciudadana en acciones geolocalizadas efectivas.
                        </p>
                    </div>

                    {/* El Desafío */}
                    <div className="bento-item" style={{ gridColumn: 'span 4' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Target color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '1.8rem' }}>El Desafío</h2>
                        </div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', opacity: 0.8 }}>
                            Nuestro desafío grupal fue eliminar la fricción en momentos de crisis. El usuario que pierde una mascota o encuentra una en la calle opera bajo altos niveles de estrés. Diseñamos una arquitectura de información que permite realizar un reporte en menos de 60 segundos, garantizando que los datos fueran precisos para un rescate exitoso, sin abrumar al informante con formularios extensos.
                        </p>
                    </div>

                    {/* Alerta Inmediata */}
                    <div className="bento-item" style={{ gridColumn: 'span 12' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <Heart color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '2rem' }}>1. Sistema de Alerta Inmediata (UX de Emergencia)</h2>
                        </div>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8 }}>
                            Diseñamos un flujo de "Reporte Express" que prioriza la imagen y la geolocalización automática. Implementamos categorías visuales claras para diferenciar entre Mascotas Perdidas, Encontradas o En Adopción. Esta jerarquización permite que el feed sea escaneable en segundos, asegurando que las alertas urgentes reciban atención prioritaria mediante un diseño de tarjetas de alto contraste.
                        </p>
                    </div>

                    {/* Decisión Estratégica */}
                    <div className="bento-item" style={{ gridColumn: 'span 12', border: '1px solid var(--neon-pink)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <ShieldCheck color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '2rem' }}>2. Decisión Estratégica: Filtros Inteligentes vs. Búsqueda Libre</h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                                <h3 style={{ marginBottom: '1rem' }}>El Problema</h3>
                                <p style={{ opacity: 0.7 }}>Las descripciones de texto libre suelen ser ambiguas, lo que dificulta el cruce de datos entre mascotas perdidas y encontradas.</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '20px', background: 'rgba(255, 45, 149, 0.05)' }}>
                                <h3 style={{ marginBottom: '1rem' }}>Nuestra Solución</h3>
                                <p style={{ opacity: 0.7 }}>Implementamos una taxonomía de "Atributos Rápidos". En lugar de depender de la redacción del usuario, guiamos la carga mediante iconos de color de pelaje, tamaño y raza. Esta estandarización permite que el sistema realice cruces automáticos.</p>
                            </div>
                        </div>
                    </div>

                    {/* Mapa de Calor */}
                    <div className="bento-item" style={{ gridColumn: 'span 6' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Map color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '1.8rem' }}>3. Mapa de Calor y Avistamientos</h2>
                        </div>
                        <p style={{ opacity: 0.8, lineHeight: '1.7' }}>
                            Transformamos el listado tradicional en un panel interactivo de rastreo. Mediante la integración de mapas con pines dinámicos, los usuarios pueden visualizar la ruta probable de una mascota basada en los últimos avistamientos reportados.
                        </p>
                    </div>

                    {/* Gestión de Adopciones */}
                    <div className="bento-item" style={{ gridColumn: 'span 6' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Users color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '1.8rem' }}>4. Gestión de Adopciones</h2>
                        </div>
                        <p style={{ opacity: 0.8, lineHeight: '1.7' }}>
                            Para la sección de adopciones, creamos perfiles detallados que incluyen niveles de energía, compatibilidad y necesidades especiales. Introdujimos un formulario de pre-adopción integrado que actúa como filtro inicial para los refugios.
                        </p>
                    </div>

                    {/* Educación */}
                    <div className="bento-item" style={{ gridColumn: 'span 12' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <GraduationCap color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '1.8rem' }}>5. Educación y Comunidad (Gamificación Social)</h2>
                        </div>
                        <p style={{ opacity: 0.8, lineHeight: '1.7' }}>
                            Diseñamos un módulo de "Guía de Primeros Pasos" para rescatistas novatos, transformando manuales densos en aprendizajes visuales. Para fomentar la participación constante, implementamos mecánicas donde los usuarios ganan insignias por reportes verificados o ayuda en rescates.
                        </p>
                    </div>

                    {/* Conclusión */}
                    <div className="bento-item" style={{ gridColumn: 'span 12', background: 'rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Conclusión</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8, maxWidth: '900px', margin: '0 auto' }}>
                            Rastrea Patitas demuestra que el Product Design colaborativo puede ser el motor de causas sociales de gran escala. Nuestra capacidad como equipo para transformar el caos de reportes informales en un sistema de datos estructurado permitió pasar de una idea solidaria a un producto digital sólido y validado.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

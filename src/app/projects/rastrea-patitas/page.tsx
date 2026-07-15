'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import { ArrowLeft, Target, Brain, Award, ShieldCheck, CheckCircle2, Heart, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

export default function RastreaPatitasCaseStudy() {
    const { lang } = useI18n()

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
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">Case Study — Social Impact & PetTech</div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                            Rastrea Patitas
                        </h1>
                        <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 400, opacity: 0.8, marginBottom: '2.5rem', lineHeight: '1.4' }}>
                            Diseñando un ecosistema digital para acelerar el reencuentro entre personas y mascotas
                        </h2>
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', opacity: 0.7, fontSize: '1.1rem', marginBottom: '4rem' }}>
                            <span><strong>{lang === 'es' ? 'Rol:' : 'Role:'}</strong> Equipo de Product Design (UX/UI)</span>
                            <span><strong>{lang === 'es' ? 'Foco:' : 'Focus:'}</strong> Impacto Social & Geolocalización</span>
                        </div>
                    </motion.div>

                    {/* Editorial Text Flow */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginTop: '2rem' }}>
                        
                        {/* Resumen */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Heart size={20} /> {lang === 'es' ? 'Resumen' : 'Summary'}
                            </h3>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Rastrea Patitas es una plataforma colaborativa diseñada para facilitar el reencuentro entre personas y sus mascotas perdidas. El proyecto surge ante la necesidad de centralizar información dispersa y transformar publicaciones aisladas en una red de colaboración capaz de conectar reportes, avistamientos y actores de la comunidad.
                            </p>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                Como parte del equipo de Product Design, participé en la definición de la experiencia de usuario, la arquitectura de información y los principales flujos del producto, colaborando en el diseño de una plataforma preparada para escalar y generar impacto social.
                            </p>
                        </div>

                        {/* El contexto */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                {lang === 'es' ? 'El contexto' : 'The Context'}
                            </h3>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Cuando una mascota desaparece, las primeras horas son determinantes para aumentar las probabilidades de encontrarla. Sin embargo, la búsqueda suele comenzar de forma desorganizada, con publicaciones en distintas redes sociales, grupos comunitarios y aplicaciones de mensajería.
                            </p>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                Esta fragmentación dificulta la difusión de información, genera publicaciones duplicadas y reduce las posibilidades de conectar reportes de mascotas perdidas con avistamientos o animales encontrados. El desafío del proyecto no era únicamente digitalizar este proceso, sino diseñar un sistema que organizara la información, facilitara la colaboración entre distintos actores y ayudara a reducir el tiempo necesario para lograr un reencuentro.
                            </p>
                        </div>

                        {/* Los objetivos */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Target size={22} /> {lang === 'es' ? 'Los objetivos' : 'Objectives'}
                            </h3>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Reducir el tiempo necesario para crear un reporte.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Estandarizar la información publicada para mejorar su calidad.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Facilitar la conexión entre mascotas perdidas y encontradas.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Fomentar la colaboración entre ciudadanos, refugios y organizaciones.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Diseñar una plataforma preparada para crecer y adaptarse a diferentes comunidades.</li>
                            </ul>
                        </div>

                        {/* Mi rol */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Users size={20} /> {lang === 'es' ? 'Mi rol' : 'My Role'}
                            </h3>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Como parte del equipo de Product Design participé en distintas etapas del desarrollo del producto, colaborando con el equipo para definir una experiencia simple, intuitiva y orientada a la acción.
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Product Discovery.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Investigación de usuarios.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Arquitectura de Información.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Definición de flujos de usuario.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Wireframes y prototipos.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Diseño de componentes reutilizables.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Validación de la experiencia.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Diseño responsive.</li>
                            </ul>
                        </div>

                        {/* Las decisiones */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Brain size={24} color="var(--neon-pink)" /> {lang === 'es' ? 'Las decisiones de diseño' : 'Design Decisions'}
                            </h3>

                            {/* Decisión 1 */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                    Diseñar para momentos de alta carga emocional
                                </h4>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Las personas que utilizan la plataforma atraviesan una situación de incertidumbre y estrés. En ese contexto, cada paso adicional representa una barrera que puede retrasar la difusión de información crítica.
                                </p>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                    Por ello diseñamos una experiencia guiada, con pocos pasos, lenguaje claro y acciones visibles que permitieran completar un reporte de forma rápida sin sacrificar la calidad de los datos. El objetivo fue reducir la carga cognitiva y acompañar al usuario en un momento de alta sensibilidad emocional.
                                </p>
                            </div>

                            {/* Decisión 2 */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                    Estandarizar la información para facilitar las coincidencias
                                </h4>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Uno de los principales desafíos era evitar que la información dependiera únicamente de descripciones libres, ya que esto dificultaba la búsqueda y comparación entre reportes.
                                </p>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                    Para resolverlo diseñamos un sistema basado en atributos estructurados, como color, tamaño, raza, ubicación, fecha y estado de la mascota. Esta decisión permitió mejorar la calidad de los datos, facilitar futuras coincidencias entre reportes y sentar las bases para incorporar herramientas de búsqueda inteligente.
                                </p>
                            </div>

                            {/* Decisión 3 */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <MapPin size={18} /> La ubicación como eje de la experiencia
                                </h4>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    La geolocalización se convirtió en uno de los pilares del producto.
                                </p>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                    Diseñamos una experiencia centrada en mapas interactivos y reportes georreferenciados que permitían visualizar zonas de búsqueda, registrar avistamientos y seguir la evolución de cada caso en tiempo real. Más que mostrar un mapa, el objetivo era ofrecer contexto para que la comunidad pudiera actuar de forma coordinada y eficiente.
                                </p>
                            </div>

                            {/* Decisión 4 */}
                            <div>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                    Diseñar para una comunidad, no para un único usuario
                                </h4>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Aunque el principal usuario era la persona que había perdido a su mascota, rápidamente identificamos que el éxito del producto dependía de la colaboración entre múltiples actores.
                                </p>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Por ello diseñamos recorridos específicos para:
                                </p>
                                <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                    <li style={{ marginBottom: '0.4rem' }}>Personas que reportan una mascota perdida.</li>
                                    <li style={{ marginBottom: '0.4rem' }}>Personas que encuentran un animal.</li>
                                    <li style={{ marginBottom: '0.4rem' }}>Refugios y organizaciones.</li>
                                    <li style={{ marginBottom: '0.4rem' }}>Rescatistas.</li>
                                    <li style={{ marginBottom: '0.4rem' }}>Voluntarios.</li>
                                    <li style={{ marginBottom: '0.4rem' }}>Miembros de la comunidad que colaboran con avistamientos.</li>
                                </ul>
                            </div>
                        </div>

                        {/* La solución */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800 }}>
                                {lang === 'es' ? 'La solución' : 'The Solution'}
                            </h3>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                El resultado fue una plataforma colaborativa diseñada para conectar personas, información y ubicación en una única experiencia.
                            </p>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Entre las principales funcionalidades se encuentran:
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Reportes de mascotas perdidas:</strong> Flujos simples y guiados para registrar la información más relevante en pocos minutos.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Reportes de mascotas encontradas:</strong> Publicación estructurada de animales encontrados para facilitar coincidencias con reportes existentes.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Mapa interactivo:</strong> Visualización geográfica de reportes y avistamientos que permite seguir la evolución de cada caso.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Sistema de avistamientos:</strong> Registro colaborativo de nuevos puntos de referencia que ayudan a actualizar la búsqueda en tiempo real.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Comunidad:</strong> Espacios pensados para que ciudadanos, refugios y voluntarios colaboren activamente durante todo el proceso.
                                </li>
                            </ul>
                        </div>

                        {/* Los desafíos */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <ShieldCheck size={20} /> {lang === 'es' ? 'Los desafíos' : 'The Challenges'}
                            </h3>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Diseñar una plataforma colaborativa implicó equilibrar constantemente necesidades de negocio, experiencia de usuario y calidad de la información.
                            </p>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Durante el proyecto fue necesario encontrar el equilibrio entre:
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Rapidez del reporte y calidad de los datos.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Facilidad de uso y precisión de la información.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Participación abierta y confiabilidad de los reportes.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Flexibilidad del sistema y estandarización de los datos.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Crecimiento de la comunidad y escalabilidad de la plataforma.</li>
                            </ul>
                        </div>

                        {/* Los resultados */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Award size={20} /> {lang === 'es' ? 'Los resultados' : 'Results'}
                            </h3>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                El proyecto permitió validar una propuesta de producto centrada en la colaboración ciudadana y demostrar cómo una mejor organización de la información puede aumentar la efectividad de las búsquedas.
                            </p>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Entre los principales resultados se destacan:
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Definición de una arquitectura de información orientada a la colaboración.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Validación de los principales recorridos mediante prototipos interactivos.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Diseño de una experiencia preparada para integrar nuevos actores y funcionalidades.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Construcción de una base de producto escalable para futuras etapas de desarrollo.</li>
                            </ul>
                        </div>

                        {/* Cómo mediría el éxito */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800 }}>
                                {lang === 'es' ? 'Cómo mediría el éxito' : 'Measuring Success'}
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.15rem', color: 'var(--neon-pink)', marginBottom: '0.5rem', fontWeight: 800 }}>
                                        {lang === 'es' ? 'Experiencia de usuario' : 'User Experience'}
                                    </h4>
                                    <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                        <li style={{ marginBottom: '0.4rem' }}>Tiempo promedio para crear un reporte.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Tasa de reportes completados.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Tiempo hasta el primer avistamiento.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Tiempo promedio hasta el reencuentro.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.15rem', color: 'var(--neon-pink)', marginBottom: '0.5rem', fontWeight: 800 }}>
                                        {lang === 'es' ? 'Impacto del producto' : 'Product Impact'}
                                    </h4>
                                    <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                        <li style={{ marginBottom: '0.4rem' }}>Coincidencias exitosas entre reportes.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Participación activa de la comunidad.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Retención de usuarios.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Conversión de visitantes en colaboradores.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Casos de éxito resueltos gracias a la plataforma.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Próximos pasos */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800 }}>
                                {lang === 'es' ? 'Próximos pasos' : 'Next Steps'}
                            </h3>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Matching inteligente entre reportes mediante inteligencia artificial.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Reconocimiento automático de mascotas utilizando visión por computadora.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Notificaciones inteligentes según proximidad geográfica.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Predicción de posibles zonas de desplazamiento.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Panel de gestión para refugios y organizaciones.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Herramientas de análisis para identificar patrones de pérdida y recuperación.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Integración con clínicas veterinarias y sistemas de identificación mediante microchip.</li>
                            </ul>
                        </div>

                        {/* Aprendizajes */}
                        <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '3rem' }}>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                {lang === 'es' ? 'Aprendizajes' : 'Key Takeaways'}
                            </h3>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Este proyecto reforzó la importancia de entender que el diseño de producto no consiste únicamente en crear interfaces, sino en construir sistemas capaces de coordinar personas, organizar información y facilitar la colaboración entre múltiples actores.
                            </p>
                            <p style={{ opacity: 0.9, fontSize: '1.05rem', lineHeight: '1.7', fontWeight: 700, color: 'white' }}>
                                Mi aporte estuvo enfocado en diseñar una experiencia que equilibrara las necesidades de los usuarios con los objetivos del producto, simplificando procesos complejos y sentando las bases para una plataforma escalable, preparada para evolucionar y generar un impacto real en la comunidad.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

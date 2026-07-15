'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import { ArrowLeft, Target, Brain, Award, ShieldCheck, CheckCircle2, Heart } from 'lucide-react'
import Link from 'next/link'

export default function HappCaseStudy() {
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
                        <div className="section-tag">Case Study — HealthTech AI</div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                            Happ: <span className="neon-text">{lang === 'es' ? 'Salud Simplificada' : 'Simplified Health'}</span>
                        </h1>
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', opacity: 0.7, fontSize: '1.1rem', marginBottom: '4rem' }}>
                            <span><strong>{lang === 'es' ? 'Rol:' : 'Role:'}</strong> Product Designer (UX/UI)</span>
                            <span><strong>{lang === 'es' ? 'Mercado:' : 'Market:'}</strong> Chile (Isapres/Fonasa)</span>
                        </div>
                    </motion.div>

                    {/* Editorial Text Flow (No card containers, matching Tahan/CIBA) */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginTop: '2rem' }}>
                        
                        {/* Resumen */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Heart size={20} /> {lang === 'es' ? 'Resumen' : 'Summary'}
                            </h3>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Happ nació con el objetivo de hacer más simple la interacción entre las personas y el sistema de salud chileno. La plataforma utiliza inteligencia artificial para ayudar a los usuarios a comprender coberturas médicas, gestionar trámites y acceder a información clínica mediante una experiencia conversacional clara, confiable y fácil de utilizar.
                            </p>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                Como Product Designer, participé desde las primeras etapas de descubrimiento hasta la definición de la experiencia del producto. Trabajé junto a equipos de producto, desarrollo y negocio transformando un problema complejo en una solución preparada para escalar.
                            </p>
                        </div>

                        {/* El contexto */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                {lang === 'es' ? 'El contexto' : 'The Context'}
                            </h3>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                El sistema de salud chileno está compuesto por múltiples actores, normativas y modelos de cobertura, como Fonasa, Isapres y prestadores privados. Esta complejidad dificulta que las personas comprendan sus beneficios, realicen trámites o tomen decisiones informadas sobre su atención médica.
                            </p>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                El desafío del proyecto no consistía únicamente en diseñar una mejor interfaz, sino en traducir un sistema complejo en una experiencia simple, comprensible y confiable, capaz de generar valor tanto para los usuarios como para las instituciones de salud.
                            </p>
                        </div>

                        {/* Los objetivos */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Target size={22} /> {lang === 'es' ? 'Los objetivos' : 'Objectives'}
                            </h3>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Desde el inicio, el producto se planteó con objetivos claros orientados al negocio y a la experiencia de usuario.
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Simplificar procesos complejos relacionados con la salud.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Reducir la carga cognitiva durante la navegación.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Mejorar la comprensión de la información médica.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Validar la propuesta de valor mediante prototipos de alta fidelidad.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Facilitar la adopción por parte de instituciones y usuarios.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Diseñar una solución escalable para el mercado chileno.</li>
                            </ul>
                        </div>

                        {/* Mi rol */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800 }}>
                                {lang === 'es' ? 'Mi rol' : 'My Role'}
                            </h3>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Mi participación abarcó distintas etapas del ciclo de diseño y producto, colaborando de forma continua con equipos multidisciplinarios para definir la experiencia y validar las decisiones del producto.
                            </p>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Durante el proyecto participé en:
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Product Discovery.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Investigación de usuarios.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Arquitectura de Información.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Definición de flujos de usuario.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Wireframes y prototipos de alta fidelidad.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Diseño de la experiencia conversacional.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Validación con stakeholders.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Priorización de funcionalidades.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Colaboración con desarrollo durante la implementación.</li>
                            </ul>
                        </div>

                        {/* Las decisiones */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Brain size={24} color="var(--neon-pink)" /> {lang === 'es' ? 'Las decisiones de diseño' : 'Design Decisions'}
                            </h3>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                                Más allá del diseño de interfaces, gran parte del trabajo consistió en tomar decisiones que equilibraran las necesidades del negocio, las restricciones técnicas y la experiencia de usuario.
                            </p>

                            {/* Decisión 1 */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                    Definir cuándo utilizar IA y cuándo utilizar reglas de negocio
                                </h4>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Uno de los principales desafíos fue establecer qué procesos podían apoyarse en inteligencia artificial y cuáles debían permanecer gobernados por reglas determinísticas.
                                </p>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Se identificó que aspectos como coberturas médicas, validaciones clínicas y normativas requerían respuestas completamente confiables, por lo que se optó por una arquitectura híbrida.
                                </p>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    La inteligencia artificial se utilizó para facilitar la interacción con el usuario, mientras que las decisiones críticas permanecieron respaldadas por reglas de negocio y fuentes verificadas.
                                </p>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                    Esta decisión permitió aumentar la confiabilidad, mejorar la trazabilidad de la información y construir una solución preparada para escalar.
                                </p>
                            </div>

                            {/* Decisión 2 */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                    Diseñar una experiencia conversacional
                                </h4>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    El objetivo nunca fue crear un chatbot. El verdadero desafío consistía en reducir la carga cognitiva de personas que debían enfrentarse a procesos médicos complejos.
                                </p>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Para lograrlo diseñé una experiencia basada en conversaciones guiadas mediante lenguaje natural, respuestas contextualizadas y componentes interactivos que ayudaban a avanzar paso a paso sin generar sobrecarga de información.
                                </p>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                    La conversación dejó de ser un canal de soporte para convertirse en la principal forma de interacción con el producto.
                                </p>
                            </div>

                            {/* Decisión 3 */}
                            <div>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                    Transformar información médica en decisiones
                                </h4>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Otra de las oportunidades del proyecto consistió en convertir información clínica compleja en contenidos fáciles de interpretar.
                                </p>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Se diseñó un sistema visual basado en prioridades, alertas, indicadores y recomendaciones que permitía comprender rápidamente el estado de salud y conocer las acciones sugeridas en cada situación.
                                </p>
                                <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                    El objetivo no era mostrar más información, sino ayudar al usuario a tomar mejores decisiones.
                                </p>
                            </div>
                        </div>

                        {/* La solución */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800 }}>
                                {lang === 'es' ? 'La solución' : 'The Solution'}
                            </h3>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                El resultado fue una plataforma de salud que integra inteligencia artificial con reglas de negocio para ofrecer una experiencia simple y confiable.
                            </p>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Entre las funcionalidades diseñadas se encuentran:
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Asistente conversacional:</strong> Una experiencia guiada mediante lenguaje natural que ayuda a resolver consultas y acompañar procesos médicos complejos.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Dashboard de salud:</strong> Un espacio donde el usuario puede visualizar de forma clara su información clínica, indicadores relevantes y próximos pasos.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Gestión documental:</strong> Una experiencia diseñada para organizar documentos médicos y facilitar su consulta sin depender de archivos complejos o difíciles de interpretar.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Agenda médica:</strong> Flujos para la gestión de turnos, seguimiento de consultas y recordatorios relacionados con la atención médica.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Sistema de recomendaciones:</strong> Alertas y sugerencias priorizadas para ayudar al usuario a comprender qué acciones realizar según su contexto.
                                </li>
                            </ul>
                        </div>

                        {/* Los desafíos */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <ShieldCheck size={20} /> {lang === 'es' ? 'Los desafíos' : 'The Challenges'}
                            </h3>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Como en cualquier producto digital complejo, muchas decisiones implicaron encontrar un equilibrio entre distintos objetivos.
                            </p>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Durante el proyecto fue necesario balancear:
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Inteligencia artificial y precisión clínica.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Personalización y privacidad de los datos.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Automatización y supervisión humana.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Rapidez de desarrollo y calidad del producto.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Innovación y facilidad de adopción.</li>
                            </ul>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginTop: '1rem' }}>
                                Resolver estos desafíos permitió construir una solución más robusta y alineada con las necesidades reales del negocio.
                            </p>
                        </div>

                        {/* Los resultados */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Award size={20} /> {lang === 'es' ? 'Los resultados' : 'Results'}
                            </h3>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Aunque Happ se encontraba en una etapa de validación, el proyecto permitió consolidar una propuesta de producto sólida y técnicamente viable.
                            </p>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Los principales resultados fueron:
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Validación de la propuesta mediante prototipos interactivos.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Definición de una arquitectura conversacional escalable.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Alineación entre negocio, tecnología y experiencia de usuario.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Construcción de una herramienta preparada para presentaciones comerciales y procesos de venta enterprise.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Diseño de una base de producto lista para continuar evolucionando.</li>
                            </ul>
                        </div>

                        {/* Cómo mediría el éxito */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800 }}>
                                {lang === 'es' ? 'Cómo mediría el éxito' : 'Measuring Success'}
                            </h3>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Para evaluar el impacto del producto una vez implementado, se propusieron indicadores orientados tanto al negocio como a la experiencia de usuario.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.15rem', color: 'var(--neon-pink)', marginBottom: '0.5rem', fontWeight: 800 }}>
                                        {lang === 'es' ? 'Experiencia de usuario' : 'User Experience'}
                                    </h4>
                                    <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, fontSize: '1rem', lineHeight: '1.7' }}>
                                        <li style={{ marginBottom: '0.4rem' }}>Tiempo necesario para completar una tarea.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Tasa de éxito de los flujos.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Customer Effort Score (CES).</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Net Promoter Score (NPS).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.15rem', color: 'var(--neon-pink)', marginBottom: '0.5rem', fontWeight: 800 }}>
                                        {lang === 'es' ? 'Negocio' : 'Business'}
                                    </h4>
                                    <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, fontSize: '1rem', lineHeight: '1.7' }}>
                                        <li style={{ marginBottom: '0.4rem' }}>Activación de usuarios.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Retención.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Uso del asistente conversacional.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Conversión.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Finalización de trámites.</li>
                                        <li style={{ marginBottom: '0.4rem' }}>Adopción institucional.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Próximos pasos */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 800 }}>
                                {lang === 'es' ? 'Próximos pasos' : 'Next Steps'}
                            </h3>
                            <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Si el producto continuara evolucionando, las siguientes iniciativas representarían oportunidades de crecimiento.
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Copiloto de IA para pacientes.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Agentes especializados según el tipo de consulta.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Integración con dispositivos wearables.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Recordatorios inteligentes de tratamientos y controles.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Resúmenes clínicos automáticos.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Predicciones preventivas basadas en el historial médico.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Mayor personalización de la experiencia.</li>
                            </ul>
                        </div>

                        {/* Aprendizajes & Cierre */}
                        <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '3rem' }}>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                {lang === 'es' ? 'Aprendizajes' : 'Key Takeaways'}
                            </h3>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Este proyecto reforzó una idea que hoy guía mi forma de trabajar: el diseño genera impacto cuando está conectado con la estrategia del producto y responde a objetivos concretos del negocio.
                            </p>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                Las decisiones más importantes no surgieron únicamente del diseño de pantallas, sino de comprender el contexto, priorizar correctamente, equilibrar restricciones técnicas y construir experiencias capaces de resolver problemas reales para las personas.
                            </p>
                            <p style={{ opacity: 0.9, fontSize: '1.05rem', lineHeight: '1.7', fontWeight: 700, color: 'white' }}>
                                Mi aporte fue actuar como puente entre usuarios, negocio y tecnología, ayudando a transformar un desafío complejo en una solución validada, escalable y preparada para evolucionar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

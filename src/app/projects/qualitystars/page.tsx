'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import { ArrowLeft, Target, Brain, CheckCircle2, Database, Code2, Layers, Search, TrendingUp, Compass, Zap, BarChart3, ShieldCheck, Award } from 'lucide-react'
import Link from 'next/link'

export default function QualityStarsCaseStudy() {
    const { lang } = useI18n()
    const isEs = lang === 'es'

    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)', color: 'white' }}>
            <div className="mesh-gradient" />

            {/* Nav */}
            <nav className="container" style={{ padding: '2rem 1.5rem', display: 'flex', alignItems: 'center' }}>
                <Link href="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    <ArrowLeft size={20} /> {isEs ? 'Volver al Inicio' : 'Back to Home'}
                </Link>
            </nav>

            <section className="container" style={{ padding: '4rem 1.5rem 8rem' }}>
                <div style={{ maxWidth: '920px', margin: '0 auto' }}>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1rem' }}>
                            <span className="glass" style={{ fontSize: '0.75rem', padding: '0.4rem 0.9rem', borderRadius: '100px', fontWeight: 700, color: 'var(--neon-pink)' }}>
                                {isEs ? 'Consultoría / Estrategia SaaS' : 'Consulting / SaaS Strategy'}
                            </span>
                            <span className="glass" style={{ fontSize: '0.75rem', padding: '0.4rem 0.9rem', borderRadius: '100px', opacity: 0.85 }}>
                                Product Strategy · SEO Benchmark · Information Architecture
                            </span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 3.8rem)', lineHeight: 1.15, marginBottom: '1.5rem', fontWeight: 850 }}>
                            QualityStars — <span className="neon-text">B2B SaaS Growth & IA Strategy</span>
                        </h1>

                        <p style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)', opacity: 0.9, lineHeight: 1.6, marginBottom: '2.5rem', color: '#e2e8f0' }}>
                            {isEs
                                ? 'Estrategia SEO B2B y arquitectura de información mediante ingeniería inversa a competidores líderes'
                                : 'B2B SEO strategy and information architecture through reverse engineering of leading competitors'}
                        </p>

                        {/* Metadata Grid */}
                        <div className="glass" style={{ padding: '1.5rem 2rem', borderRadius: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem', border: '1px solid var(--glass-border)' }}>
                            <div>
                                <span style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>{isEs ? 'Rol' : 'Role'}</span>
                                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Lead Product Strategist, UX Researcher & Growth Designer</span>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>{isEs ? 'Metodología' : 'Methodology'}</span>
                                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Reverse Engineering, Data-Driven UX Audit, Competitor Benchmarking</span>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>{isEs ? 'Alcance' : 'Scope'}</span>
                                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>+18,000 URLs & 99 Landing Pages Auditadas</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Flow */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        
                        {/* 1. Overview del Proyecto */}
                        <div>
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--neon-pink)', marginBottom: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <Compass size={24} /> {isEs ? 'Overview del Proyecto' : 'Project Overview'}
                            </h2>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                                QualityStars es una plataforma SaaS B2B orientada a la gestión de reputación y captación de reseñas de clientes. En un mercado altamente dominado por competidores consolidados (Birdeye, Podium y Reviews.io), el proyecto consistió en realizar una auditoría de ingeniería inversa a escala sobre más de 18,000 URLs y 99 landing pages clave para identificar vulnerabilidades técnicas, brechas en la arquitectura de información y patrones de captación B2B.
                            </p>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.75' }}>
                                El objetivo estratégico fue diseñar el Plan Maestro de Producto, Arquitectura Web y UX Strategy para transformar esas fallas de la competencia en ventajas competitivas sostenibles (Unfair Advantage), posicionando a QualityStars para capturar tráfico orgánico de alta intención de compra.
                            </p>
                        </div>

                        {/* 2. Mi Rol y Stack Técnico */}
                        <div>
                            <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <Code2 size={24} color="var(--neon-pink)" /> {isEs ? 'Mi Rol y Stack Técnico' : 'Role & Technical Stack'}
                            </h2>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                                <div className="bento-item" style={{ padding: '1.8rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Database size={18} /> Data & Analytics
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                                        Python 3.13 (XPython), Jupyter Notebooks (Data Scraping, parsing de JSON, auditoría semántica y cálculo de SEO Scoring).
                                    </p>
                                </div>

                                <div className="bento-item" style={{ padding: '1.8rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Layers size={18} /> Design & Strategy
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                                        Figma (Sistemas de Arquitectura de Información, Wireframes de herramientas interactivas, UI Components).
                                    </p>
                                </div>

                                <div className="bento-item" style={{ padding: '1.8rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Zap size={18} /> Frameworks
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                                        Technical SEO Specifications, Information Architecture (Hub & Spoke Silos), JSON-LD Structured Data Governance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. El Desafío de Negocio & Producto */}
                        <div>
                            <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <Target size={24} color="var(--neon-pink)" /> {isEs ? 'El Desafío de Negocio & Producto' : 'Business & Product Challenge'}
                            </h2>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                                En el modelo B2B SaaS, el costo de adquisición de clientes (CAC) mediante pauta digital es cada vez más elevado. Para competir contra actores con presupuestos millonarios de marketing, QualityStars necesitaba una estrategia de crecimiento orgánico basada en producto (Product-Led Growth).
                            </p>
                            <div className="glass" style={{ padding: '1.5rem 2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                                <span style={{ fontWeight: 800, color: 'var(--neon-pink)', display: 'block', marginBottom: '0.75rem' }}>El reto:</span>
                                <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, fontSize: '1.02rem', lineHeight: '1.7', margin: 0 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Desentrañar la estructura de contenido de competidores con miles de páginas indexadas.</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Identificar por qué plataformas como Birdeye dominaban el posicionamiento orgánico a pesar de tener interfaces y estructuras complejas.</li>
                                    <li>Diseñar un sistema de navegación y contenido que no solo atraiga visitas, sino que intercepte al usuario en la fase final de decisión de compra (Bottom of the Funnel).</li>
                                </ul>
                            </div>
                        </div>

                        {/* 4. Investigación e Ingeniería Inversa de Datos */}
                        <div>
                            <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <Search size={24} color="var(--neon-pink)" /> {isEs ? 'Investigación e Ingeniería Inversa de Datos' : 'Data Reverse Engineering'}
                            </h2>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                                Para evitar suposiciones superficiales, desarrollé una herramienta personalizada en Python 3.13 en Jupyter Notebook para ingerir y procesar masivamente los archivos <code>robots.txt</code>, <code>sitemap.xml</code> y datasets JSON de las páginas públicas de la competencia.
                            </p>

                            <h3 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '1rem', fontWeight: 800 }}>
                                Hallazgos Clave de la Auditoría Cuantitativa:
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div className="bento-item" style={{ padding: '1.75rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white' }}>
                                        1. La Brecha Masiva de Datos Estructurados (Schema.org)
                                    </h4>
                                    <p style={{ opacity: 0.8, fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '0.75rem' }}>
                                        Se descubrió una ausencia casi total (95%+) de marcado estructurado avanzado en los competidores directos. Ni Birdeye ni Podium implementaban esquemas comerciales clave como <code>SoftwareApplication</code> o <code>AggregateRating</code>.
                                    </p>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--neon-pink)', fontWeight: 700 }}>
                                        ✦ Oportunidad para QualityStars: Dominar los Rich Snippets de Google (estrellas de calificación, preguntas frecuentes desplegables) directamente en las SERPs sin competir solo por texto.
                                    </span>
                                </div>

                                <div className="bento-item" style={{ padding: '1.75rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white' }}>
                                        2. Fallas Críticas en Semántica HTML (Etiquetado H1)
                                    </h4>
                                    <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '0.75rem' }}>
                                        <li><strong>Reviews.io:</strong> 47.6% de las páginas analizadas no contaban con etiqueta H1 o tenían jerarquías rotas.</li>
                                        <li><strong>Podium:</strong> 35% de sus landing pages adolecían del mismo fallo semántico.</li>
                                    </ul>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--neon-pink)', fontWeight: 700 }}>
                                        ✦ Oportunidad para QualityStars: Diseñar un sistema con control estricto de encabezados únicos por página en el Frontend/CMS.
                                    </span>
                                </div>

                                <div className="bento-item" style={{ padding: '1.75rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white' }}>
                                        3. Arquitectura y Transferencia de Autoridad (Link Juice)
                                    </h4>
                                    <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, fontSize: '0.98rem', lineHeight: '1.65', margin: 0 }}>
                                        <li style={{ marginBottom: '0.5rem' }}>
                                            <strong>Birdeye (Score 83.3/100):</strong> Explicaba su liderazgo orgánico gracias a un promedio de 188.4 enlaces internos por página, interconectando verticalmente sus módulos de producto con sus landing pages por industria.
                                        </li>
                                        <li>
                                            <strong>Podium (Score 64.7/100):</strong> Mantenía una arquitectura plana pero aislada, con apenas 28.5 enlaces internos por página, desperdiciando el flujo de autoridad.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 5. Solución de Arquitectura & UX Strategy */}
                        <div>
                            <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <Brain size={24} color="var(--neon-pink)" /> {isEs ? 'Solución de Arquitectura & UX Strategy' : 'Architecture & UX Strategy Solution'}
                            </h2>
                            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                                Con base en la evidencia obtenida, diseñé un plan maestro de arquitectura e interacción compuesto por 5 pilares clave:
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {/* Pilar 1 */}
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                        1. Arquitectura de Información Hub & Spoke (Silos de 2 Niveles)
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                                        En lugar de estructuras profundas y caóticas, se definió un modelo concéntrico enfocado en la usabilidad y la eficiencia de rastreo:
                                    </p>
                                    <div className="glass" style={{ padding: '1.25rem 1.5rem', borderRadius: '14px', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.8' }}>
                                        <div><strong style={{ color: 'var(--neon-pink)' }}>Level 0 (Home):</strong> qualitystars.com/</div>
                                        <div><strong style={{ color: 'var(--neon-pink)' }}>Level 1 (Hubs temáticos):</strong> /features/, /industries/, /compare/, /resources/</div>
                                        <div><strong style={{ color: 'var(--neon-pink)' }}>Level 2 (Spokes/Landings finales):</strong> /features/review-generation, /industries/healthcare, /compare/birdeye</div>
                                    </div>
                                </div>

                                {/* Pilar 2 */}
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                        2. Silos por Industria (Vertical Landings)
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                                        Los tomadores de decisiones B2B no buscan un "software general de reputación", buscan soluciones para su nicho específico. Se definió la estructura UX y de contenido para las 6 verticales prioritarias de mayor conversión:
                                    </p>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                                        {['Dental & Odontología', 'Healthcare & Centros Médicos', 'Automotive & Concesionarios', 'Home Services (Plomería, Climatización)', 'Retail & Cadenas', 'Real Estate & Inmobiliarias'].map((v, i) => (
                                            <div key={i} className="glass" style={{ padding: '0.75rem 1rem', borderRadius: '10px', fontSize: '0.9rem', opacity: 0.85 }}>
                                                ✓ {v}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Pilar 3 */}
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                        3. Landings de Comparación Directa (/compare/)
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: '1.65', margin: 0 }}>
                                        Diseño conceptual de las páginas de intención de compra inmediata para capturar búsquedas tipo <em>"QualityStars vs Birdeye"</em> o <em>"Podium alternatives"</em>. Se especificaron componentes de UX con tablas comparativas dinámicas, testimonios de migración y marcado Table estructurado.
                                    </p>
                                </div>

                                {/* Pilar 4 */}
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                        4. Lead Magnets Interactivos (Product-Led UX)
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                                        Identificando que las herramientas interactivas son la principal fuente de backlinks y captación de Podium, diseñé el requerimiento UX para dos calculadoras web públicas:
                                    </p>
                                    <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, fontSize: '0.98rem', lineHeight: '1.7', margin: 0 }}>
                                        <li style={{ marginBottom: '0.5rem' }}>
                                            <strong>Calculadora ROI de Reseñas (<code>/resources/tools/review-roi-calculator</code>):</strong> Herramienta donde el cliente ingresa su facturación actual y obtiene la simulación de ingresos al subir 0.5 estrellas su reputación en Google.
                                        </li>
                                        <li>
                                            <strong>Generador de Enlaces a Google Reviews (<code>/resources/tools/google-review-link-generator</code>):</strong> Utilidad gratuita para que cualquier negocio encuentre su Google Place ID y genere su link corto de solicitud de opiniones.
                                        </li>
                                    </ul>
                                </div>

                                {/* Pilar 5 */}
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                        5. Sistema de Enlazado Interno (Navigation Systems)
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                                        Para igualar la autoridad de enlazado de Birdeye sin saturar la experiencia visual:
                                    </p>
                                    <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, fontSize: '0.98rem', lineHeight: '1.7', margin: 0 }}>
                                        <li style={{ marginBottom: '0.4rem' }}><strong>Megamenú Enriquecido:</strong> Accesos visuales directos desde la navegación global hacia productos e industrias.</li>
                                        <li style={{ marginBottom: '0.4rem' }}><strong>Footer Matrix Global:</strong> Pie de página estructurado dinámicamente como matriz de enlaces cruzados.</li>
                                        <li><strong>Módulos Recomendantes:</strong> Bloques al pie de cada landing de producto sugiriendo "Soluciones Recomendadas para tu Industria".</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 6. Entregables & Impacto Esperado */}
                        <div>
                            <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <Award size={24} color="var(--neon-pink)" /> {isEs ? 'Entregables & Impacto Esperado' : 'Deliverables & Expected Impact'}
                            </h2>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                                <div className="bento-item" style={{ padding: '1.75rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--neon-pink)', marginBottom: '0.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <TrendingUp size={20} /> Roadmap Priorizado
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                                        Un plan de acción dividido en 4 fases ejecutables en 8 semanas para alinear a los equipos de Engineering, UX, SEO y Content Marketing.
                                    </p>
                                </div>

                                <div className="bento-item" style={{ padding: '1.75rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--neon-pink)', marginBottom: '0.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <BarChart3 size={20} /> Especificaciones Técnicas
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                                        Robots.txt defensivo, sitemapindex modular dinámico y snippets en JSON-LD para inyección automática de esquemas <code>SoftwareApplication</code>, <code>Organization</code>, <code>BreadcrumbList</code> y <code>FAQPage</code>.
                                    </p>
                                </div>

                                <div className="bento-item" style={{ padding: '1.75rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--neon-pink)', marginBottom: '0.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <CheckCircle2 size={20} /> Score Objetivo: 95.0
                                    </h3>
                                    <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                                        La arquitectura propuesta está modelada para elevar el nivel técnico de QualityStars a un Target Score de <strong>95.0 / 100</strong>, superando el 83.3 de Birdeye y erradicando completamente las fallas del mercado.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

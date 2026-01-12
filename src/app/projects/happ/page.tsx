'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/useI18n'
import { ArrowLeft, Target, Award, Brain, BarChart3, ShieldCheck, ShoppingCart, Apple } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HappCaseStudy() {
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
                    <div className="section-tag">Case Study — HealthTech AI</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                        Happ: <span className="neon-text">Transformando</span> la salud digital en Chile
                    </h1>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', opacity: 0.7, fontSize: '1.1rem', marginBottom: '4rem' }}>
                        <span><strong>Rol:</strong> Product Designer (UX/UI)</span>
                        <span><strong>Mercado:</strong> Chile (Isapres/Fonasa)</span>
                        <span><strong>Impacto:</strong> B2B Sales & Strategic Adoption</span>
                    </div>
                </motion.div>


                <div className="bento-grid">
                    {/* El Impacto de Negocio */}
                    <div className="bento-item" style={{ gridColumn: 'span 8' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Award color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '2rem' }}>El Impacto de Negocio</h2>
                        </div>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8, marginBottom: '2rem' }}>
                            El diseño y los prototipos de alta fidelidad que desarrollé fueron la herramienta clave para cerrar acuerdos comerciales con grandes instituciones del sector en Chile. No se trataba solo de una interfaz atractiva, sino de una simulación interactiva completa que permitía a los stakeholders visualizar la lógica de seguros y coberturas compleja. Al demostrar que podíamos simplificar procesos críticos de Isapres y Fonasa, logramos una adopción institucional acelerada, transformando el prototipo en una herramienta de ventas de alto impacto que garantizó la inversión inicial.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                            {['Bupa', 'Seguros SURA', 'Caja Los Andes', 'Caja La Araucana'].map(brand => (
                                <div key={brand} className="glass" style={{ padding: '1.2rem', borderRadius: '12px', fontWeight: 700, textAlign: 'center' }}>
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* El Desafío */}
                    <div className="bento-item" style={{ gridColumn: 'span 4' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Target color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '1.8rem' }}>El Desafío</h2>
                        </div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', opacity: 0.8 }}>
                            Traducir la burocracia médica chilena a un lenguaje humano. El sistema de salud en Chile es hermético y complejo; mi desafío fue orquestar una experiencia empática que eliminara la fricción entre la necesidad del usuario y las reglas de negocio de Isapres y Fonasa. Esto implicó una reestructuración profunda de la arquitectura de información para que procesos como reembolsos, bonos y licencias médicas se sintieran naturales para cualquier tipo de usuario.
                        </p>
                    </div>

                    {/* Dr. Happ */}
                    <div className="bento-item" style={{ gridColumn: 'span 12' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <Brain color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '2rem' }}>1. Dr. Happ y la Empatía Artificial</h2>
                        </div>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8, marginBottom: '1.5rem' }}>
                            Iteré en la creación del <strong>Dr. Happ</strong>, un avatar 3D que actúa como hilo conductor de toda la experiencia. Definí una personalidad y voz que explica temas complejos (como el CAEC o el GES) en lenguaje natural chileno, cercano y libre de tecnicismos médicos. Implementé "Action Chips" estratégicos para guiar al usuario en flujos conversacionales dinámicos, evitando la fatiga de decisión y asegurando que cada interacción fuera resolutiva, reduciendo significativamente la carga cognitiva del paciente en momentos de vulnerabilidad.
                        </p>
                    </div>

                    {/* Punto de Inflexión Técnico */}
                    <div className="bento-item" style={{ gridColumn: 'span 12', border: '1px solid var(--neon-pink)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <ShieldCheck color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '2rem' }}>2. Decisión Estratégica: IA vs. Frontend</h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                                <h3 style={{ marginBottom: '1rem' }}>El Problema</h3>
                                <p style={{ opacity: 0.7 }}>La IA generativa sufría de latencia variable o alucinaciones en diagnósticos críticos y recomendaciones de seguros. Para una solución enterprise de salud, el margen de error debía ser cero absoluto; no podíamos permitir que un paciente recibiera información errónea sobre su cobertura o estado clínico.</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '20px', background: 'rgba(255, 45, 149, 0.05)' }}>
                                <h3 style={{ marginBottom: '1rem' }}>Mi Solución</h3>
                                <p style={{ opacity: 0.7 }}>Adoptamos un enfoque híbrido: trasladé toda la lógica de validación clínica y cálculo de cobertura al Frontend (lógica determinística basada en reglas), dejando a la IA exclusivamente para la capa conversacional y de empatía. Esta decisión técnica no solo optimizó el rendimiento y la seguridad, sino que también garantizó la privacidad de los datos sensibles bajo estándares clínicos.</p>
                            </div>
                        </div>
                    </div>

                    {/* Mi Salud */}
                    <div className="bento-item" style={{ gridColumn: 'span 6' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <BarChart3 color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '1.8rem' }}>3. "Mi Salud" (Data Viz)</h2>
                        </div>
                        <p style={{ opacity: 0.8, lineHeight: '1.7' }}>
                            Transformé PDFs médicos ilegibles y dispersos en un panel centralizado de "semáforos de acción". Mediante el procesamiento de datos y un diseño visual de alto contraste, logramos que el usuario entienda su estado de salud de un vistazo. El sistema no solo muestra datos históricos, sino que sugiere pasos proactivos basados en alertas visuales inmediatas, convirtiendo un reporte estático en una verdadera hoja de ruta para el bienestar del usuario.
                        </p>
                    </div>

                    {/* Gamificación */}
                    <div className="bento-item" style={{ gridColumn: 'span 6' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Apple color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '1.8rem' }}>4. Gamificación Preventiva</h2>
                        </div>
                        <p style={{ opacity: 0.8, lineHeight: '1.7' }}>
                            Diseñé un sistema de "Misiones de Salud" automatizadas basadas en el perfil demográfico y clínico del usuario. Utilizando algoritmos preventivos, la app activa misiones personalizadas ante ciertos riesgos o edades críticas (por ejemplo, chequeos preventivos anuales o controles de parámetros específicos). Esto transformó la aplicación de una herramienta reactiva a una plataforma de prevención proactiva, incentivando hábitos saludables mediante mecánicas de refuerzo positivo.
                        </p>
                    </div>

                    {/* E-commerce */}
                    <div className="bento-item" style={{ gridColumn: 'span 12' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <ShoppingCart color="var(--neon-pink)" />
                            <h2 style={{ fontSize: '1.8rem' }}>5. E-commerce Integrado: Farmacia (Buho Chile)</h2>
                        </div>
                        <p style={{ opacity: 0.8, lineHeight: '1.7', marginBottom: '2rem' }}>
                            Diseñé un e-commerce farmacéutico centrado en el empoderamiento económico del usuario. Implementé un "switch comparativo" inteligente entre Medicamento Original y Bioequivalente, permitiendo visualizar el ahorro en tiempo real. La arquitectura de compra fue optimizada para reducir los pasos de checkout y asegurar que la búsqueda de medicamentos crónicos fuera eficiente, segura y orientada a la total transparencia de precios.
                        </p>
                    </div>

                    {/* Conclusión */}
                    <div className="bento-item" style={{ gridColumn: 'span 12', background: 'rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Conclusión</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8, maxWidth: '900px', margin: '0 auto' }}>
                            Happ es la prueba de que el Product Design es una herramienta de ventas y escalabilidad potente. Mi capacidad para entender y negociar las limitaciones técnicas, sumado a una arquitectura de información robusta centrada en el mercado chileno, permitió pasar de una idea abstracta a un producto digital sólido, validado y adoptado por las instituciones de salud más importantes de Chile. El resultado es una experiencia que no solo cuida al paciente, sino que también genera un valor de negocio sostenible y medible.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

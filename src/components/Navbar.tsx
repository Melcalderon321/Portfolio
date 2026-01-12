'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '@/lib/useI18n'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const { t, lang, setLang } = useI18n()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`glass ${scrolled ? 'scrolled' : ''}`} style={{
                marginTop: '0',
                padding: '0.8rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'calc(100% - 40px)',
                maxWidth: '1360px', // 1400px container - 40px margins
                zIndex: 1000,
                color: 'white',
                background: scrolled ? 'rgba(2, 2, 4, 0.8)' : 'var(--glass-bg)',
                transition: 'all 0.3s ease',
                borderRadius: '100px'
            }}>
                <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'white' }}>MC<span className="neon-text">.</span></div>

                {/* Desktop Menu */}
                <div className="hide-on-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link href="/#proyectos">{t.nav.projects}</Link>
                    <Link href="/#experiencia">{t.nav.experience}</Link>
                    <Link href="/#workshops">{t.nav.workshops}</Link>
                    <button
                        onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                        className="glass"
                        style={{
                            background: 'none',
                            color: 'white',
                            border: '1px solid var(--glass-border)',
                            padding: '4px 8px',
                            cursor: 'pointer',
                            fontSize: '0.8rem'
                        }}
                    >
                        {lang.toUpperCase()}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="glass mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        padding: '0.5rem',
                        cursor: 'pointer',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        borderRadius: '12px',
                        display: 'none', // Controlled by CSS class
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <style jsx>{`
                    @media (max-width: 768px) {
                        button[onClick] { display: block !important; }
                    }
                `}</style>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="glass"
                        style={{
                            position: 'fixed',
                            top: '90px',
                            left: '20px',
                            right: '20px',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            zIndex: 99,
                            borderRadius: '24px',
                            textAlign: 'center'
                        }}
                    >
                        <Link href="/#proyectos" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.2rem', color: 'white', textDecoration: 'none' }}>{t.nav.projects}</Link>
                        <Link href="/#experiencia" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.2rem', color: 'white', textDecoration: 'none' }}>{t.nav.experience}</Link>
                        <Link href="/#workshops" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.2rem', color: 'white', textDecoration: 'none' }}>{t.nav.workshops}</Link>
                        <button
                            onClick={() => {
                                setLang(lang === 'es' ? 'en' : 'es')
                                setIsMenuOpen(false)
                            }}
                            className="glass"
                            style={{
                                background: 'transparent',
                                color: 'white',
                                border: '1px solid var(--glass-border)',
                                padding: '10px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                width: '100%'
                            }}
                        >
                            Change Language ({lang.toUpperCase()})
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

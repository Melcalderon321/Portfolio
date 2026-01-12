'use client'

import Navbar from '@/components/Navbar'
import HeroRedesign from '@/components/HeroRedesign'
import BentoProfile from '@/components/BentoProfile'
import CategorizedProjects from '@/components/CategorizedProjects'
import Experience from '@/components/Experience'
import Workshops from '@/components/Workshops'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import CtaBanner from '@/components/CtaBanner'
import { Linkedin, Mail } from 'lucide-react'

export default function HomePage() {
    return (
        <main>
            <div className="mesh-gradient" />
            <div className="bg-dots" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <Navbar />
                <HeroRedesign />
                <BentoProfile />
                <CategorizedProjects />
                <Experience />
                <Workshops />
                <CtaBanner />

                <footer style={{ padding: '80px 0', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                        <a href="https://www.linkedin.com/in/melcalderon/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}>
                            <Linkedin size={20} /> LinkedIn
                        </a>
                        <a href="mailto:melaniecald@gmail.com" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}>
                            <Mail size={20} /> Email
                        </a>
                    </div>
                    <div style={{ opacity: 0.3 }}>
                        © 2026 Melanie Calderon — High Performance Design
                    </div>
                </footer>

                <FloatingWhatsApp />
            </div>
        </main>
    )
}

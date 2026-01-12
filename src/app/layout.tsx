import '@/styles/globals.css'
import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/useI18n'

export const metadata: Metadata = {
    title: 'Melanie Calderon | UX/UI Designer & Product Designer',
    description: 'Portfolio profesional de Melanie Calderon, experta en UX/UI, Product Design y Accesibilidad.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body>
                <LanguageProvider>
                    <div className="bg-dots" />
                    <div className="glow-orb" style={{ top: '-10%', right: '-10%' }} />
                    <div className="glow-orb" style={{ bottom: '-10%', left: '-10%', background: 'radial-gradient(circle, rgba(0, 100, 255, 0.2) 0%, transparent 70%)' }} />
                    {children}
                </LanguageProvider>
            </body>
        </html>
    )
}

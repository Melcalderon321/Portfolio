'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

type Language = 'es' | 'en'

interface I18nContextType {
    lang: Language
    setLang: (lang: Language) => void
    t: typeof translations['es']
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>('es')

    const t = translations[lang]

    return (
        <I18nContext.Provider value={{ lang, setLang, t }}>
            {children}
        </I18nContext.Provider>
    )
}

export function useI18n() {
    const context = useContext(I18nContext)
    if (context === undefined) {
        throw new Error('useI18n must be used within a LanguageProvider')
    }
    return context
}

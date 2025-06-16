"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Language } from "@/lib/translations"

type LanguageContextType = {
	language: Language
	setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
	language: "en",
	setLanguage: () => { },
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguageState] = useState<Language>("en")

	useEffect(() => {
		const savedLanguage = localStorage.getItem("language") as Language | null
		if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt" || savedLanguage === "es")) {
			setLanguageState(savedLanguage)
		} else {
			const browserLang = navigator.language.split("-")[0]
			if (browserLang === "pt" || browserLang === "es") {
				setLanguageState(browserLang as Language)
			}
		}
	}, [])

	const setLanguage = (lang: Language) => {
		setLanguageState(lang)
		localStorage.setItem("language", lang)
	}

	return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)

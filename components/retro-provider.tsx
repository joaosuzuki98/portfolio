"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"

type RetroContextType = {
	retro: boolean
	toggleRetro: () => void
}

const RetroContext = createContext<RetroContextType>({
	retro: false,
	toggleRetro: () => { },
})

export function RetroProvider({ children }: { children: React.ReactNode }) {
	const [retro, setRetro] = useState(false)
	const { theme } = useTheme()

	useEffect(() => {
		const savedRetro = localStorage.getItem("retro-mode")
		if (savedRetro) {
			setRetro(savedRetro === "true")
		}
	}, [])

	useEffect(() => {
		if (retro) {
			document.documentElement.classList.add("retro-mode")
			if (theme === "dark") {
				document.documentElement.classList.add("retro-dark")
			} else {
				document.documentElement.classList.remove("retro-dark")
			}
		} else {
			document.documentElement.classList.remove("retro-mode", "retro-dark")
		}

		localStorage.setItem("retro-mode", String(retro))
	}, [retro, theme])

	const toggleRetro = () => {
		setRetro((prev) => !prev)
	}

	return <RetroContext.Provider value={{ retro, toggleRetro }}>{children}</RetroContext.Provider>
}

export const useRetro = () => useContext(RetroContext)

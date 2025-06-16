"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero-alt"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { RetroProvider } from "@/components/retro-provider"
import { LanguageProvider } from "@/components/language-provider"

export default function Home() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
			<RetroProvider>
				<LanguageProvider>
					<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
						<Header />
						<main>
							<Hero />
							<About />
							<Skills />
							<Projects />
							<Education />
							<Contact />
						</main>
						<Footer />
					</div>
				</LanguageProvider>
			</RetroProvider>
		</ThemeProvider>
	)
}

"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"
import { useRetro } from "@/components/retro-provider"
import { useLanguage } from "@/components/language-provider"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import { getTranslation } from "@/lib/translations"

const Header = () => {
	const { theme, setTheme } = useTheme()
	const { retro } = useRetro()
	const { language } = useLanguage()
	const [scrolled, setScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const isDark = theme === "dark"

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	const navItems = [
		{ name: getTranslation(language, "nav.home"), href: "#home" },
		{ name: getTranslation(language, "nav.about"), href: "#about" },
		{ name: getTranslation(language, "nav.skills"), href: "#skills" },
		{ name: getTranslation(language, "nav.projects"), href: "#projects" },
		{ name: getTranslation(language, "nav.education"), href: "#education" },
		{ name: getTranslation(language, "nav.contact"), href: "#contact" },
	]

	return (
		<header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${retro
					? isDark
						? "bg-[#2d1b69] border-b-2 border-cyan-400"
						: "bg-white border-b-2 border-black"
					: scrolled
						? "bg-background/80 backdrop-blur-md shadow-md"
						: "bg-transparent"
				}`}
		>
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<a href="#home" className={`text-2xl font-bold tracking-tight ${retro ? "font-[var(--font-vt323)]" : ""}`}>
					<img src={
							retro
							? isDark 
								? "/portfolio_pixelated_light.png" 
								: "/portfolio_pixelated_blue.png"
							: isDark
								? "/portfolio_logo.svg"
								: "/portfolio_logo_3.svg"
						} 
						alt="Portfolio's logo" width={30} 
					/>
				</a>

				<nav className="hidden md:flex items-center space-x-6">
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={`${retro
									? isDark
										? "text-cyan-300 hover:text-cyan-400"
										: "text-black hover:text-purple-600"
									: "text-muted-foreground hover:text-primary"
								} transition-colors duration-200 ${retro ? "font-[var(--font-vt323)] text-lg" : ""}`}
						>
							{item.name}
						</a>
					))}
					<div className="flex items-center space-x-2">
						<LanguageSwitcher />
						<Button
							variant={retro ? "default" : "ghost"}
							size="icon"
							onClick={toggleTheme}
							className={`${retro
									? isDark
										? "bg-cyan-500 text-black border-2 border-cyan-300"
										: "bg-purple-600 text-white border-2 border-black"
									: ""
								}`}
						>
							{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
						</Button>
					</div>
				</nav>

				<div className="flex items-center md:hidden">
					<LanguageSwitcher />
					<Button
						variant={retro ? "default" : "ghost"}
						size="icon"
						onClick={toggleTheme}
						className={`mx-2 ${retro
								? isDark
									? "bg-cyan-500 text-black border-2 border-cyan-300"
									: "bg-purple-600 text-white border-2 border-black"
								: ""
							}`}
					>
						{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
					</Button>
					<Button
						variant={retro ? "default" : "ghost"}
						size="icon"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className={
							retro
								? isDark
									? "bg-cyan-500 text-black border-2 border-cyan-300"
									: "bg-purple-600 text-white border-2 border-black"
								: ""
						}
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</Button>
				</div>
			</div>

			{mobileMenuOpen && (
				<nav
					className={`md:hidden ${retro
							? isDark
								? "bg-[#2d1b69] border-t-2 border-cyan-400"
								: "bg-white border-t-2 border-black"
							: "bg-background/95 backdrop-blur-md"
						}`}
				>
					<div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className={`${retro
										? isDark
											? "text-cyan-300 hover:text-cyan-400"
											: "text-black hover:text-purple-600"
										: "text-muted-foreground hover:text-primary"
									} transition-colors duration-200 py-2 ${retro ? "font-[var(--font-vt323)] text-lg" : ""}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>
				</nav>
			)}
		</header>
	)
}

export default Header

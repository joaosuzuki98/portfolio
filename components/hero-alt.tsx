"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Instagram, Linkedin } from "lucide-react"
import ParticlesBackground from "./particles-background"
import { useTheme } from "@/components/theme-provider"
import AnimatedText from "./animated-text"
import { useSpring, animated, config } from "@react-spring/web"
import RetroButton from "./retro-button"
import { useRetro } from "./retro-provider"
import { useLanguage } from "./language-provider"
import { getTranslation } from "@/lib/translations"

const Hero = () => {
	const { theme } = useTheme()
	const { retro } = useRetro()
	const { language } = useLanguage()
	const [showContent, setShowContent] = useState(false)
	const isDark = theme === "dark"

	const containerAnimation = useSpring({
		from: { opacity: 0, y: 30 },
		to: { opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 },
		config: config.gentle,
		delay: 300,
	})

	useEffect(() => {
		setShowContent(true)
	}, [])

	return (
		<section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
			{!retro && <ParticlesBackground />}

			{retro ? (
				<div className={`absolute inset-0 -z-10 ${isDark ? "bg-purple-900" : "bg-teal-200"}`}>
					<div className={`absolute inset-0 bg-[url('/grid.png')] bg-repeat opacity-30`}></div>
					<div
						className={`absolute top-20 left-10 w-32 h-32 ${isDark ? "bg-pink-600" : "bg-pink-500"} rounded-full`}
					></div>
					<div
						className={`absolute bottom-20 right-10 w-32 h-32 ${isDark ? "bg-yellow-500" : "bg-yellow-400"} rounded-full`}
					></div>
					<div
						className={`absolute top-40 right-20 w-20 h-20 ${isDark ? "bg-cyan-400" : "bg-purple-500"} rounded-full`}
					></div>
				</div>
			) : (
				<div
					className={`absolute inset-0 -z-10 ${isDark
							? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
							: "bg-gradient-to-br from-blue-50 via-blue-100 to-white"
						}`}
				>
					<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-30"></div>
					<div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
					<div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl"></div>
				</div>
			)}

			<div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
				<animated.div
					style={containerAnimation}
					className={`${retro
							? isDark
								? "bg-gray-800 border-4 border-cyan-400 p-8 shadow-[8px_8px_0px_0px_rgba(34,211,238,0.6)]"
								: "bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
							: "backdrop-blur-sm bg-background/5 p-8 rounded-xl border border-primary/10"
						}`}
				>
					<p
						className={`mb-4 font-medium ${retro ? (isDark ? "text-cyan-400 font-bold" : "text-purple-600 font-bold") : "text-primary"}`}
					>
						{getTranslation(language, "hero.hello")}
					</p>
					<h1 className={`text-4xl md:text-6xl font-bold mb-6 ${retro ? "font-[var(--font-vt323)]" : ""}`}>
						<span className={`block ${retro && isDark ? "text-cyan-300" : ""}`}>
							{getTranslation(language, "hero.title")}
						</span>
						{retro ? (
							<span
								className={
									isDark
										? "text-cyan-400 block mt-2 font-[var(--font-vt323)]"
										: "text-purple-600 block mt-2 font-[var(--font-vt323)]"
								}
							>
								{getTranslation(language, "hero.occupation")}
							</span>
						) : (
							<AnimatedText
								text={language === 'en' ? "Software Engineer" : language === 'pt' ? "Engenheiro de Software" : "Inginiero de Software"}
								className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent h-[calc(1.5em)]"
								delay={1000}
							/>
						)}
					</h1>
					<p
						className={`max-w-2xl mx-auto mb-8 text-lg ${retro ? (isDark ? "text-gray-300" : "text-black") : "text-muted-foreground"}`}
					>
						{getTranslation(language, "hero.subtitle")}
					</p>

					<div className="flex flex-wrap justify-center gap-4 mb-8">
						<Button
							className={
								retro
									? isDark
										? "bg-cyan-500 text-black border-2 border-cyan-300 font-bold shadow-[4px_4px_0px_0px_rgba(103,232,249,0.6)] hover:shadow-[2px_2px_0px_0px_rgba(103,232,249,0.6)] hover:translate-x-[2px] hover:translate-y-[2px]"
										: "bg-purple-600 text-white border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
									: "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
							}
						>
							{getTranslation(language, "hero.viewProjects")}
						</Button>
						<a href="/curriculum-vitae.pdf" download>
							<Button
								variant={retro ? "default" : "outline"}
								className={
									retro
										? isDark
											? "bg-pink-600 text-white border-2 border-pink-300 font-bold shadow-[4px_4px_0px_0px_rgba(249,168,212,0.6)] hover:shadow-[2px_2px_0px_0px_rgba(249,168,212,0.6)] hover:translate-x-[2px] hover:translate-y-[2px]"
											: "bg-teal-400 text-black border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
										: "border-primary/20 backdrop-blur-sm"
								}
							>
								{getTranslation(language, "hero.downloadResume")}
							</Button>
						</a>
					</div>

					<div className="mb-8">
						<RetroButton />
					</div>

					<div className="flex justify-center space-x-6 mb-8">
						<a
							href="https://github.com/joaosuzuki98"
							target="_blank"
							rel="nofollow"
							className={`${retro
									? isDark
										? "text-black hover:text-cyan-700 bg-yellow-400 p-2 border-2 border-yellow-200 shadow-[2px_2px_0px_0px_rgba(254,240,138,0.6)]"
										: "text-black hover:text-purple-600 bg-yellow-300 p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
									: "text-muted-foreground hover:text-primary"
								} transition-colors`}
						>
							<Github size={24} />
						</a>
						<a
							href="https://www.linkedin.com/in/jo%C3%A3o-suzuki-6a2b02192/"
							target="_blank"
							rel="nofollow"
							className={`${retro
									? isDark
										? "text-black hover:text-cyan-700 bg-yellow-400 p-2 border-2 border-yellow-200 shadow-[2px_2px_0px_0px_rgba(254,240,138,0.6)]"
										: "text-black hover:text-purple-600 bg-yellow-300 p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
									: "text-muted-foreground hover:text-primary"
								} transition-colors`}
						>
							<Linkedin size={24} />
						</a>
						<a
							href="https://www.instagram.com/joao.bssuzuki/"
							target="_blank"
							rel="nofollow"
							className={`${retro
									? isDark
										? "text-black hover:text-cyan-700 bg-yellow-400 p-2 border-2 border-yellow-200 shadow-[2px_2px_0px_0px_rgba(254,240,138,0.6)]"
										: "text-black hover:text-purple-600 bg-yellow-300 p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
									: "text-muted-foreground hover:text-primary"
								} transition-colors`}
						>
							<Instagram size={24} />
						</a>
					</div>
				</animated.div>

				<a
					href="#about"
					className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${retro ? "animate-none" : "animate-bounce"
						}`}
				>
					<ArrowDown className={retro ? (isDark ? "text-cyan-400" : "text-black") : "text-primary"} size={32} />
				</a>
			</div>
		</section>
	)
}

export default Hero

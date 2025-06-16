"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { useRetro } from "@/components/retro-provider"
import { useTheme } from "@/components/theme-provider"
import { getTranslation } from "@/lib/translations"
import { useLanguage } from "./language-provider"

const About = () => {
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, { once: true, threshold: 0.2 })
	const { retro } = useRetro()
	const { theme } = useTheme()
	const isDark = theme === "dark"
	const { language } = useLanguage()

	return (
		<section id="about" className={`py-20 ${!retro ? "bg-gradient-to-b from-background to-card/30" : ""}`}>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className={`text-3xl font-bold mb-2 ${retro && "tracking-wider"}`}>{getTranslation(language, "about.title")}</h2>
					<div
						className={`w-20 h-1 mx-auto ${retro ? (isDark ? "bg-cyan-400 h-2" : "bg-purple-600 h-2") : "bg-gradient-to-r from-primary to-purple-500"
							}`}
					></div>
				</div>

				<div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
					<div
						className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
							}`}
					>
						<div className={`relative bg-gradient-to-br from-primary to-purple-500 rounded ${retro ? "transform rotate-2" : ""}`}>
							<div
								className={`w-full h-[400px] overflow-hidden ${retro
										? isDark
											? "border-4 border-cyan-400 shadow-[8px_8px_0px_0px_rgba(6,182,212,0.6)]"
											: "border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
										: "rounded-lg shadow-xl"
									}`}
							>
								<img
									src="/profile_photo.png"
									alt="Profile Photo"
									className={`w-[40%] h-full object-fill mx-auto ${retro ? "filter contrast-125 brightness-110" : ""}`}
									width={600}
									height={800}
								/>
							</div>
							{!retro && (
								<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-purple-500 rounded-lg -z-10"></div>
							)}
							{retro && (
								<div
									className={`absolute -bottom-4 -right-4 w-full h-full -z-10 ${isDark ? "bg-pink-600" : "bg-purple-600"
										}`}
								></div>
							)}
						</div>
					</div>

					<div
						className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
							}`}
					>
						<h3
							className={`text-2xl font-bold mb-4 ${retro
									? isDark
										? "text-cyan-400"
										: "text-purple-600"
									: "bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
								} inline-block`}
						>
							{getTranslation(language, "about.subtitle")}
						</h3>
						<p className={`mb-6 ${retro && isDark ? "text-gray-300" : "text-muted-foreground"}`}>
							{getTranslation(language, "about.paragraph1")}
						</p>
						<p className={`mb-6 ${retro && isDark ? "text-gray-300" : "text-muted-foreground"}`}>
							{getTranslation(language, "about.paragraph2")}
						</p>
						<div
							className={`grid grid-cols-2 gap-4 mb-6 p-4 ${retro
									? isDark
										? "bg-[#2d1b69] border-2 border-cyan-400"
										: "bg-white border-2 border-black"
									: "rounded-lg bg-gradient-to-br from-card/50 to-background border border-primary/10"
								}`}
						>
							<div>
								<p className="font-medium">{getTranslation(language, "about.name")}</p>
								<p className={retro && isDark ? "text-gray-300" : "text-muted-foreground"}>João Suzuki</p>
							</div>
							<div>
								<p className="font-medium">{getTranslation(language, "about.email")}</p>
								<p className={retro && isDark ? "text-gray-300" : "text-muted-foreground"}>joaosuzuki98@outlook.com</p>
							</div>
							<div>
								<p className="font-medium">{getTranslation(language, "about.location")}</p>
								<p className={retro && isDark ? "text-gray-300" : "text-muted-foreground"}>São Paulo, Brazil</p>
							</div>
							<div>
								<p className="font-medium">{getTranslation(language, "about.study")}</p>
								<p className={retro && isDark ? "text-gray-300" : "text-muted-foreground"}>FATEC University</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About

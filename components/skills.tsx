"use client"

import type React from "react"
import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { useRetro } from "@/components/retro-provider"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "./language-provider"
import { getTranslation } from "@/lib/translations"

const SkillCard = ({
	icon,
	title,
	description,
	delay = 0,
}: {
	icon: React.ReactNode
	title: string
	description: string
	delay?: number
}) => {
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, { once: true, threshold: 0.1 })
	const { retro } = useRetro()
	const { theme } = useTheme()
	const isDark = theme === "dark"

	return (
		<div
			ref={ref}
			className={`transition-all duration-700 hover:-translate-y-1 ${retro
					? isDark
						? "bg-[#2d1b69] border-2 border-cyan-400 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.6)] hover:shadow-[6px_6px_0px_0px_rgba(6,182,212,0.6)]"
						: "bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
					: "bg-gradient-to-br from-card to-card/50 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-br hover:from-primary/5 hover:to-purple-500/5 border border-primary/10"
				} p-6 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			<div
				className={`w-12 h-12 flex items-center justify-center mb-4 ${retro
						? isDark
							? "bg-cyan-400 text-black"
							: "bg-purple-600 text-white"
						: "bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg text-primary"
					}`}
			>
				{icon}
			</div>
			<h3 className="text-xl font-bold mb-2">{title}</h3>
			<p className={retro && isDark ? "text-gray-300" : "text-muted-foreground"}>{description}</p>
		</div>
	)
}

const Skills = () => {
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, { once: true, threshold: 0.1 })
	const { retro } = useRetro()
	const { theme } = useTheme()
	const isDark = theme === "dark"
	const { language } = useLanguage()

	const skillsData = {
		Frontend: {
			skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
			color: "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700",
			retroColor: isDark ? "bg-cyan-400 text-black" : "bg-yellow-300 text-black border border-black",
		},
		Backend: {
			skills: ["Node.js", "Express", "Python", "SQL", "MongoDB", "REST APIs", "Java", "Laravel"],
			color: "bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700",
			retroColor: isDark ? "bg-pink-500 text-white" : "bg-purple-600 text-white border border-black",
		},
		DevOps: {
			skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
			color: "bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700",
			retroColor: isDark ? "bg-yellow-400 text-black" : "bg-teal-400 text-black border border-black",
		},
		Other: {
			skills: ["Git", "Agile", "Problem Solving", "Data Structures", "Algorithms"],
			color: "bg-gradient-to-r from-red-100 to-rose-100 text-red-700",
			retroColor: isDark ? "bg-purple-500 text-white" : "bg-pink-500 text-white border border-black",
		},
	}

	return (
		<section id="skills" className={`py-20 ${!retro ? "bg-gradient-to-b from-card/30 to-background" : ""}`}>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className={`text-3xl font-bold mb-2 ${retro && "tracking-wider"}`}>{getTranslation(language, "skills.title")}</h2>
					<div
						className={`w-20 h-1 mx-auto ${retro ? (isDark ? "bg-cyan-400 h-2" : "bg-purple-600 h-2") : "bg-gradient-to-r from-primary to-purple-500"
							}`}
					></div>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-start">
					<div>
						<h3
							className={`text-2xl font-bold mb-6 transition-all duration-700 ${retro
									? isDark
										? "text-cyan-400"
										: "text-purple-600"
									: "bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
								} inline-block ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
						>
							{getTranslation(language, "skills.technicalSkills")}
						</h3>

						<div ref={ref} className="space-y-4">
							{Object.entries(skillsData).map(([stack, data], index) => (
								<div
									key={stack}
									className={`p-4 ${retro
											? isDark
												? "bg-[#2d1b69] border-2 border-cyan-400"
												: "bg-white border-2 border-black"
											: "rounded-lg bg-card/50 border border-primary/10"
										}`}
								>
									<h4 className="font-bold mb-2">{stack}</h4>
									<div className="flex flex-wrap gap-2">
										{data.skills.map((skill, skillIndex) => (
											<span
												key={skill}
												className={`px-3 py-1 ${retro ? data.retroColor : `${data.color} rounded-full`} text-sm`}
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					<div>
						<h3
							className={`text-2xl font-bold mb-6 transition-all duration-700 ${retro
									? isDark
										? "text-cyan-400"
										: "text-purple-600"
									: "bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
								} inline-block ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
						>
							{getTranslation(language, "skills.whatIDo")}
						</h3>

						<div className="grid sm:grid-cols-2 gap-4 ">
							<SkillCard
								icon={<span className="text-xl">💻</span>}
								title={getTranslation(language, "skills.webDev")}
								description={getTranslation(language, "skills.webDevDesc")}
								delay={100}
							/>
							<SkillCard
								icon={<span className="text-xl">📱</span>}
								title={getTranslation(language, "skills.mobileApps")}
								description={getTranslation(language, "skills.mobileAppsDesc")}
								delay={200}
							/>
							<SkillCard
								icon={<span className="text-xl">⚙️</span>}
								title={getTranslation(language, "skills.backendDev")}
								description={getTranslation(language, "skills.backendDevDesc")}
								delay={300}
							/>
							<SkillCard
								icon={<span className="text-xl">🔍</span>}
								title={getTranslation(language, "skills.problemSolving")}
								description={getTranslation(language, "skills.problemSolvingDesc")}
								delay={400}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills

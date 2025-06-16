"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { useRetro } from "@/components/retro-provider"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "./language-provider"
import { getTranslation } from "@/lib/translations"

type EducationItem = {
	id: number
	degree: string
	institution: string
	period: string
	description: string
}

type ExperienceItem = {
	id: number
	position: string
	company: string
	period: string
	description: string
}

const TimelineItem = ({
	title,
	subtitle,
	period,
	description,
	isLeft = true,
	index = 0,
}: {
	title: string
	subtitle: string
	period: string
	description: string
	isLeft?: boolean
	index?: number
}) => {
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, { once: true, threshold: 0.1 })
	const { retro } = useRetro()
	const { theme } = useTheme()
	const isDark = theme === "dark"

	return (
		<div
			ref={ref}
			className={`relative flex items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col mb-12`}
		>
			<div
				className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"} mb-6 md:mb-0 transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : `opacity-0 ${isLeft ? "-translate-x-20" : "translate-x-20"}`
					}`}
				style={{ transitionDelay: `${index * 100}ms` }}
			>
				<h3 className="text-xl font-bold">{title}</h3>
				<p className={retro ? (isDark ? "text-cyan-400" : "text-purple-600") : "text-primary font-medium"}>
					{subtitle}
				</p>
				<p className={retro && isDark ? "text-gray-300" : "text-muted-foreground"}>{period}</p>
			</div>

			<div className="md:hidden w-px h-12 bg-border mx-auto my-2"></div>

			<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full">
				<div className={`w-px h-full ${retro ? (isDark ? "bg-cyan-400" : "bg-black") : "bg-border"}`}></div>
				<div
					className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 ${retro
							? isDark
								? "bg-cyan-400 border-2 border-cyan-300"
								: "bg-black border-2 border-white"
							: "rounded-full border-2 border-primary bg-background"
						} transition-all duration-500 ${isInView ? "scale-100" : "scale-0"}`}
				></div>
			</div>

			<div
				className={`md:w-1/2 ${isLeft ? "md:pl-12" : "md:pr-12 md:text-right"} transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : `opacity-0 ${isLeft ? "translate-x-20" : "-translate-x-20"}`
					}`}
				style={{ transitionDelay: `${index * 100 + 200}ms` }}
			>
				<p className={retro && isDark ? "text-gray-300" : "text-muted-foreground"}>{description}</p>
			</div>
		</div>
	)
}

const Education = () => {
	const { retro } = useRetro()
	const { theme } = useTheme()
	const isDark = theme === "dark"
	const { language } = useLanguage()

	const education: EducationItem[] = [
		{
			id: 1,
			degree: getTranslation(language, "education.firstDegreeTitle"),
			institution: "FATEC",
			period: getTranslation(language, "education.firstDegreePeriod"),
			description: getTranslation(language, "education.firstDegreeDesc"),
		},
		{
			id: 2,
			degree: getTranslation(language, "education.secondDegreeTitle"),
			institution: "Senac",
			period: getTranslation(language, "education.secondDegreePeriod"),
			description: getTranslation(language, "education.secondDegreeDesc"),
		},
	]

	const experience: ExperienceItem[] = [
		{
			id: 1,
			position: getTranslation(language, "education.firstExpTitle"),
			company: "CFI Consultoria",
			period: getTranslation(language, "education.firstExpPeriod"),
			description: getTranslation(language, "education.firstExpDesc"),
		}, 
	]

	return (
		<section id="education" className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className={`text-3xl font-bold mb-2 ${retro && "tracking-wider"}`}>{getTranslation(language, "education.title")}</h2>
					<div
						className={`w-20 h-1 mx-auto ${retro ? (isDark ? "bg-cyan-400 h-2" : "bg-purple-600 h-2") : "bg-primary"}`}
					></div>
				</div>

				<div className="mb-16">
					<h3
						className={`text-2xl font-bold mb-8 text-center ${retro && (isDark ? "text-cyan-400" : "text-purple-600")}`}
					>
						{getTranslation(language, "education.educationTitle")}
					</h3>
					<div className="relative">
						{education.map((item, index) => (
							<TimelineItem
								key={item.id}
								title={item.degree}
								subtitle={item.institution}
								period={item.period}
								description={item.description}
								isLeft={index % 2 === 0}
								index={index}
							/>
						))}
					</div>
				</div>

				<div>
					<h3
						className={`text-2xl font-bold mb-8 text-center ${retro && (isDark ? "text-cyan-400" : "text-purple-600")}`}
					>
						{getTranslation(language, "education.experienceTitle")}
					</h3>
					<div className="relative">
						{experience.map((item, index) => (
							<TimelineItem
								key={item.id}
								title={item.position}
								subtitle={item.company}
								period={item.period}
								description={item.description}
								isLeft={index % 2 === 0}
								index={index}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Education

"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRetro } from "@/components/retro-provider"
import { useTheme } from "@/components/theme-provider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useLanguage } from "./language-provider"
import { getTranslation } from "@/lib/translations"

type Project = {
	id: number
	title: string
	description: string
	image: string
	tags: { name: string; color: string; retroColor?: string }[]
	github?: string
	demo?: string
	live?: string
	details?: string
	media?: string[]
	releaseDate: string
}

type ProjectModalProps = {
	project: Project | null
	onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
	if (!project) return null
	const [currentIndex, setCurrentIndex] = useState(0)
	const { theme } = useTheme()
	const isDark = theme === "dark"

	useEffect(() => {
		setCurrentIndex(0)
	}, [project])

	return (
		<Dialog open={!!project} onOpenChange={onClose}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : ""}`}>{project.title}</DialogTitle>

					<div className="flex items-end w-full">
						<p className="font-bold text-slate-400">{project.releaseDate}</p>
						<div className="flex flex-wrap gap-2 ml-4">
							{project.tags.map((tag) => (
								<span
									key={tag.name}
									className={`text-xs px-2 py-1 rounded-full ${tag.color}`}
								>
									{tag.name}
								</span>
							))}
						</div>
					</div>
				</DialogHeader>
				<div className="space-y-4">
					{project.media?.length ? (
					<div className="relative w-full max-h-[400px] overflow-hidden">
						<img
						src={project.media[currentIndex]}
						alt={`${project.title} media ${currentIndex + 1}`}
						className="w-full h-auto max-h-[400px] object-contain rounded-md transition-all duration-500"
						/>
						{project.media.length > 1 && (
						<>
							<button
							onClick={() =>
								setCurrentIndex((prev) =>
								prev === 0 ? project.media.length - 1 : prev - 1
								)
							}
							className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
							>
							‹
							</button>
							<button
							onClick={() =>
								setCurrentIndex((prev) =>
								prev === project.media.length - 1 ? 0 : prev + 1
								)
							}
							className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
							>
							›
							</button>
						</>
						)}
						<div className="flex justify-center gap-2 mt-2">
						{project.media.map((_, idx) => (
							<button
							key={idx}
							onClick={() => setCurrentIndex(idx)}
							className={`h-2 w-2 rounded-full ${currentIndex === idx ? "bg-primary" : "bg-muted-foreground/30"}`}
							/>
						))}
						</div>
					</div>
					) : (
					<img
						src={project.image}
						alt={project.title}
						className="w-full max-h-96 object-cover rounded-md"
					/>
					)}

					<p className="text-sm text-muted-foreground whitespace-pre-line">{project.details || project.description}</p>

					<div className="flex space-x-3 w-full justify-center">
						{project.github && (
							<Button
								size="sm"
								variant="secondary"
								asChild
								className={"hover:bg-white/30 backdrop-blur-sm"
								}
							>
								<a href={project.github} target="_blank" rel="noopener noreferrer">
									<Github size={16} className="mr-1" /> Code
								</a>
							</Button>
						)}
						{project.demo && (
							<Button
								size="sm"
								variant="secondary"
								asChild
								className={"hover:bg-white/30 backdrop-blur-sm"
								}
							>
								<a href={project.demo} target="_blank" rel="noopener noreferrer">
									<ExternalLink size={16} className="mr-1" /> Demo
								</a>
							</Button>
						)}
						{project.live && (
							<Button
								size="sm"
								variant="secondary"
								asChild
								className={"hover:bg-white/30 backdrop-blur-sm"
								}
							>
								<a href={project.live} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
									<ExternalLink size={16} className="mr-1" /> Live
								</a>
							</Button>
						)}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, { once: true, threshold: 0.1 })
	const [isHovered, setIsHovered] = useState(false)
	const { retro } = useRetro()
	const { theme } = useTheme()
	const isDark = theme === "dark"

	return (
		<div
			ref={ref}
			className={`group relative overflow-hidden transition-all duration-700 h-full ${retro
					? isDark
						? "border-2 border-cyan-400 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.6)]"
						: "border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
					: "rounded-lg border border-primary/10 shadow-lg"
				} ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
			style={{ transitionDelay: `${index * 100}ms` }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="relative h-64 overflow-hidden">
				<img
					src={project.image || "/placeholder.svg"}
					alt={project.title}
					className={`w-full h-full object-cover transition-transform duration-500 ${isHovered && !retro ? "scale-110" : "scale-100"
						} ${retro ? "filter contrast-125 brightness-110" : ""}`}
					width={600}
					height={400}
				/>
				<div
					className={`absolute inset-0 ${retro
							? isDark
								? "bg-cyan-400/90 flex flex-col justify-center items-center p-6"
								: "bg-purple-600/90 flex flex-col justify-center items-center p-6"
							: "bg-gradient-to-br from-primary/90 to-purple-500/90 flex flex-col justify-center items-center p-6"
						} transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
				>
					<h3 className={`text-xl text-center font-bold mb-2 ${retro ? "text-black" : "text-primary-foreground"}`}>
						{project.title}
					</h3>
					<p className={`text-center mb-4 ${retro ? "text-black" : "text-primary-foreground/90"}`}>
						{project.description}
					</p>
					<div className="flex space-x-3">
						{project.github && (
							<Button
								size="sm"
								variant="secondary"
								asChild
								className={
									retro
										? isDark
											? "bg-black text-white border-2 border-white hover:bg-gray-800"
											: "bg-black text-white border-2 border-white hover:bg-gray-800"
										: "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
								}
							>
								<a href={project.github} target="_blank" rel="noopener noreferrer">
									<Github size={16} className="mr-1" /> Code
								</a>
							</Button>
						)}
						{project.demo && (
							<Button
								size="sm"
								variant="secondary"
								asChild
								className={
									retro
										? isDark
											? "bg-black text-white border-2 border-white hover:bg-gray-800"
											: "bg-black text-white border-2 border-white hover:bg-gray-800"
										: "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
								}
							>
								<a href={project.demo} target="_blank" rel="noopener noreferrer">
									<ExternalLink size={16} className="mr-1" /> Demo
								</a>
							</Button>
						)}
						{project.live && (
							<Button
								size="sm"
								variant="secondary"
								asChild
								className={
									retro
										? isDark
											? "bg-black text-white border-2 border-white hover:bg-gray-800"
											: "bg-black text-white border-2 border-white hover:bg-gray-800"
										: "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
								}
							>
								<a href={project.live} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
									<ExternalLink size={16} className="mr-1" /> Live
								</a>
							</Button>
						)}
					</div>
				</div>
			</div>
			<div
				className={`p-4 ${retro ? (isDark ? "bg-[#2d1b69] h-full" : "bg-white h-full") : "bg-gradient-to-br from-card to-background"
					}`}
			>
				<h3 className="font-bold">{project.title}</h3>
				<div className="flex flex-wrap gap-2 mt-2">
					{project.tags.map((tag) => (
						<span
							key={tag.name}
							className={`text-xs px-2 py-1 ${retro
									? isDark
										? tag.name === "React"
											? "bg-cyan-400 text-black"
											: tag.name === "Node.js"
												? "bg-pink-500 text-white"
												: tag.name === "MongoDB"
													? "bg-green-500 text-black"
													: tag.name === "TypeScript"
														? "bg-blue-500 text-white"
														: "bg-yellow-400 text-black"
										: tag.name === "React"
											? "bg-blue-500 text-white border border-black"
											: tag.name === "Node.js"
												? "bg-green-600 text-white border border-black"
												: tag.name === "MongoDB"
													? "bg-green-500 text-white border border-black"
													: tag.name === "TypeScript"
														? "bg-blue-600 text-white border border-black"
														: "bg-purple-600 text-white border border-black"
									: `${tag.color} rounded-full`
								}`}
						>
							{tag.name}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

const Projects = () => {
	const { retro } = useRetro()
	const { theme } = useTheme()
	const isDark = theme === "dark"
	const { language } = useLanguage()

	const [selectedProject, setSelectedProject] = useState<Project | null>(null)

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project)
	}

	const handleCloseModal = () => {
		setSelectedProject(null)
	}

	const projects: Project[] = [
		{
			id: 1,
			title: getTranslation(language, "projects.project1Title"),
			description: getTranslation(language, "projects.project1Desc"),
			image: "/cfi_logo.png",
			tags: [
				{ name: "Wordpress", color: "bg-blue-100 text-blue-700" },
				{ name: "PHP", color: "bg-green-100 text-green-700" },
				{ name: "MySQL", color: "bg-red-100 text-red-700" },
			],
			live: "https://cfi-consultoria.com.br/",
			details: getTranslation(language, "projects.project1Details"),
			media: ["/cfi_website.gif"],
			releaseDate: "2024"
		},
		{
			id: 2,
			title: getTranslation(language, "projects.project2Title"),
			description: getTranslation(language, "projects.project2Desc"),
			image: "/cfi_logo.png",
			tags: [
				{ name: "TypeScript", color: "bg-yellow-100 text-yellow-700" },
				{ name: "React", color: "bg-blue-100 text-blue-700" },
				{ name: "Next.js", color: "bg-orange-100 text-orange-700" },
				{ name: "Tailwind", color: "bg-teal-100 text-teal-700" },
				{ name: "Spring Boot", color: "bg-teal-100 text-teal-700" },
				{ name: "MySQL", color: "bg-teal-100 text-teal-700" },
			],
			details: getTranslation(language, "projects.project2Details"),
			media: ["/management_cfi1.png", "/management_cfi2.png", "/management_cfi3.png", "/management_cfi4.png"],
			releaseDate: "2024"
		},
		{
			id: 3,
			title: getTranslation(language, "projects.project3Title"),
			description: getTranslation(language, "projects.project3Desc"),
			image: "/cfi_logo.png",
			tags: [
				{ name: "Express", color: "bg-lime-100 text-lime-700" },
				{ name: "React", color: "bg-blue-100 text-blue-700" },
				{ name: "Tailwind", color: "bg-teal-100 text-teal-700" },
				{ name: "Prisma", color: "bg-slate-100 text-slate-700" },
			],
			details: getTranslation(language, "projects.project3Details"),
			media: ["/streaming_cfi1.png", "/streaming_cfi2.png", "/streaming_cfi3.png", "/streaming_cfi4.png", "/streaming_cfi5.png", "/streaming_cfi6.png", "/streaming_cfi7.png", "/streaming_cfi8.png", "/streaming_cfi9.png",],
			releaseDate: "2025"
		},
		{
			id: 4,
			title: getTranslation(language, "projects.project4Title"),
			description: getTranslation(language, "projects.project4Desc"),
			image: "/bugbusters.png",
			tags: [
				{ name: "Flask", color: "bg-rose-100 text-rose-700" },
				{ name: "MySQL", color: "bg-teal-100 text-teal-700" },
			],
			github: "https://github.com/BugBustersFatecSJC/Smart-farm",
			details: getTranslation(language, "projects.project4Details"),
			media: ["/smart-farm_1.gif", "/smart_farm_2.gif"],
			releaseDate: "2024"
		},
		{
			id: 5,
			title: getTranslation(language, "projects.project5Title"),
			description: getTranslation(language, "projects.project5Desc"),
			image: "/bugbusters.png",
			tags: [
				{ name: "React", color: "bg-blue-100 text-blue-700" },
				{ name: "Express", color: "bg-lime-100 text-lime-700" },
				{ name: "Prisma", color: "bg-slate-100 text-slate-700" },
				{ name: "Tailwind", color: "bg-teal-100 text-teal-700" },
				{ name: "MySQL", color: "bg-emerald-100 text-emerald-700" },
				{ name: "Tailwind", color: "bg-teal-100 text-teal-700" },
			],
			github: "https://github.com/BugBustersFatecSJC/inv.sort",
			details: getTranslation(language, "projects.project5Details"),
			media: ["/inv.sort1.png", "/inv.sort2.png", "/inv.sort3.png"],
			releaseDate: "2024"
		},
		{
			id: 6,
			title: getTranslation(language, "projects.project6Title"),
			description: getTranslation(language, "projects.project6Desc"),
			image: "/fromzero.png",
			tags: [
				{ name: "React", color: "bg-blue-100 text-blue-700" },
				{ name: "Vite", color: "bg-pink-100 text-pink-700" },
				{ name: "Spring Boot", color: "bg-teal-100 text-teal-700" },
				{ name: "TypeScript", color: "bg-yellow-100 text-yellow-700" },
				{ name: "Tailwind", color: "bg-teal-100 text-teal-700" },
				{ name: "MongoDB", color: "bg-amber-100 text-amber-700" },
				{ name: "MySQL", color: "bg-teal-100 text-teal-700" },
			],
			github: "https://github.com/FR0M-ZER0/checkpoint",
			details: getTranslation(language, "projects.project6Details"),
			media: ["/checkpoint1.png", "/checkpoint2.png", "/checkpoint3.png", "/checkpoint4.png", "/checkpoint5.png", "/checkpoint6.png", "/checkpoint7.png",],
			releaseDate: "2025"
		},
	]

	return (
		<section id="projects" className={`py-20 ${!retro ? "bg-gradient-to-b from-background to-card/30" : ""}`}>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className={`text-3xl font-bold mb-2 ${retro && "tracking-wider"}`}>{getTranslation(language, "projects.title")}</h2>
					<div
						className={`w-20 h-1 mx-auto ${retro ? (isDark ? "bg-cyan-400 h-2" : "bg-purple-600 h-2") : "bg-gradient-to-r from-primary to-purple-500"
							}`}
					></div>
					<p className={`max-w-2xl mx-auto mt-4 ${retro && isDark ? "text-gray-300" : "text-muted-foreground"}`}>
						{getTranslation(language, "projects.subtitle")}
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div key={project.id} onClick={() => handleProjectClick(project)} className="cursor-pointer">
							<ProjectCard project={project} index={index} />
						</div>
					))}
				</div>

				<ProjectModal project={selectedProject} onClose={handleCloseModal} />

				<div className="text-center mt-12">
					<Button
						className={
							retro
								? isDark
									? "bg-cyan-500 text-black border-2 border-cyan-300 font-bold shadow-[4px_4px_0px_0px_rgba(103,232,249,0.6)] hover:shadow-[2px_2px_0px_0px_rgba(103,232,249,0.6)] hover:translate-x-[2px] hover:translate-y-[2px]"
									: "bg-purple-600 text-white border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
								: "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
						}
					>
						{getTranslation(language, "projects.viewAll")}
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Projects

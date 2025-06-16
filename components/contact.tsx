"use client"

import type React from "react"
import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"
import { useRetro } from "@/components/retro-provider"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "./language-provider"
import { getTranslation } from "@/lib/translations"

const ContactInfo = ({
	icon,
	title,
	content,
	delay = 0,
}: {
	icon: React.ReactNode
	title: string
	content: string
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
			className={`flex items-start space-x-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
				}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			<div
				className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${retro
						? isDark
							? "bg-cyan-400 text-black"
							: "bg-purple-600 text-white border-2 border-black"
						: "bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg text-primary"
					}`}
			>
				{icon}
			</div>
			<div>
				<h3 className="font-medium">{title}</h3>
				<p className={retro && isDark ? "text-gray-300" : "text-muted-foreground"}>{content}</p>
			</div>
		</div>
	)
}

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null)
	const isInView = useInView(formRef, { once: true, threshold: 0.1 })
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	})
	const { retro } = useRetro()
	const { theme } = useTheme()
	const isDark = theme === "dark"
	const { language } = useLanguage()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Form submitted:", formState)
		alert("Thank you for your message!")

		setFormState({
			name: "",
			email: "",
			subject: "",
			message: "",
		})
	}

	return (
		<section id="contact" className={`py-20 ${!retro ? "bg-gradient-to-b from-card/30 to-background" : ""}`}>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className={`text-3xl font-bold mb-2 ${retro && "tracking-wider"}`}>{getTranslation(language, "contact.title")}</h2>
					<div
						className={`w-20 h-1 mx-auto ${retro ? (isDark ? "bg-cyan-400 h-2" : "bg-purple-600 h-2") : "bg-gradient-to-r from-primary to-purple-500"
							}`}
					></div>
					<p className={`max-w-2xl mx-auto mt-4 ${retro && isDark ? "text-gray-300" : "text-muted-foreground"}`}>
						{getTranslation(language, "contact.subtitle")}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<ContactInfo icon={<MapPin />} title={getTranslation(language, "contact.location")} content="São Paulo, Brazil" delay={100} />
						<ContactInfo icon={<Mail />} title={getTranslation(language, "contact.email")} content="joaosuzuki98@outlook.com" delay={200} />
						<ContactInfo icon={<Phone />} title={getTranslation(language, "contact.phone")} content="+55 (12) 99255-7050" delay={300} />

						<div
							className={`mt-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
								}`}
							style={{ transitionDelay: "400ms" }}
						>
							<h3
								className={`text-xl font-bold mb-4 ${retro
										? isDark
											? "text-cyan-400"
											: "text-purple-600"
										: "bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
									} inline-block`}
							>
								{getTranslation(language, "contact.followMe")}
							</h3>
							<div className="flex space-x-4">
								<a
									href="https://www.linkedin.com/in/jo%C3%A3o-suzuki-6a2b02192/"
									target="_blank"
									rel="nofollow noreferrer"
									className={`w-10 h-10 flex items-center justify-center ${retro
											? isDark
												? "bg-yellow-400 text-black border-2 border-yellow-200 hover:bg-yellow-500"
												: "bg-yellow-300 text-black border-2 border-black hover:bg-yellow-400"
											: "bg-gradient-to-br from-card to-background rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-primary/10"
										}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
										<rect x="2" y="9" width="4" height="12"></rect>
										<circle cx="4" cy="4" r="2"></circle>
									</svg>
								</a>

								<a
									href="https://github.com/joaosuzuki98"
									target="_blank"
									rel="nofollow noreferrer"
									className={`w-10 h-10 flex items-center justify-center ${retro
											? isDark
												? "bg-yellow-400 text-black border-2 border-yellow-200 hover:bg-yellow-500"
												: "bg-yellow-300 text-black border-2 border-black hover:bg-yellow-400"
											: "bg-gradient-to-br from-card to-background rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-primary/10"
										}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
									</svg>
								</a>

								<a 
									href="https://www.youtube.com/@joaosuzuki23"
									target="_blank"
									rel="nofollow noreferrer"
									className={`w-10 h-10 flex items-center justify-center ${retro
									? isDark
										? "bg-yellow-400 text-black border-2 border-yellow-200 hover:bg-yellow-500"
										: "bg-yellow-300 text-black border-2 border-black hover:bg-yellow-400"
									: "bg-gradient-to-br from-card to-background rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-primary/10"
								}`}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
										fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/>
										<polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
									</svg>
								</a>

								<a
									href="https://www.instagram.com/joao.bssuzuki/"
									target="_blank"
									rel="nofollow noreferrer"
									className={`w-10 h-10 flex items-center justify-center ${retro
									? isDark
										? "bg-yellow-400 text-black border-2 border-yellow-200 hover:bg-yellow-500"
										: "bg-yellow-300 text-black border-2 border-black hover:bg-yellow-400"
									: "bg-gradient-to-br from-card to-background rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-primary/10"
								}`}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
										fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
										<path d="M16 11.37A4 4 0 1 1 12.63 8"/>
										<line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
									</svg>
								</a>
							</div>
						</div>
					</div>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className={`space-y-6 transition-all duration-700 p-6 ${retro
								? isDark
									? "bg-[#2d1b69] border-2 border-cyan-400 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.6)]"
									: "bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
								: "rounded-lg bg-gradient-to-br from-card/50 to-background border border-primary/10 shadow-lg"
							} ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
					>
						<div className="grid sm:grid-cols-2 gap-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium mb-2">
									{getTranslation(language, "contact.yourName")}
								</label>
								<Input
									id="name"
									name="name"
									value={formState.name}
									onChange={handleChange}
									placeholder="John"
									required
									className={
										retro
											? isDark
												? "border-cyan-400 focus:border-cyan-300 bg-[#1e1256] text-white"
												: "border-black focus:border-purple-600"
											: "border-primary/20 focus:border-primary"
									}
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium mb-2">
									{getTranslation(language, "contact.yourEmail")}
								</label>
								<Input
									id="email"
									name="email"
									type="email"
									value={formState.email}
									onChange={handleChange}
									placeholder="john@example.com"
									required
									className={
										retro
											? isDark
												? "border-cyan-400 focus:border-cyan-300 bg-[#1e1256] text-white"
												: "border-black focus:border-purple-600"
											: "border-primary/20 focus:border-primary"
									}
								/>
							</div>
						</div>

						<div>
							<label htmlFor="subject" className="block text-sm font-medium mb-2">
								{getTranslation(language, "contact.subject")}
							</label>
							<Input
								id="subject"
								name="subject"
								value={formState.subject}
								onChange={handleChange}
								placeholder="Project Inquiry"
								required
								className={
									retro
										? isDark
											? "border-cyan-400 focus:border-cyan-300 bg-[#1e1256] text-white"
											: "border-black focus:border-purple-600"
										: "border-primary/20 focus:border-primary"
								}
							/>
						</div>

						<div>
							<label htmlFor="message" className="block text-sm font-medium mb-2">
								{getTranslation(language, "contact.message")}
							</label>
							<Textarea
								id="message"
								name="message"
								value={formState.message}
								onChange={handleChange}
								placeholder="Your message here..."
								rows={5}
								required
								className={
									retro
										? isDark
											? "border-cyan-400 focus:border-cyan-300 bg-[#1e1256] text-white"
											: "border-black focus:border-purple-600"
										: "border-primary/20 focus:border-primary"
								}
							/>
						</div>

						<Button
							type="submit"
							className={
								retro
									? isDark
										? "bg-cyan-500 text-black border-2 border-cyan-300 font-bold shadow-[4px_4px_0px_0px_rgba(103,232,249,0.6)] hover:shadow-[2px_2px_0px_0px_rgba(103,232,249,0.6)] hover:translate-x-[2px] hover:translate-y-[2px]"
										: "bg-purple-600 text-white border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
									: "w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
							}
						>
							{getTranslation(language, "contact.sendMessage")}
						</Button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact

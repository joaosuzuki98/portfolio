"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import ParticlesBackground from "./particles-background"
import { useTheme } from "@/components/theme-provider"
import { useTrail, animated } from "@react-spring/web"

const Hero = () => {
	const { theme } = useTheme()
	const [show, setShow] = useState(false)

	const text = "Software Engineer"

	const trail = useTrail(text.length, {
		config: { mass: 3, tension: 500, friction: 40 },
		opacity: show ? 1 : 0,
		y: show ? 0 : 20,
		scale: show ? 1 : 0.8,
		from: { opacity: 0, y: 20, scale: 0.8 },
		delay: 800,
	})

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(true)
		}, 500)

		return () => clearTimeout(timer)
	}, [])

	return (
		<section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
			<ParticlesBackground />

			<div
				className={`absolute inset-0 -z-10 ${theme === "dark"
						? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
						: "bg-gradient-to-br from-blue-50 via-blue-100 to-white"
					}`}
			>
				<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-30"></div>
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
				<div className="animate-fadeIn backdrop-blur-sm bg-background/5 p-8 rounded-xl border border-primary/10">
					<p className="text-primary mb-4 font-medium">Hello, I'm</p>
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						<span className="block">João Suzuki</span>
						<span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent inline-flex h-[calc(1.5em)]">
							{trail.map(({ y, opacity, scale }, index) => (
								<animated.span
									key={index}
									style={{
										opacity,
										transform: y.to((y) => `translateY(${y}px) scale(${scale})`),
										display: "inline-block",
									}}
								>
									{text[index] === " " ? "\u00A0" : text[index]}
								</animated.span>
							))}
						</span>
					</h1>
					<p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
						A passionate developer and engineering student creating innovative solutions and turning ideas into reality
						through clean and efficient code.
					</p>

					<div className="flex flex-wrap justify-center gap-4 mb-12">
						<Button
							className="animate-fadeInUp bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
							style={{ animationDelay: "200ms" }}
						>
							View Projects
						</Button>
						<Button
							variant="outline"
							className="animate-fadeInUp border-primary/20 backdrop-blur-sm"
							style={{ animationDelay: "400ms" }}
						>
							Download Resume
						</Button>
					</div>

					<div className="flex justify-center space-x-6 mb-16 animate-fadeInUp" style={{ animationDelay: "600ms" }}>
						<a href="#" className="text-muted-foreground hover:text-primary transition-colors">
							<Github size={24} />
						</a>
						<a href="#" className="text-muted-foreground hover:text-primary transition-colors">
							<Linkedin size={24} />
						</a>
						<a href="#" className="text-muted-foreground hover:text-primary transition-colors">
							<Mail size={24} />
						</a>
					</div>
				</div>

				<a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<ArrowDown className="text-primary" size={32} />
				</a>
			</div>
		</section>
	)
}

export default Hero

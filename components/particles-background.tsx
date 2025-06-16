"use client"

import { useCallback, useEffect, useState } from "react"
import { useTheme } from "@/components/theme-provider"
import Particles from "react-tsparticles"
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export default function ParticlesBackground() {
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine)
	}, [])

	if (!mounted) return null

	const isDarkTheme = theme === "dark"

	const darkConfig = {
		background: {
			opacity: 0,
		},
		fpsLimit: 60,
		particles: {
			number: {
				value: 160,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: "#ffffff",
			},
			shape: {
				type: "circle",
			},
			opacity: {
				value: 0.8,
				random: true,
				anim: {
					enable: true,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 3,
				random: true,
				anim: {
					enable: false,
				},
			},
			links: {
				enable: false,
			},
			move: {
				enable: true,
				speed: 0.2,
				direction: "none",
				random: true,
				straight: false,
				outModes: {
					default: "out",
				},
			},
		},
		interactivity: {
			detectsOn: "canvas",
			events: {
				onHover: {
					enable: true,
					mode: "bubble",
				},
				onClick: {
					enable: true,
					mode: "push",
				},
				resize: true,
			},
			modes: {
				bubble: {
					distance: 100,
					size: 5,
					duration: 2,
					opacity: 0.8,
					speed: 3,
				},
				push: {
					quantity: 4,
				},
			},
		},
		detectRetina: true,
	}

	const lightConfig = {
		background: {
			opacity: 0,
		},
		fpsLimit: 60,
		particles: {
			number: {
				value: 30,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: ["#3b82f6", "#8b5cf6", "#ec4899", "#f97316"],
			},
			shape: {
				type: ["circle", "triangle"],
			},
			opacity: {
				value: 0.3,
				random: true,
			},
			size: {
				value: 15,
				random: true,
				anim: {
					enable: true,
					speed: 2,
					size_min: 5,
					sync: false,
				},
			},
			links: {
				enable: true,
				distance: 150,
				color: "#3b82f6",
				opacity: 0.2,
				width: 1,
			},
			move: {
				enable: true,
				speed: 1,
				direction: "none",
				random: true,
				straight: false,
				outModes: {
					default: "bounce",
				},
			},
		},
		interactivity: {
			detectsOn: "canvas",
			events: {
				onHover: {
					enable: true,
					mode: "repulse",
				},
				onClick: {
					enable: true,
					mode: "push",
				},
				resize: true,
			},
			modes: {
				repulse: {
					distance: 100,
					duration: 0.4,
				},
				push: {
					quantity: 4,
				},
			},
		},
		detectRetina: true,
	}

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			options={isDarkTheme ? darkConfig : lightConfig}
			className="absolute inset-0 -z-10"
		/>
	)
}

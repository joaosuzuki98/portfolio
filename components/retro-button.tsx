"use client"

import { useRetro } from "./retro-provider"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Gamepad2 } from "lucide-react"
import { useSpring, animated } from "@react-spring/web"
import { getTranslation } from "@/lib/translations"

export default function RetroButton() {
	const { retro, toggleRetro } = useRetro()
	const { theme } = useTheme()
	const { language } = useLanguage()
	const isDark = theme === "dark"

	const buttonAnimation = useSpring({
		scale: retro ? 1.1 : 1,
		rotate: retro ? 5 : 0,
		config: {
			tension: 300,
			friction: 10,
		},
	})

	return (
		<animated.div style={buttonAnimation}>
			<Button
				onClick={toggleRetro}
				className={`relative overflow-hidden transition-all duration-300 ${retro
						? isDark
							? "bg-yellow-400 text-black border-2 border-yellow-200 font-bold shadow-[4px_4px_0px_0px_rgba(254,240,138,0.6)] hover:shadow-[2px_2px_0px_0px_rgba(254,240,138,0.6)] active:shadow-[0px_0px_0px_0px_rgba(254,240,138,0.6)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px]"
							: "bg-yellow-400 text-black border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px]"
						: "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
					}`}
				size="lg"
			>
				<Gamepad2 className="mr-2 h-5 w-5" />
				{retro ? getTranslation(language, "hero.modernMode") : getTranslation(language, "hero.retroMode")}
				{retro && (
					<span className="absolute inset-0 pointer-events-none">
						<span
							className={`absolute top-[2px] left-[2px] right-[2px] h-[1px] ${isDark ? "bg-yellow-200/40" : "bg-white/40"}`}
						></span>
						<span
							className={`absolute bottom-[2px] left-[2px] right-[2px] h-[1px] ${isDark ? "bg-yellow-600/40" : "bg-black/40"}`}
						></span>
						<span
							className={`absolute left-[2px] top-[2px] bottom-[2px] w-[1px] ${isDark ? "bg-yellow-200/40" : "bg-white/40"}`}
						></span>
						<span
							className={`absolute right-[2px] top-[2px] bottom-[2px] w-[1px] ${isDark ? "bg-yellow-600/40" : "bg-black/40"}`}
						></span>
					</span>
				)}
			</Button>
		</animated.div>
	)
}

"use client"

import { useRetro } from "@/components/retro-provider"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import { getTranslation } from "@/lib/translations"

const Footer = () => {
	const currentYear = new Date().getFullYear()
	const { retro } = useRetro()
	const { theme } = useTheme()
	const { language } = useLanguage()
	const isDark = theme === "dark"

	return (
		<footer
			className={`py-8 text-center ${retro
					? isDark
						? "bg-[#1e1256] text-cyan-400 border-t-2 border-cyan-400"
						: "bg-black text-white border-t-2 border-purple-600"
					: "bg-card"
				}`}
		>
			<div className="container mx-auto px-4">
				<p className={retro ? "font-[var(--font-vt323)] text-lg" : "text-muted-foreground"}>
					© {currentYear} João Suzuki. {getTranslation(language, "footer.rights")}
				</p>
				<p className={`text-sm mt-2 ${retro ? "font-[var(--font-vt323)]" : "text-muted-foreground"}`}>
					{retro ? "Made with <3 using Retro Web Technology" : getTranslation(language, "footer.madeWith")}
				</p>
				{retro && (
					<div className="mt-4 text-xs">
						<span className={isDark ? "text-cyan-300" : "text-gray-400"}>
							{getTranslation(language, "footer.bestViewed")}
						</span>
					</div>
				)}
			</div>
		</footer>
	)
}

export default Footer

"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { useRetro } from "@/components/retro-provider"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Check, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
	{ code: "en", name: "English" },
	{ code: "pt", name: "Português" },
	{ code: "es", name: "Español" },
]

export default function LanguageSwitcher() {
	const { language, setLanguage } = useLanguage()
	const { retro } = useRetro()
	const { theme } = useTheme()
	const isDark = theme === "dark"
	const [open, setOpen] = useState(false)

	const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button
					variant={retro ? "default" : "ghost"}
					size="icon"
					className={
						retro
							? isDark
								? "bg-cyan-500 text-black border-2 border-cyan-300"
								: "bg-purple-600 text-white border-2 border-black"
							: ""
					}
				>
					<Globe size={20} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className={retro ? (isDark ? "bg-[#2d1b69] border-2 border-cyan-400" : "bg-white border-2 border-black") : ""}
			>
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => {
							setLanguage(lang.code as "en" | "pt" | "es")
							setOpen(false)
						}}
						className={
							retro
								? isDark
									? "hover:bg-cyan-400/20 focus:bg-cyan-400/20"
									: "hover:bg-purple-600/20 focus:bg-purple-600/20"
								: ""
						}
					>
						{lang.name}
						{lang.code === language && <Check className="ml-2 h-4 w-4" />}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

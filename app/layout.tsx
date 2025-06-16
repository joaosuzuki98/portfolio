import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { vt323, pressStart2P } from "@/lib/fonts"

export const metadata: Metadata = {
	title: "Suzuki's Portoflio",
	description: "A personal portfolio highlighting my work in web development, software engineering, and tech projects.",
	icons: {
		icon: "/favicon.ico",
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${vt323.variable} ${pressStart2P.variable}`}>
			<body>{children}</body>
		</html>
	)
}
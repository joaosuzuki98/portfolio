"use client"

import { useState, useEffect } from "react"
import { useTrail, animated } from "@react-spring/web"

interface AnimatedTextProps {
	text: string
	className?: string
	delay?: number
}

export default function AnimatedText({ text, className = "", delay = 800 }: AnimatedTextProps) {
	const [show, setShow] = useState(false)

	const trail = useTrail(text.length, {
		config: { mass: 3, tension: 500, friction: 40 },
		opacity: show ? 1 : 0,
		y: show ? 0 : 20,
		scale: show ? 1 : 0.8,
		from: { opacity: 0, y: 20, scale: 0.8 },
		delay,
	})

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(true)
		}, 100)

		return () => clearTimeout(timer)
	}, [])

	return (
		<span className={`inline-flex ${className}`}>
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
	)
}

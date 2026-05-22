"use client"
import { useState, useEffect } from "react"

const textSections = [
    {
        file: "about.txt",
        text: "Auburn SWE senior graduating August 2026. I build ETL pipelines, web apps, and automation tools with a focus on scalable, maintainable software. Experienced in cloud, DevOps, and Agile environments across internship and research roles.",
        duration: 16000
    },
    {
        file: "hobbies.txt",
        text: "In my free time I like to golf, lift weights, and spend time with friends and family.",
        duration: 8000
    },
    {
        file: "status.txt",
        text: "Open to work — seeking full-time SWE or Data Engineering roles. Open to relocation.",
        duration: 7000
    }
]

export default function About() {
    const [index, setIndex] = useState(0)

    const current = textSections[index]

    return (
        <section id="about" className="px-6 py-14">
            <AnimatedTerminal
                key={index}
                file={current.file}
                text={current.text}
                duration={current.duration}
                onComplete={() => setIndex((prev) => (prev + 1) % textSections.length)}
            />
        </section>
    )
}

function AnimatedTerminal({ file, text, duration, onComplete }: {
    file: string
    text: string
    duration: number
    onComplete: () => void
}) {
    const [command, setCommand] = useState("")
    const [showText, setShowText] = useState(false)
    const [showPrompt, setShowPrompt] = useState(false)
    const [clearCmd, setClearCmd] = useState("")
    const [isClearing, setIsClearing] = useState(false)

    useEffect(() => {
        let i = 0
        const cmd = `cat ${file}`
        const clearText = "clear"

        const typer = setInterval(() => {
            setCommand(cmd.slice(0, i + 1))
            i++
            if (i >= cmd.length) {
                clearInterval(typer)

                setTimeout(() => setShowText(true), 700)
                setTimeout(() => setShowPrompt(true), 900)

                setTimeout(() => {
                    setIsClearing(true)
                    let j = 0
                    const clearTyper = setInterval(() => {
                        setClearCmd(clearText.slice(0, j + 1))
                        j++
                        if (j >= clearText.length) clearInterval(clearTyper)
                    }, 80)
                }, duration - 1000)

                setTimeout(() => {
                    onComplete()
                }, duration)
            }
        }, 140)

        return () => clearInterval(typer)
    }, [file, duration, onComplete])

    return (
        <div className="border border-gray-700 rounded-lg p-4 bg-black font-mono h-70 md:h-45">
            <p>
                <span className="text-[#7B7AE8]">clay@portfolio</span> ~ $ {command}
                {!showText && <span className="animate-pulse">▌</span>}
            </p>
            {showText && <pre className="mt-1 text-gray-300 whitespace-pre-wrap">{text}</pre>}
            {showPrompt && (
                <p className="mt-1">
                    <span className="text-[#7B7AE8]">clay@portfolio</span> ~ $ {clearCmd}
                    {!isClearing && <span className="animate-pulse">▌</span>}
                </p>
            )}
        </div>
    )
}
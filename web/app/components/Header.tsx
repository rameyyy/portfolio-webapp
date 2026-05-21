import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ['latin'],
})

interface CodeLineProps {
  number: number
  indent?: boolean
  children: React.ReactNode
}

const CodeLine = ({ number, indent = false, children }: CodeLineProps) => (
  <div className="flex gap-4">
    <span className="text-gray-600">{number}</span>
    <p className={indent ? "pl-4" : ""}>{children}</p>
  </div>
)
export default function Header() {
    return (
        <header className="flex items-start pt-22 md:pt-30 h-screen px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center w-full max-w-7xl md:pl-16 gap-12 md:gap-16 lg:gap-16">
                <div className="whitespace-nowrap flex flex-col gap-2">
                    <h1 className={`${montserrat.className} text-5xl font-bold text-[#7B7AE8] pl-6`}>Hello,</h1>
                    <h1 className={`${montserrat.className} text-6xl font-bold`}>I&apos;m Clay.</h1>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2">
                    <div className="font-mono text-sm">
                        <CodeLine number={1}>
                            <span className="text-blue-400">const</span>
                            {" "}
                            <span className="text-white">profile</span>
                            <span className="text-gray-400">{" = {"}</span>
                        </CodeLine>
                        <CodeLine number={2} indent>
                            <span className="text-purple-400">college</span>
                            <span className="text-gray-400">: </span>
                            <span className="text-green-400">&quot;Auburn University&quot;</span>
                            <span className="text-gray-400">,</span>
                        </CodeLine>
                        <CodeLine number={3} indent>
                            <span className="text-purple-400">degree</span>
                            <span className="text-gray-400">: </span>
                            <span className="text-green-400">&quot;BS Software Engineering&quot;</span>
                            <span className="text-gray-400">,</span>
                        </CodeLine>
                        <CodeLine number={4} indent>
                            <span className="text-purple-400">gradDate</span>
                            <span className="text-gray-400">: </span>
                            <span className="text-green-400">&quot;August 2026&quot;</span>
                            <span className="text-gray-400">,</span>
                        </CodeLine>
                        <CodeLine number={5} indent>
                            <span className="text-purple-400">currRole</span>
                            <span className="text-gray-400">: </span>
                            <span className="text-green-400">&quot;Software &amp; Data Engineer&quot;</span>
                            <span className="text-gray-400">,</span>
                        </CodeLine>
                        <CodeLine number={6} indent>
                            <span className="text-purple-400">currCompany</span>
                            <span className="text-gray-400">: </span>
                            <span className="text-green-400">&quot;AU RFID Lab&quot;</span>
                            <span className="text-gray-400">,</span>
                        </CodeLine>
                        <CodeLine number={7}>
                            <span className="text-gray-400">{"}"}</span>
                        </CodeLine>
                    </div>
                </div>
            </div>
        </header>
    );
}
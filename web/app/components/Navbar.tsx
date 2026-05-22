import { Lato } from "next/font/google"

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700']
})

const links = [
  { href: '#about', label: '[ About ]' },
  { href: '#contact', label: '[ Contact ]' },
  { href: '#projects', label: '[ Projects ]' },
  { href: '#experience', label: '[ Experience ]' },
]

const linkClass = "text-[11px] md:text-[16px] hover:text-[#6665DD] transition duration-200 cursor-pointer tracking-wide whitespace-nowrap"

export default function Navbar() {
  return (
    <nav className={`${lato.className} fixed top-0 w-full flex justify-between items-center px-2 md:px-6 py-6 md:py-4 bg-[#1C1D21]/80 backdrop-blur-md border-b border-gray-800`}>
        <span className="hidden md:inline text-[9px] md:text-[17px]">
            <a href='http://localhost:3000'>
            <span>clayramey</span>
            <span className="text-[#7B7AE8]">.dev</span>
            </a>
        </span>
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 md:gap-21">
            {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
            </a>
            ))}
        </div>
    </nav>
  )
}
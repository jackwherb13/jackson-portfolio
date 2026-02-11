import { Github, Linkedin } from "lucide-react"

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        
        {/* Name */}
        <a
          href="#"
          className="font-semibold tracking-tight text-white px-2 py-1 rounded transition hover:outline hover:outline-1 hover:outline-white"
        >
          Jackson Herbert
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-sm text-white/80">
          
          {/* Text links (desktop only) */}
          <div className="hidden sm:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1 rounded-md transition transform hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* GitHub Icon */}
          <a
            href="https://github.com/jackwherb13"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            <Github size={18} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/jackson-herbert-184257372"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            <Linkedin size={18} />
          </a>
        </nav>
      </div>
    </header>
  )
}

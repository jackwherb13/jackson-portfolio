export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-white/60">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6">
        <p>© {year} Jackson Herbert</p>
        <p className="text-white/50">Built with Next.js + Tailwind</p>
      </div>
    </footer>
  )
}

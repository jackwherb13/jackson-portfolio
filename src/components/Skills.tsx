export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 bg-black/50 border border-white/10 rounded-xl">
      <h2 className="text-2xl font-semibold text-white">Skills</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-lg font-medium text-white">Languages</h3>
          <p className="mt-2 text-white/80">
            Java, Python, C, R, JavaScript, HTML, CSS
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white">Tools & Technologies</h3>
          <p className="mt-2 text-white/80">
            Git, VS Code, IntelliJ, Valgrind, Jira, JUnit, HubSpot, Linux
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white">Core Concepts</h3>
          <p className="mt-2 text-white/80">
            Data Structures, Multithreading, File I/O, Memory Management,
            Object-Oriented Programming, Systems Programming
          </p>
        </div>
      </div>
    </section>
  )
}

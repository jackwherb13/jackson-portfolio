export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-6 py-20 bg-black/50 border border-white/10 rounded-xl"
    >
      <h2 className="text-2xl font-semibold text-white">Experience</h2>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white">
          Blackwire Labs
        </h3>
        <p className="mt-1 text-sm text-white/70">
          AI Platform Beta Tester & Software Development Intern
        </p>
        <p className="mt-1 text-sm text-white/60">
          Remote · 2024 – Present
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
          <li>
            Tested and evaluated production AI platform features to ensure reliability,
            correctness, and usability prior to release.
          </li>
          <li>
            Developed Python automation scripts to collect, process, and deliver user
            interaction data to internal sales and analytics teams.
          </li>
          <li>
            Analyzed large language model responses and prompt workflows to improve system
            accuracy and consistency across customer use cases.
          </li>
          <li>
            Collaborated with engineers and product stakeholders to identify bugs,
            performance issues, and feature improvements.
          </li>
        </ul>
      </div>
    </section>
  )
}


export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 bg-black/50 border border-white/10 rounded-xl">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <a
          href="https://github.com/jackwherb13/cpu-scheduler"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-white">CPU Scheduler</h3>
          <p className="mt-2 text-sm text-white/80">
            Modular CPU scheduling library written in C for a custom shell environment.
            Supports priority-based, critical, and aging-based scheduling policies.
          </p>
          <p className="mt-3 text-sm text-white/70">
            Implemented dynamic ready, suspended, and terminated queues using linked lists,
            bitwise flags, and explicit memory management.
          </p>
          <div className="mt-4 text-sm text-white/60">
            C • Multithreading • Bitwise Ops • Memory Management
          </div>
        </a>

        <a
          href="https://github.com/jackwherb13/postfix-vm"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-white">Postfix Virtual Machine</h3>
          <p className="mt-2 text-sm text-white/80">
            Java-based virtual machine capable of parsing and executing integer postfix
            programs with variables and expressions.
          </p>
          <p className="mt-3 text-sm text-white/70">
            Implemented stacks, input queues, and a quadratic probing hash table for
            variable storage and retrieval.
          </p>
          <div className="mt-4 text-sm text-white/60">
            Java • Data Structures • File I/O • Hash Tables
          </div>
        </a>
      </div>
    </section>
  )
}

import Navigation from "@/components/Navigation"
import Reveal from "@/components/Reveal"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import FloatingResume from "@/components/FloatingResume"


export default function Home() {
  return (
    <main>
      <Navigation />

      <Reveal><Hero /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Contact /></Reveal>

      <Reveal><Footer /></Reveal>
      <FloatingResume />
    </main>
  )
}

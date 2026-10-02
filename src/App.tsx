import React from 'react'
import { Navigation } from './sections/Navigation'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Capabilities } from './sections/Capabilities'
import { Work } from './sections/Work'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFD] text-[#0A0909] font-sans antialiased selection:bg-[#0A0909] selection:text-[#FDFDFD]">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Capabilities />
        <Work />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

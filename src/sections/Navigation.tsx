import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { AvailabilityPill } from '../components/AvailabilityPill'
import { Button } from '../components/Button'

interface NavItem {
  label: string
  href: string
  id: string
}

const navItems: NavItem[] = [
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'CAPABILITIES', href: '#capabilities', id: 'capabilities' },
  { label: 'WORK', href: '#work', id: 'work' },
  { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
]

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  // Subtle editorial scroll progress
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'capabilities', 'work', 'experience', 'education', 'contact']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id)
              }
            })
          },
          { rootMargin: '-20% 0px -65% 0px' }
        )
        observer.observe(el)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFDFD]/90 backdrop-blur-md border-b border-[#E8E8E8]/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Left: Availability Pill */}
          <div className="flex items-center">
            <AvailabilityPill label="3-1 DATA SCIENCE UNDERGRADUATE" />
          </div>

          {/* Desktop Center Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative text-xs tracking-widest font-semibold uppercase transition-colors duration-200 py-1 ${
                    isActive ? 'text-[#0A0909]' : 'text-[#707070] hover:text-[#0A0909]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0A0909]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href="#contact" variant="primary" className="!py-2 !px-4.5 !text-xs">
                LET'S CONNECT
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#E8E8E8] text-[#0A0909] transition-transform active:scale-95"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Subtle Editorial Scroll Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0A0909]/25 origin-left pointer-events-none"
      />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-[65px] bg-[#FDFDFD] border-b border-[#E8E8E8] p-6 shadow-xl z-40"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-bold tracking-tight uppercase py-2 border-b border-[#E8E8E8]/50 transition-colors ${
                    activeSection === item.id ? 'text-[#0A0909]' : 'text-[#707070]'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-2">
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full justify-center !py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LET'S CONNECT
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

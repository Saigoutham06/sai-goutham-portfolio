import React from 'react'
import { ArrowUp } from 'lucide-react'
import { profileData } from '../data/profile'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#E8E8E8] bg-[#FDFDFD] py-12 text-[#707070] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <span className="font-semibold text-[#0A0909]">
            © {CURRENT_YEAR} {profileData.displayName}
          </span>
          <span className="hidden sm:inline text-[#E8E8E8]">|</span>
          <span>{profileData.fullName}</span>
          <span className="hidden sm:inline text-[#E8E8E8]">|</span>
          <span>3-1 Data Science Undergraduate</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden md:inline">React • TypeScript • Tailwind • Motion</span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center text-[#0A0909] hover:border-[#0A0909] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer shadow-xs"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

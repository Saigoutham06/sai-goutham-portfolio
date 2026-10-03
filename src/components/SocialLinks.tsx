import React from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { socialLinks } from '../data/social'

interface SocialLinksProps {
  className?: string
  showMetadata?: boolean
  direction?: 'vertical' | 'horizontal'
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  showMetadata = false,
  direction = 'vertical',
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'github':
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 0 0 1.59-1.59A1.59 1.59 0 0 0 6.46 5.58a1.59 1.59 0 0 0-1.59 1.59c0 .88.71 1.59 1.59 1.59m1.4 9.74v-8.37H5.06v8.37h2.8z" />
          </svg>
        )
      case 'mail':
        return <Mail className="w-3.5 h-3.5" />
      default:
        return null
    }
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {showMetadata && (
        <div className="font-mono text-xs text-[#707070] leading-relaxed select-none border-l border-[#E8E8E8] pl-3 py-1">
          <p><span className="text-[#0A0909] font-medium">curious:</span> true,</p>
          <p><span className="text-[#0A0909] font-medium">builder:</span> true,</p>
          <p><span className="text-[#0A0909] font-medium">learner:</span> true,</p>
          <p><span className="text-[#0A0909] font-medium">data_driven:</span> true</p>
          <div className="w-6 h-[1px] bg-[#0A0909]/30 mt-2" />
        </div>
      )}

      <div
        className={`flex ${
          direction === 'vertical' ? 'flex-col gap-2.5 items-end' : 'flex-wrap gap-2.5 items-center'
        }`}
      >
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E8E8E8] text-xs font-medium text-[#0A0909] tracking-wide shadow-xs hover:border-[#0A0909] hover:shadow-sm transition-all duration-300 active:scale-[0.98] ${
              direction === 'vertical' ? 'hover:-translate-x-1' : 'hover:-translate-y-0.5'
            }`}
          >
            <span className="text-[#0A0909]/80 group-hover:text-[#0A0909] transition-colors">
              {getIcon(link.icon)}
            </span>
            <span>{link.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#707070] group-hover:text-[#0A0909] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        ))}
      </div>
    </div>
  )
}

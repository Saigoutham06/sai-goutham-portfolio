export interface SocialLink {
  id: string
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail'
  isVerified: boolean
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com',
    icon: 'github',
    isVerified: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'linkedin',
    isVerified: false,
  },
  {
    id: 'email',
    label: 'Email',
    href: '#contact',
    icon: 'mail',
    isVerified: true,
  },
]

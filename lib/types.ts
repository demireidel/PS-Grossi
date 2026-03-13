import type { LucideIcon } from "lucide-react"

export interface Principle {
  icon: LucideIcon
  title: string
  description: string
}

export interface Experience {
  icon: LucideIcon
  title: string
  description: string
}

export interface DeliveryArea {
  icon: LucideIcon
  title: string
  description: string
  stat: string
  statLabel: string
}

export interface Commitment {
  icon: LucideIcon
  title: string
  description: string
}

export interface PolicyArea {
  icon: LucideIcon
  title: string
  subtitle: string
  proposals: string[]
  quote: string
}

export interface RegionalPerspective {
  region: string
  title: string
  description: string
}

export interface NavItem {
  href: string
  label: string
}

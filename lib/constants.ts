import type { NavItem } from "./types"

export const SCROLL_THRESHOLD_NAV = 50
export const SCROLL_THRESHOLD_BACK_TO_TOP = 500

export const CURRENT_YEAR = new Date().getFullYear()

export const DOT_PATTERN_SM = "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)"
export const DOT_PATTERN_SIZE_SM = "32px 32px"
export const DOT_PATTERN_SIZE_MD = "40px 40px"
export const DOT_PATTERN_SIZE_LG = "48px 48px"

export const NAV_ITEMS: NavItem[] = [
  { href: "#vision", label: "A UN That Works" },
  { href: "#dangerous-world", label: "In a Dangerous World" },
  { href: "#with-everybody", label: "With Everybody" },
  { href: "#for-everybody", label: "For Everybody" },
  { href: "#transparency", label: "Open to Everybody" },
  { href: "#global-south", label: "Global South" },
]

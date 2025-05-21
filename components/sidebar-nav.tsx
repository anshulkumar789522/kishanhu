"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarIcon, Home, MessageSquare, Settings, User, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function SidebarNav() {
  const pathname = usePathname()
  const role = pathname.includes("farmer") ? "farmer" : pathname.includes("teamleader") ? "teamleader" : "laborer"

  const farmerLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/farmer",
      icon: Home,
    },
    {
      title: "Job Requests",
      href: "/dashboard/farmer/jobs",
      icon: CalendarIcon,
    },
    {
      title: "Messages",
      href: "/dashboard/farmer/messages",
      icon: MessageSquare,
    },
    {
      title: "Team Leaders",
      href: "/dashboard/farmer/teamleaders",
      icon: Users,
    },
    {
      title: "Profile",
      href: "/dashboard/farmer/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/dashboard/farmer/settings",
      icon: Settings,
    },
  ]

  const teamLeaderLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/teamleader",
      icon: Home,
    },
    {
      title: "Job Requests",
      href: "/dashboard/teamleader/jobs",
      icon: CalendarIcon,
    },
    {
      title: "Laborers",
      href: "/dashboard/teamleader/laborers",
      icon: Users,
    },
    {
      title: "Messages",
      href: "/dashboard/teamleader/messages",
      icon: MessageSquare,
    },
    {
      title: "Profile",
      href: "/dashboard/teamleader/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/dashboard/teamleader/settings",
      icon: Settings,
    },
  ]

  const laborerLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/laborer",
      icon: Home,
    },
    {
      title: "Job Offers",
      href: "/dashboard/laborer/jobs",
      icon: CalendarIcon,
    },
    {
      title: "Messages",
      href: "/dashboard/laborer/messages",
      icon: MessageSquare,
    },
    {
      title: "Profile",
      href: "/dashboard/laborer/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/dashboard/laborer/settings",
      icon: Settings,
    },
  ]

  const links = role === "farmer" ? farmerLinks : role === "teamleader" ? teamLeaderLinks : laborerLinks

  return (
    <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block">
      <div className="h-full py-6 pl-2 pr-2 md:py-8">
        <nav className="flex flex-col space-y-1">
          {links.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className={cn(
                "justify-start",
                pathname === link.href
                  ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  : "hover:bg-green-50 hover:text-green-700",
              )}
              asChild
            >
              <Link href={link.href}>
                <link.icon className="mr-2 h-4 w-4" />
                {link.title}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  )
}

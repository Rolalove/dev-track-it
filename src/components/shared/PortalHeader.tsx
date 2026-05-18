"use client"

import { usePathname } from "next/navigation"
import TopCard from "./TopCard"

const routeConfig: Record<string, { title: string; subtext: string }> = {
    "/dashboard": { title: "Dashboard", subtext: "Overview of your applications" },
    "/applications": { title: "Applications", subtext: "Manage your job applications" },
    "/interviews": { title: "Interviews", subtext: "Track your upcoming interviews" },
    "/resources": { title: "Resources", subtext: "Helpful resources for your career" },
    "/settings": { title: "Settings", subtext: "Manage your account preferences" },
}

export default function PortalHeader() {
    const pathname = usePathname()
    
    // Find the config for the current route, or use a default
    const config = routeConfig[pathname] || {
        title: "Portal",
        subtext: "Welcome to Dev Track It"
    }

    return (
        <div className="mb-6">
            <TopCard title={config.title} subtext={config.subtext} />
        </div>
    )
}

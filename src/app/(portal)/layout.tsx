import { AppSidebar } from "@/components/shared/app-sidebar";
import PortalHeader from "@/components/shared/PortalHeader";
import { SidebarProvider } from "@/components/ui/sidebar"

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 p-2 bg-gray-50/50">
                <PortalHeader />
                {children}
            </main>
        </SidebarProvider>
    )
}
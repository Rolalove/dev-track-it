"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  Component,
  LayoutDashboard,
  LogOut,
  PanelLeftIcon,
  Settings,
} from "lucide-react";
import { Button } from "../ui/button";
import { Logo } from "./Logo";

export function AppSidebar() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  const NavLinks = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      title: "Applications",
      href: "/applications",
      icon: <Component />,
    },

    {
      title: "Interviews",
      href: "/interviews",
      icon: <Component />,
    },

    {
      title: "Resources",
      href: "/resources",
      icon: <LogOut />,
    },
  ];

  return (
    <>
      <Sidebar variant="floating" collapsible="icon">
        <SidebarHeader className="relative mt-4 flex justify-center px-4 pb-2">
          <Logo
            size="md"
            className="justify-center group-data-[state=collapsed]:justify-start w-full"
            textClassName="group-data-[state=collapsed]:hidden"
          />

          {/* Toggle button positioned at the "tip" in the gap between logo and links */}
          <div className="absolute -right-3 -bottom-6 z-50">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleSidebar}
              className="h-6 w-6 rounded-md shadow-md bg-background"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>
        </SidebarHeader>
        <SidebarContent>
          {/* Increased top margin (mt-10) for spacing below logo */}
          <SidebarMenu className="space-y-4 px-2 mt-6">
            {NavLinks.map((link) => (
              <SidebarMenuItem key={link.title}>
                <SidebarMenuButton asChild>
                  {/* flex and items-center fix icon alignment, gap-3 adds space between icon and text */}
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-base "
                  >
                    <span className="h-5 w-5">{link.icon}</span>
                    <span className="text-lg">{link.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          {/* Added spacing and padding to footer menu */}
          <SidebarMenu className="space-y-4 px-2 mb-4">
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a
                  href="/settings"
                  className="flex items-center gap-3 text-base "
                >
                  <span className="h-5 w-5">
                    <Settings />
                  </span>
                  <span className="text-lg">Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setShowLogoutModal(true)}
                className="flex items-center gap-3 text-base "
              >
                <span className="h-5 w-5">
                  <LogOut />
                </span>
                <span className="text-lg">Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {showLogoutModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Confirm Logout</h2>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to log out of your account?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  console.log("Logged out!");
                  setShowLogoutModal(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

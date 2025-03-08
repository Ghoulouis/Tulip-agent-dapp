import { ReactNode } from "react";
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "./header/Header";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen">
                {/* Sidebar */}
                <AppSidebar />
                {/* Main Layout */}
                <div className="flex flex-1 flex-col">
                    {/* Header */}
                    <div>
                        <Header />
                    </div>

                    {/* Main Content */}
                    <main className="flex-1 overflow-hidden">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    );
}

import { ReactNode } from "react";

export default function Layout2({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen w-screen">
            {/* Main Layout */}

            <main className="flex-1 overflow-hidden">{children}</main>
        </div>
    );
}


import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/sonner";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <ScrollArea className="h-screen">
          <main className="container py-6 px-4 max-w-7xl mx-auto">
            {children}
          </main>
        </ScrollArea>
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;

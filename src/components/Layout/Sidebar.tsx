
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Users, Building, Calendar, User, Image, LogIn, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "Faculty", href: "/faculty", icon: Users },
  { title: "Hostels", href: "/hostels", icon: Building },
  { title: "Campus", href: "/campus", icon: Image },
  { title: "Fests", href: "/fests", icon: Calendar },
  { title: "Clubs", href: "/clubs", icon: User },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMobile]);

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [location, isMobile]);

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => setOpen(!open)} 
          className="bg-card/80 backdrop-blur-sm"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Overlay for mobile */}
      {isMobile && open && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" 
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 bg-card/95 backdrop-blur-md border-r border-border/50 shadow-lg transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <Link to="/" className="flex items-center space-x-2" onClick={() => isMobile && setOpen(false)}>
              <div className="text-2xl font-bold text-gradient">SVNIT</div>
            </Link>
          </div>

          <div className="flex-1 px-3 py-2">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => isMobile && setOpen(false)}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  <item.icon className={cn("h-5 w-5 mr-3", location.pathname === item.href ? "text-primary" : "text-foreground/60")} />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t border-border/50">
            <Link to="/login" onClick={() => isMobile && setOpen(false)}>
              <Button variant="secondary" className="w-full">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

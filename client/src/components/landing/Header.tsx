import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Nosotros", href: "#about" },
  { name: "Servicios", href: "#services" },
  { name: "Experiencia", href: "#experience" },
  { name: "Divisiones", href: "#divisions" },
  { name: "Contacto", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2"
        >
          {/* Logo placeholder - using text/icon for now if image not ready */}
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            b&d
          </div>
          <span className={cn("font-display font-bold text-xl", isScrolled ? "text-primary" : "text-white")}>
            Consulting
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                isScrolled ? "text-primary" : "text-white/90"
              )}
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-white"
            onClick={(e) => scrollToSection(e as any, "#contact")}
          >
            Solicitar Consultoría
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={isScrolled ? "text-primary" : "text-white"}>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-lg font-medium text-foreground hover:text-secondary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
                onClick={(e) => scrollToSection(e as any, "#contact")}
              >
                Solicitar Consultoría
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

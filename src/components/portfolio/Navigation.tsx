import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Award, Mail } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#", icon: <Home className="w-4 h-4" /> },
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Achievements", href: "#achievements", icon: <Award className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md border-b shadow-lg" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-bold text-xl text-foreground">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                NM
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                variant="default" 
                size="sm"
                onClick={() => scrollToSection("#contact")}
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-background border-b shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full p-3 text-left text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t">
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => scrollToSection("#contact")}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
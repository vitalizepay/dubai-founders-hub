import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/model", label: "The Model" },
  { href: "/revenue", label: "Revenue" },
  { href: "/investors", label: "Investors" },
  { href: "/stories", label: "IBC Stories" },
  { href: "/membership", label: "Membership" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/40">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="font-display font-bold text-primary-foreground text-lg">IBC</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-medium text-foreground">
                Indian Business Circle
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant="nav"
                  className={location.pathname === link.href ? "text-primary bg-primary/5" : ""}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button variant="premium-outline" size="sm">
                Contact
              </Button>
            </Link>
            <Link to="/membership">
              <Button variant="premium" size="sm">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-primary/5 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border shadow-lg"
          >
            <div className="container-wide py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="premium-outline" className="w-full">
                    Contact
                  </Button>
                </Link>
                <Link to="/membership" onClick={() => setIsOpen(false)}>
                  <Button variant="premium" className="w-full">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

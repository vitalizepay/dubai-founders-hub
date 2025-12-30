import { Link } from "react-router-dom";

const footerLinks = {
  ecosystem: [
    { href: "/about", label: "About IBC" },
    { href: "/model", label: "The Model" },
    { href: "/revenue", label: "Revenue & Financials" },
    { href: "/founder", label: "Founder" },
  ],
  engage: [
    { href: "/membership", label: "Apply for Membership" },
    { href: "/stories", label: "IBC Stories" },
    { href: "/investors", label: "Investor Overview" },
    { href: "/contact", label: "Partner with Us" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-md">
                <span className="font-display font-bold text-primary-foreground text-lg">IBC</span>
              </div>
              <span className="font-display text-xl font-medium text-foreground">
                Indian Business Circle
              </span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              A curated business ecosystem for Indian founders and professionals in Dubai. 
              Building trusted, long-term business infrastructure that compounds value year over year.
            </p>
            <p className="text-muted-foreground/70 text-sm mt-6">
              Dubai, United Arab Emirates
            </p>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="font-display font-medium text-foreground mb-6">Ecosystem</h4>
            <ul className="space-y-3">
              {footerLinks.ecosystem.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engage Links */}
          <div>
            <h4 className="font-display font-medium text-foreground mb-6">Engage</h4>
            <ul className="space-y-3">
              {footerLinks.engage.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/70 text-sm">
            © {new Date().getFullYear()} Indian Business Circle. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground/70">
            <Link to="/contact" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { ArrowUp } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#workshops", label: "Workshops" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">
                Hasanthika Liyanage
              </h3>

              <p className="text-sm text-muted-foreground mt-2">
                © {currentYear} Hasanthika Liyanage. All rights reserved.
              </p>
            </div>

            {/* Footer Links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          fixed
          bottom-6
          right-6
          z-50
          w-14
          h-14
          rounded-full
          bg-primary
          text-white
          shadow-lg
          hover:scale-110
          hover:shadow-xl
          transition-all
          duration-300
          flex
          items-center
          justify-center
        "
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
};
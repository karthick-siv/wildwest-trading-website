const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Compliance", href: "#compliance" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-primary-foreground font-semibold text-lg tracking-tight">
          WildWest Trading
        </a>
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

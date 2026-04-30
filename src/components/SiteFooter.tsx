import { Link } from "@tanstack/react-router";
import logo from "@/assets/wastekotta-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-gradient-soft">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-9 w-9 object-contain" width={36} height={36} />
            <span className="text-base font-bold">
              <span className="text-foreground">waste</span>
              <span className="text-primary">kotta</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Smarter waste management for cleaner neighbourhoods and a greener tomorrow.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Reach us</h4>
          <a href="mailto:wastekottaas@gmail.com" className="mt-3 inline-block text-sm text-primary hover:underline">
            wastekottaas@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Wastekotta. All rights reserved.
      </div>
    </footer>
  );
}

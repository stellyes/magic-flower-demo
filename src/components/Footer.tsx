import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-cream mb-3">
              Magic Flower Cannabis
            </h3>
            <p className="text-sm leading-relaxed text-cream/60">
              San Francisco&apos;s newest 100% equity-owned dispensary, rooted
              in community wellness and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "Our Story" },
                { href: "/menu", label: "Menu" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-3">
              Visit Us
            </h4>
            <address className="not-italic text-sm space-y-2">
              <p>906 Post St</p>
              <p>San Francisco, CA 94109</p>
              <p className="pt-2">(415) 913-7489</p>
              <p>hello@magicflowercannabis.com</p>
            </address>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="hover:text-gold-light transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gold-light transition-colors"
                aria-label="Yelp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 7.608 7.608 0 011.96 3.166c.217.68-.29 1.35-.96 1.545h-.33zm-3.8 5.47l-1.44-4.994c-.276-.96.8-1.74 1.63-1.176l4.308 2.905c.58.39.67 1.2.206 1.596a7.608 7.608 0 01-3.166 1.96c-.68.217-1.35-.29-1.538-.29zm-5.16 1.6V14.67c0-1 1.27-1.51 1.91-.77l3.37 3.78c.39.44.3 1.12-.18 1.46a7.6 7.6 0 01-3.58 1.27c-.71.07-1.35-.47-1.52-1.25zm-2.68-6.38l4.99-1.44c.96-.28 1.74.8 1.18 1.63l-2.91 4.31c-.39.58-1.2.67-1.59.21a7.6 7.6 0 01-1.96-3.17c-.22-.68.29-1.35.29-1.54zM11 2.244v5.993c0 1-1.27 1.51-1.91.77L5.72 5.227c-.39-.44-.3-1.12.18-1.46A7.6 7.6 0 019.48 2.5c.71-.07 1.35.47 1.52.744z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-6 text-center text-xs text-cream/40">
          <p>&copy; {new Date().getFullYear()} Magic Flower Cannabis. All rights reserved.</p>
          <p className="mt-1">Must be 21+ to enter. Please consume responsibly.</p>
        </div>
      </div>
    </footer>
  );
}


import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Consulting", href: "/consulting" },
  { name: "Product Development", href: "/product-development" },
  { name: "Digital Solutions", href: "/digital-solutions" },
  { name: "Marketing & Growth", href: "/marketing-growth" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Business Consulting", href: "/consulting" },
  { name: "Product Development", href: "/product-development" },
  { name: "Digital Transformation", href: "/digital-solutions" },
  { name: "AI & Automation", href: "/digital-solutions" },
  { name: "Digital Marketing", href: "/marketing-growth" },
  { name: "SEO & Lead Generation", href: "/marketing-growth" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top CTA */}
        <div className="border-b border-gray-200 py-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                DELLVE
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#101828] sm:text-4xl">
                Ready to Build Something{" "}
                <span className="text-blue-600">Meaningful?</span>
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                Let's bring business strategy, technology and innovation
                together to create your next opportunity.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Let's Talk
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="DELLVE Home" className="inline-block">
              <span className="text-4xl font-black tracking-[-0.07em] text-[#101828]">
                DELL<span className="text-blue-600">VE</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-8 text-gray-600">
              Business Consulting | Product Innovation | Digital Growth.
              We help businesses build better products, strengthen
              operations, embrace technology and accelerate growth.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Strategy", "Technology", "Innovation", "Growth"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#101828]">
              Quick Links
            </h3>

            <ul className="mt-7 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-blue-600"
                  >
                    <span className="h-1 w-1 rounded-full bg-gray-300 transition group-hover:bg-blue-600" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#101828]">
              Our Services
            </h3>

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-blue-600"
                  >
                    <span className="h-1 w-1 rounded-full bg-gray-300 transition group-hover:bg-blue-600" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-9 text-sm font-bold uppercase tracking-wider text-[#101828]">
              Our Product
            </h3>

            <Link
              href="/products"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-blue-600"
            >
              BLUVER
              <span className="text-blue-600">↗</span>
            </Link>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#101828]">
              Get in Touch
            </h3>

            <a
              href="tel:+919390627367"
              className="mt-7 flex items-center gap-3 text-sm font-semibold text-gray-700 transition hover:text-blue-600"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              +91 93906 27367
            </a>

            {/* Hyderabad */}
            <div className="mt-8">
              <h4 className="flex items-center gap-2 text-sm font-bold text-[#101828]">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Main Office – Hyderabad
              </h4>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                12th Floor, Manjeera Trinity, Corporate E-Seva Lane,
                JNTU–Hitech City Road, Near Manjeera Mall, KPHB Phase 3,
                Kukatpally, Hyderabad – 500072, Telangana.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Manjeera+Trinity+Kukatpally+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                View Location ↗
              </a>
            </div>

            {/* Mangalagiri */}
            <div className="mt-8">
              <h4 className="flex items-center gap-2 text-sm font-bold text-[#101828]">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Branch Office – Mangalagiri
              </h4>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Plot No. 12, Autonagar Last Line, Near APIIC,
                Mangalagiri, Guntur – 522503, Andhra Pradesh.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Autonagar+Mangalagiri+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                View Location ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 border-t border-gray-200 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-gray-500">
            © 2026 DELLVE. All Rights Reserved.
          </p>

          <p className="text-xs font-medium text-gray-500">
            Business Consulting | Product Innovation | Digital Growth
          </p>

          <Link
            href="/"
            className="text-xs font-semibold text-gray-500 transition hover:text-blue-600"
          >
            Back to Top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}

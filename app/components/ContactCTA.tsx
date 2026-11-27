
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:py-28">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] bg-[#071525] px-7 py-16 text-center shadow-2xl shadow-blue-900/10 sm:px-14 sm:py-24">
          {/* Gradient Decoration */}
          <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-12 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -left-20 bottom-[-150px] h-96 w-96 rounded-full bg-blue-600/30 blur-[100px]" />

          {/* Content */}
          <div className="relative mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300 sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Let's Build What's Next
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have an Idea? Let's Turn It Into{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Something Extraordinary.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Have a business idea, a product to develop or a growth challenge
              to solve? Let's discuss how DELLVE can help turn your vision
              into a practical business opportunity.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 sm:w-auto"
              >
                Talk to Our Team
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>

              <a
                href="tel:+919390627367"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white/10 sm:w-auto"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                Call Us: +91 93906 27367
              </a>
            </div>

            {/* Bottom Trust Points */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-sm text-gray-300">
              <span>Business Consulting</span>
              <span className="hidden text-blue-400 sm:inline">•</span>
              <span>Product Development</span>
              <span className="hidden text-blue-400 sm:inline">•</span>
              <span>Digital Transformation</span>
              <span className="hidden text-blue-400 sm:inline">•</span>
              <span>Marketing & Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
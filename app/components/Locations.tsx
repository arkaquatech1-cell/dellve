
import Link from "next/link";

const serviceAreas = [
  {
    name: "Hyderabad",
    state: "Telangana",
    description:
      "Business consulting, product development, digital transformation and marketing services for Hyderabad businesses.",
    keyword: "Business Consulting Company in Hyderabad",
    href: "/locations/hyderabad",
  },
  {
    name: "Amaravati",
    state: "Andhra Pradesh",
    description:
      "Business strategy, technology solutions and digital growth support for startups and growing businesses.",
    keyword: "Business Consulting in Amaravati",
    href: "/locations/amaravati",
  },
  {
    name: "Vijayawada",
    state: "Andhra Pradesh",
    description:
      "Product development, digital solutions and marketing support for businesses in Vijayawada.",
    keyword: "Digital Solutions in Vijayawada",
    href: "/locations/vijayawada",
  },
  {
    name: "Guntur",
    state: "Andhra Pradesh",
    description:
      "Business planning, product innovation and digital growth solutions for Guntur businesses.",
    keyword: "Business Growth Services in Guntur",
    href: "/locations/guntur",
  },
  {
    name: "Mangalagiri",
    state: "Andhra Pradesh",
    description:
      "Connect with our Andhra Pradesh branch for business consulting and technology-related enquiries.",
    keyword: "Business Consulting in Mangalagiri",
    href: "/locations/mangalagiri",
  },
  {
    name: "Other Locations",
    state: "Telangana & Andhra Pradesh",
    description:
      "Discuss your project requirements with our team for support across other cities and business locations.",
    keyword: "Digital Business Solutions",
    href: "/contact",
  },
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="bg-[#F5F8FC] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#1769FF]">
            Locations & Regional Presence
          </p>

          <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-1.5px] text-[#101828] sm:text-5xl lg:text-[58px]">
            Business Solutions Across
            <span className="text-[#1769FF]"> Telangana & Andhra Pradesh.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#667085]">
            DELLVE connects business consulting, product development,
            digital transformation and marketing capabilities with
            businesses across Telangana and Andhra Pradesh. Our main
            office is in Hyderabad, Telangana, and our branch office is
            in Mangalagiri, Andhra Pradesh.
          </p>
        </div>

        {/* Office cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#1769FF]">
                Main Office
              </span>
              <span className="text-2xl text-[#1769FF]">01</span>
            </div>

            <h3 className="mt-7 text-2xl font-semibold text-[#101828]">
              Hyderabad, Telangana
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#667085]">
              12th Floor, Manjeera Trinity, Corporate E-Seva Lane,
              JNTU–Hitech City Road, Near Manjeera Mall, KPHB Phase 3,
              Kukatpally, Hyderabad – 500072, Telangana.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Manjeera+Trinity+KPHB+Hyderabad+Telangana"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1769FF] hover:text-[#0755E8]"
            >
              View Main Office <span>↗</span>
            </a>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-gray-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#475467]">
                Branch Office
              </span>
              <span className="text-2xl text-[#98A2B3]">02</span>
            </div>

            <h3 className="mt-7 text-2xl font-semibold text-[#101828]">
              Mangalagiri, Andhra Pradesh
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#667085]">
              Plot No. 12, Autonagar Last Line, Near APIIC,
              Mangalagiri, Guntur – 522503, Andhra Pradesh.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Autonagar+Mangalagiri+Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1769FF] hover:text-[#0755E8]"
            >
              View Branch Office <span>↗</span>
            </a>
          </article>
        </div>

        {/* Service locations */}
        <div className="mt-20">
          <div className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#1769FF]">
              Areas We Serve
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#101828] sm:text-4xl">
              Connecting With Businesses Across Key Cities.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#667085]">
              Explore the locations where businesses can connect with
              DELLVE for consulting, product innovation and digital growth
              requirements. These are service areas, not additional
              physical office locations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <article
                key={area.name}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#1769FF]">
                  {area.state}
                </p>

                <h4 className="mt-3 text-xl font-semibold text-[#101828] transition-colors group-hover:text-[#1769FF]">
                  {area.name}
                </h4>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#667085]">
                  {area.description}
                </p>

                <p className="mt-4 text-xs font-medium text-[#98A2B3]">
                  {area.keyword}
                </p>

                <Link
                  href={area.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1769FF]"
                >
                  Explore Location <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 rounded-2xl bg-[#071B35] px-7 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-blue-300">
              Let's Connect
            </p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Looking for a business growth partner?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300">
              Contact DELLVE to discuss your business consulting,
              product development or digital transformation requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-7 inline-flex shrink-0 items-center gap-3 rounded-md bg-[#1769FF] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0755E8] lg:mt-0"
          >
            Contact Our Team <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

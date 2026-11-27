
import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    number: "01",
    title: "Business-First Approach",
    description:
      "We begin by understanding your business goals, challenges, customers and opportunities before recommending solutions.",
    keyword: "Business strategy and planning",
  },
  {
    number: "02",
    title: "Strategy Combined With Execution",
    description:
      "We connect strategic thinking with practical implementation, helping move ideas from planning to real-world execution.",
    keyword: "Strategy and execution",
  },
  {
    number: "03",
    title: "Integrated Product & Marketing Capabilities",
    description:
      "Bring product development, digital solutions and marketing capabilities together to support your business journey.",
    keyword: "Product development and marketing",
  },
  {
    number: "04",
    title: "Technology-Driven Solutions",
    description:
      "Explore modern technology, digital platforms and automation to improve business processes and customer experiences.",
    keyword: "Digital transformation and technology",
  },
  {
    number: "05",
    title: "Flexible Engagement Models",
    description:
      "Discuss an engagement approach that aligns with your project requirements, business priorities and objectives.",
    keyword: "Flexible business solutions",
  },
  {
    number: "06",
    title: "Focus on Measurable Outcomes",
    description:
      "Keep business objectives at the centre of the work, with clear priorities and outcomes that can be evaluated.",
    keyword: "Business growth and performance",
  },
];

const cities = [
  "Hyderabad",
  "Telangana",
  "Amaravati",
  "Vijayawada",
  "Guntur",
  "Mangalagiri",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-dellve"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#1769FF]">
              Why Choose DELLVE
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-[-1.5px] text-[#101828] sm:text-5xl lg:text-[58px]">
              More Than Ideas.
              <span className="text-[#1769FF]">
                {" "}Focused on Execution.
              </span>
            </h2>
          </div>

          <p className="text-base leading-8 text-[#667085]">
            We bring business consulting, product innovation, technology
            and marketing capabilities together to help organisations
            address challenges and pursue meaningful growth.
          </p>
        </div>

        {/* Image + Reasons */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left Image */}
          <div className="relative">
            <div className="group relative h-[420px] overflow-hidden rounded-2xl bg-gray-100 sm:h-[560px] lg:sticky lg:top-24">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="Business professionals collaborating on business strategy and growth"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071B35]/90 via-[#071B35]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                <span className="text-xs font-bold uppercase tracking-[2px] text-blue-300">
                  The DELLVE Difference
                </span>

                <h3 className="mt-4 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
                  Strategy, Technology & Execution. Together.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-200">
                  One connected approach to business consulting,
                  product innovation and sustainable growth.
                </p>

                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:gap-5"
                >
                  Discover DELLVE <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Reasons */}
          <div className="grid gap-x-8 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="group border-t border-gray-200 py-8 transition-colors duration-300 hover:border-[#1769FF]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[2px] text-[#1769FF]">
                    {reason.number}
                  </span>

                  <span className="text-2xl text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1769FF]">
                    ↗
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#101828] transition-colors group-hover:text-[#1769FF]">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#667085]">
                  {reason.description}
                </p>

                <p className="mt-5 text-[10px] font-bold uppercase tracking-[1.5px] text-[#98A2B3]">
                  {reason.keyword}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Regional Presence */}
        <div className="relative mt-20 overflow-hidden rounded-2xl bg-[#071B35] p-8 text-white sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-blue-300">
                Regional Business Support
              </p>

              <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Local Understanding.
                <span className="text-[#62A0FF]">
                  {" "}Broader Business Opportunities.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300">
                With our main office in Hyderabad and branch office in
                Mangalagiri, DELLVE is positioned to connect with
                businesses across Telangana and Andhra Pradesh.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <div
                  key={city}
                  className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-4 text-sm font-medium text-gray-200 transition hover:border-blue-400/50 hover:bg-white/10"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#101828]">
              Let's Work on Your Next Opportunity.
            </h3>

            <p className="mt-2 text-sm text-[#667085]">
              Tell us about your business goals and project requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-3 rounded-md bg-[#1769FF] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0755E8]"
          >
            Talk to Our Team <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

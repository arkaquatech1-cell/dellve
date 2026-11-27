
import Link from "next/link";

const audiences = [
  {
    number: "01",
    title: "Startups & Founders",
    description:
      "Turn your business idea into a practical plan. We support founders with business strategy, product validation, MVP development and digital solutions.",
    services: ["Business planning", "Product validation", "MVP development"],
  },
  {
    number: "02",
    title: "Small & Medium Businesses",
    description:
      "Improve business operations, strengthen your digital presence and discover new opportunities for sustainable business growth.",
    services: ["Process improvement", "Digital transformation", "Marketing strategy"],
  },
  {
    number: "03",
    title: "Growing Enterprises",
    description:
      "Build scalable business processes, adopt relevant technology and develop strategies to support your next stage of growth.",
    services: ["Business strategy", "Technology consulting", "Growth planning"],
  },
  {
    number: "04",
    title: "Product Companies",
    description:
      "Develop better products through research, product strategy, design, software development and structured product launches.",
    services: ["Product strategy", "Software development", "Product launch"],
  },
  {
    number: "05",
    title: "Service Businesses",
    description:
      "Strengthen your brand, improve customer acquisition and use digital tools to deliver better service experiences.",
    services: ["Brand development", "Lead generation", "Digital marketing"],
  },
  {
    number: "06",
    title: "Digital Transformation Teams",
    description:
      "Explore technology-led improvements through AI automation, digital platforms, business intelligence and connected systems.",
    services: ["AI automation", "Digital platforms", "Business analytics"],
  },
];

export default function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#1769FF]">
              Who We Work With
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-[-1.5px] text-[#101828] sm:text-5xl lg:text-[58px]">
              Different Businesses.
              <span className="text-[#1769FF]"> One Growth Mindset.</span>
            </h2>
          </div>

          <p className="text-base leading-8 text-[#667085]">
            Every business has different goals and challenges. DELLVE
            works with startups, SMEs, enterprises and product teams to
            bring business strategy, technology and execution together.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_55px_rgba(16,24,40,0.07)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[2px] text-[#1769FF]">
                  {item.number}
                </span>
                <span className="h-9 w-9 rounded-full border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:bg-[#1769FF]" />
              </div>

              <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#101828] transition-colors group-hover:text-[#1769FF]">
                {item.title}
              </h3>

              <p className="mt-4 min-h-[105px] text-sm leading-7 text-[#667085]">
                {item.description}
              </p>

              <div className="my-6 h-px bg-gray-100" />

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-[#98A2B3]">
                How We Help
              </p>

              <ul className="space-y-3">
                {item.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 text-sm text-[#475467]"
                  >
                    <span className="text-[#1769FF]">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Location SEO Content */}
        <div className="mt-14 rounded-2xl bg-[#F5F8FC] p-7 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#1769FF]">
                Regional Business Support
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-[#101828] sm:text-3xl">
                Supporting Startups, SMEs and Enterprises Across Telangana
                and Andhra Pradesh
              </h3>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#667085]">
                DELLVE works with businesses looking for business
                consulting, product development, digital transformation
                and marketing support. Our regional focus includes
                Hyderabad, Kukatpally, Madhapur and HITEC City in
                Telangana, along with Amaravati, Vijayawada, Guntur and
                Mangalagiri in Andhra Pradesh.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-md bg-[#1769FF] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0755E8]"
            >
              Discuss Your Business <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

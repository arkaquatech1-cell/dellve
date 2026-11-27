
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    category: "BUSINESS STRATEGY",
    title: "Business & Management Consulting",
    description:
      "Build a stronger, more efficient business with practical strategies, operational improvements and growth-focused consulting.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
    alt: "Business professionals collaborating on business strategy",
    features: [
      "Business strategy and planning",
      "Business process improvement",
      "Market research and feasibility studies",
      "Business model development",
      "Operational consulting",
      "Growth and expansion strategies",
    ],
    href: "/consulting",
    tag: "Strategy & Operations",
  },
  {
    number: "02",
    category: "PRODUCT INNOVATION",
    title: "Product Strategy & Development",
    description:
      "Transform ideas into market-ready products through structured innovation, research, design and product development.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    alt: "Digital product development and analytics workspace",
    features: [
      "Product ideation and validation",
      "Market research and product strategy",
      "Product design and development",
      "Software and application development",
      "MVP development",
      "Product testing and launch",
      "Product lifecycle management",
    ],
    href: "/product-development",
    tag: "Ideas to Products",
  },
  {
    number: "03",
    category: "TECHNOLOGY & AUTOMATION",
    title: "Digital Transformation & Technology",
    description:
      "Use modern technology to simplify business operations, improve productivity and create competitive advantages.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern technology hardware and digital innovation",
    features: [
      "Digital transformation consulting",
      "AI and business automation",
      "Web and application development",
      "Cloud and IT solutions",
      "Business intelligence and analytics",
      "ERP and CRM solutions",
      "Technology consulting",
    ],
    href: "/digital-solutions",
    tag: "Technology Driven",
  },
  {
    number: "04",
    category: "MARKETING & EXPANSION",
    title: "Marketing & Business Growth",
    description:
      "Build a strong brand, reach the right customers and create sustainable business and revenue opportunities.",
    image:
      "https://images.unsplash.com/photo- digital-marketing?auto=format&fit=crop&w=1000&q=85",
    alt: "Marketing and business growth planning",
    features: [
      "Brand strategy and identity",
      "Digital marketing",
      "Search engine optimization",
      "Social media management",
      "Performance marketing",
      "Lead generation",
      "Campaign management",
      "Customer acquisition",
    ],
    href: "/marketing-growth",
    tag: "Reach & Grow",
  },
];

const locations = [
  "Hyderabad",
  "Telangana",
  "Amaravati",
  "Vijayawada",
  "Guntur",
  "Mangalagiri",
  "Andhra Pradesh",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8FAFC] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* Section Heading */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#1769FF]">
              What We Do
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-[-1.5px] text-[#101828] sm:text-5xl lg:text-[58px]">
              We Bring Business,
              <span className="text-[#1769FF]"> Technology </span>
              and Innovation Together.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#667085]">
              DELLVE partners with startups, entrepreneurs, SMEs and
              established enterprises to solve business challenges, develop
              products and unlock new growth opportunities.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#667085]">
              Supporting business innovation and digital growth across
              Hyderabad, Telangana and Andhra Pradesh.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_65px_rgba(16,24,40,0.08)]"
            >
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100 sm:h-64">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B35]/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-white">
                    {service.number}
                  </span>

                  <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="relative flex flex-1 flex-col p-7 sm:p-9">
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#1769FF] transition-all duration-500 group-hover:w-full" />

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[2px] text-[#98A2B3]">
                  {service.category}
                </p>

                <h3 className="mt-3 max-w-md text-2xl font-semibold leading-snug tracking-tight text-[#101828] transition-colors group-hover:text-[#1769FF] sm:text-[28px]">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-[72px] text-sm leading-7 text-[#667085]">
                  {service.description}
                </p>

                <div className="my-7 h-px bg-gray-100" />

                <ul className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13px] leading-6 text-[#475467]"
                    >
                      <span className="mt-1 text-[#1769FF]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-9">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-3 text-sm font-bold text-[#1769FF] transition-all duration-300 group-hover:gap-5"
                  >
                    Explore Service
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Location SEO Content */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-7 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#1769FF]">
            Our Service Locations
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#101828]">
            Business Consulting & Digital Solutions Across South India
          </h3>

          <p className="mt-4 max-w-5xl text-sm leading-7 text-[#667085]">
            DELLVE supports businesses seeking consulting, product
            development, digital transformation and marketing services in
            Hyderabad, Kukatpally, Madhapur, HITEC City and other parts of
            Telangana. We also serve businesses across Andhra Pradesh,
            including Amaravati, Vijayawada, Guntur and Mangalagiri. Contact
            our team to discuss your business requirements and project scope.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {locations.map((location) => (
              <span
                key={location}
                className="rounded-full border border-gray-200 bg-[#F8FAFC] px-4 py-2 text-xs font-medium text-[#475467]"
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

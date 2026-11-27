
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Product & Platform Development",
    description:
      "Building digital products and integrated platforms designed around real customer and business requirements.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
    alt: "Digital product platform and analytics dashboard",
  },
  {
    number: "02",
    title: "Digital Service Delivery",
    description:
      "Connecting digital services through convenient, accessible and technology-enabled experiences.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=85",
    alt: "Team collaborating on digital services",
  },
  {
    number: "03",
    title: "Customer-Focused Solutions",
    description:
      "Creating solutions that put customer needs, usability and service experience at the centre.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85",
    alt: "Professionals discussing customer-focused solutions",
  },
  {
    number: "04",
    title: "Technology-Enabled Operations",
    description:
      "Using technology to support business operations, service delivery and connected workflows.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85",
    alt: "Modern technology components and digital operations",
  },
  {
    number: "05",
    title: "Scalable Digital Experiences",
    description:
      "Developing adaptable digital experiences that can evolve with changing business and customer needs.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
    alt: "Business analytics and scalable digital experiences",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#F5F8FC] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#1769FF]">
            Our Products & Platforms
          </p>

          <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-1.5px] text-[#101828] sm:text-5xl lg:text-[58px]">
            Innovation Beyond
            <span className="text-[#1769FF]"> Consulting.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#667085]">
            We don't just advise businesses. We also develop and operate
            our own products and digital platforms, bringing technology,
            connected services and customer-focused experiences together.
          </p>
        </div>

        {/* BLUVER Feature */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-[#071B35] text-white">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative grid gap-12 p-7 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-16">
            {/* Brand Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#27D3D8]" />
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-blue-200">
                  Introducing Our Product Initiative
                </span>
              </div>

              <h3 className="mt-8 text-5xl font-extrabold tracking-[-3px] sm:text-7xl">
                BLU<span className="text-[#27D3D8]">VER</span>
              </h3>

              <p className="mt-5 max-w-lg text-xl font-medium leading-relaxed text-white sm:text-2xl">
                Smart Products. Connected Services. Better Experiences.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-8 text-gray-300">
                BLUVER is DELLVE's product and services initiative, focused
                on delivering technology-enabled solutions and convenient
                services through an integrated platform. It represents our
                commitment to product innovation and connected digital
                experiences.
              </p>

              <Link
                href="/products/bluver"
                className="group mt-9 inline-flex items-center gap-3 rounded-md bg-[#1769FF] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0755E8]"
              >
                Explore BLUVER
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* BLUVER Image and Ecosystem */}
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-3xl" />

              <div className="group relative h-[280px] overflow-hidden rounded-2xl border border-white/15 sm:h-[350px]">
                <Image
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85"
                  alt="Technology and digital product innovation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B35] via-[#071B35]/20 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-3xl font-extrabold tracking-[-2px]">
                    BLU<span className="text-[#27D3D8]">VER</span>
                  </p>
                  <p className="mt-1 text-xs text-gray-200">
                    Connected Products & Services
                  </p>
                </div>
              </div>

              {/* Ecosystem Features */}
              <div className="relative mt-4 grid grid-cols-2 gap-3">
                {[
                  "Digital Products",
                  "Connected Services",
                  "Customer Experience",
                  "Scalable Platforms",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"
                  >
                    <span className="text-xs font-bold text-[#27D3D8]">
                      0{index + 1}
                    </span>
                    <p className="mt-2 text-xs font-medium text-gray-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-20">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#1769FF]">
                What We Build
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#101828] sm:text-4xl">
                Connected by Innovation.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#667085]">
              Our product initiative focuses on useful technology,
              convenient services and scalable digital experiences.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                {/* Capability Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B35]/50 to-transparent" />

                  <span className="absolute bottom-4 left-5 text-sm font-bold tracking-widest text-white">
                    {item.number}
                  </span>
                </div>

                {/* Capability Content */}
                <div className="p-7">
                  <h4 className="text-lg font-semibold text-[#101828] transition-colors group-hover:text-[#1769FF]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Location Relevance */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm leading-7 text-[#667085]">
            DELLVE's product development and digital platform capabilities
            support businesses and entrepreneurs across Hyderabad and
            Telangana, as well as Amaravati, Vijayawada, Guntur and
            Mangalagiri in Andhra Pradesh.
          </p>
        </div>
      </div>
    </section>
  );
}

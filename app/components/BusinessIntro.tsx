
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Business Strategy & Consulting",
    description:
      "Build a stronger business with strategic planning, market research, business model development and operational improvement.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85",
    alt: "Business professionals working on strategy and planning",
  },
  {
    number: "02",
    title: "Product Strategy & Innovation",
    description:
      "Transform business ideas into market-ready products through product research, planning, UI/UX design, development and validation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
    alt: "Digital product strategy and analytics dashboard",
  },
  {
    number: "03",
    title: "Digital Transformation & Technology",
    description:
      "Modernize business operations with digital solutions, web and mobile applications, AI automation and technology consulting.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85",
    alt: "Technology hardware representing digital transformation",
  },
  {
    number: "04",
    title: "Marketing & Business Growth",
    description:
      "Build brand visibility, attract potential customers and accelerate business growth through digital marketing, SEO and lead generation.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
    alt: "Business analytics and marketing performance dashboard",
  },
];

export default function BusinessIntro() {
  return (
    <section
      id="about-dellve"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-100/50 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              About DELLVE
            </span>

            <h2 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-[#101828] sm:text-5xl">
              Business Strategy,{" "}
              <span className="text-blue-600">Technology</span> & Innovation
              for Sustainable Growth.
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
              DELLVE is a business consulting, product innovation and digital
              growth company helping startups, entrepreneurs, SMEs and
              established enterprises turn opportunities into business
              outcomes.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We bring business strategy, product development, digital
              transformation and marketing execution together under one
              approach. From planning and innovation to technology
              implementation and customer acquisition, we help businesses
              build, improve and grow.
            </p>

            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Discover DELLVE
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>

          {/* Right Image Capability Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                {/* Card Image */}
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B35]/50 to-transparent" />

                  <span className="absolute bottom-3 left-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-xs font-bold text-blue-600 shadow-sm">
                    {item.number}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-blue-600">
                      DELLVE Capability
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-xl text-gray-300 transition group-hover:text-blue-600"
                    >
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-snug text-[#101828] transition-colors group-hover:text-blue-600">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 border-t border-gray-200 pt-9">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xl font-semibold leading-8 text-[#101828] sm:text-2xl">
              One partner. Connected capabilities.{" "}
              <span className="text-blue-600">
                A smarter path to business growth.
              </span>
            </p>

            <span className="shrink-0 text-sm font-bold uppercase tracking-widest text-gray-400">
              Strategy • Innovation • Growth
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

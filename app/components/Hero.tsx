
import Image from "next/image";
import Link from "next/link";

const imageBusiness =
  "https://images.unsplash.com/photo-1552664730-d307ca884978";

const imageTechnology =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f";

const capabilities = [
  {
    number: "01",
    title: "Business Consulting",
    description: "Strategy, planning and business transformation.",
  },
  {
    number: "02",
    title: "Product Development",
    description: "From product ideas to market-ready solutions.",
  },
  {
    number: "03",
    title: "Digital Transformation",
    description: "Technology, AI and business automation.",
  },
  {
    number: "04",
    title: "Marketing & Growth",
    description: "Branding, SEO and customer acquisition.",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-15%] h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[400px] w-[400px] rounded-full bg-sky-100/50 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10182808_1px,transparent_1px),linear-gradient(to_bottom,#10182808_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      </div>

      <div className="mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-24">

        {/* LEFT CONTENT */}
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#1769FF]" />
            <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#1769FF] sm:text-xs sm:tracking-[2px]">
              Business Consulting · Product Innovation · Digital Growth
            </span>
          </div>

          <h1 className="text-[40px] font-bold leading-[1.13] tracking-[-1.8px] text-[#101828] sm:text-5xl md:text-6xl lg:text-[64px]">
            Turn Ideas Into Products.
            <span className="mt-2 block text-[#1769FF]">
              Turn Products Into Businesses.
            </span>
            <span className="mt-2 block">
              Turn Businesses Into Growth.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#667085] sm:text-lg">
            DELLVE is a business consulting, product development and digital
            transformation company helping startups, SMEs and growing
            enterprises turn business opportunities into practical solutions.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#667085] sm:text-base">
            Our services include business strategy and management consulting,
            product design and software development, AI automation, digital
            solutions, SEO and digital marketing. We connect business thinking
            with technology and execution to support sustainable business
            growth.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500">
            Based in Hyderabad, Telangana, with a branch office in Mangalagiri,
            Andhra Pradesh, DELLVE supports business requirements across
            Hyderabad, Amaravati, Vijayawada, Guntur and other locations in
            Telangana and Andhra Pradesh.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#1769FF] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0755E8]"
            >
              Discuss Your Project
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/digital-solutions"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-7 py-4 text-sm font-bold text-[#101828] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF] hover:text-[#1769FF]"
            >
              Explore Our Solutions
              <span>↗</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-gray-200 pt-7 sm:gap-6">
            <div>
              <p className="text-sm font-bold text-[#101828]">
                Strategy First
              </p>
              <p className="mt-2 text-xs leading-5 text-[#98A2B3]">
                Business-focused
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-[#101828]">
                Technology Led
              </p>
              <p className="mt-2 text-xs leading-5 text-[#98A2B3]">
                Innovation driven
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-[#101828]">
                Growth Focused
              </p>
              <p className="mt-2 text-xs leading-5 text-[#98A2B3]">
                Outcome oriented
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative mx-auto w-full max-w-[580px]">
          <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-blue-100 via-white to-cyan-100 blur-2xl" />

          <div className="relative">
            {/* Main Business Image */}
            <div className="relative h-[390px] overflow-hidden rounded-[26px] border border-gray-200 shadow-2xl shadow-blue-900/10 sm:h-[480px]">
              <Image
                src={`${imageBusiness}?auto=format&fit=crop&w=1200&q=85`}
                alt="Business professionals collaborating on strategy and business growth"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                <span className="text-xs font-bold uppercase tracking-[2px] text-blue-300">
                  The DELLVE Vision
                </span>

                <h2 className="mt-3 max-w-md text-2xl font-bold leading-tight sm:text-3xl">
                  Connecting Ideas, People and Technology.
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-200">
                  Bringing business strategy and innovation together to create
                  meaningful opportunities.
                </p>
              </div>
            </div>

            {/* Floating Technology Image */}
            <div className="absolute -bottom-12 -left-3 w-[54%] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl sm:-left-10">
              <div className="relative h-[145px] sm:h-[185px]">
                <Image
                  src={`${imageTechnology}?auto=format&fit=crop&w=800&q=85`}
                  alt="Digital business analytics and technology dashboard"
                  fill
                  sizes="(max-width: 768px) 55vw, 280px"
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Digital Innovation
                </p>
                <p className="mt-1 text-sm font-bold text-[#101828]">
                  Smarter Business Solutions
                </p>
              </div>
            </div>

            {/* Floating Location Card */}
            <div className="absolute -right-2 top-8 hidden rounded-xl border border-gray-100 bg-white p-4 shadow-xl sm:block sm:-right-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-lg text-blue-600">
                  ✦
                </div>

                <div>
                  <p className="text-xs font-bold text-[#101828]">
                    DELLVE
                  </p>
                  <p className="mt-1 text-[10px] text-gray-500">
                    Hyderabad · Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Capability Cards */}
          <div className="relative mt-20 grid grid-cols-2 gap-3 sm:mt-24">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-5"
              >
                <span className="text-xs font-bold text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-2 text-sm font-bold text-[#101828]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

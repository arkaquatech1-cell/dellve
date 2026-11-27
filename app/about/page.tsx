
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About DELLVE | Business Consulting, Technology & Innovation",
  description:
    "Learn about DELLVE, a business consulting and technology company helping businesses with strategy, product development, digital transformation and marketing growth in Hyderabad and Andhra Pradesh.",
  keywords: [
    "business consulting company in Hyderabad",
    "business consulting services",
    "product development company",
    "digital transformation company",
    "business growth consulting",
    "technology consulting services",
    "digital solutions company Hyderabad",
    "business consulting Telangana",
    "business consulting Andhra Pradesh",
  ],
  openGraph: {
    title: "About DELLVE | Business Consulting & Digital Growth",
    description:
      "We combine business strategy, product innovation and technology to help businesses build, transform and grow.",
    type: "website",
    locale: "en_IN",
  },
};

const values = [
  {
    number: "01",
    title: "Business-First Thinking",
    description:
      "We begin by understanding your business, customers and objectives before recommending strategies or technology.",
  },
  {
    number: "02",
    title: "Innovation & Creativity",
    description:
      "We explore new ideas, practical solutions and better ways to develop products and improve business performance.",
  },
  {
    number: "03",
    title: "Strategy Meets Execution",
    description:
      "We connect planning with implementation, helping businesses move from ideas to practical outcomes.",
  },
  {
    number: "04",
    title: "Long-Term Growth",
    description:
      "We focus on sustainable improvements, scalable solutions and opportunities that support long-term business growth.",
  },
];

const capabilities = [
  "Business & Management Consulting",
  "Product Strategy & Development",
  "Digital Transformation & Technology",
  "AI & Business Automation",
  "Digital Marketing & SEO",
  "Branding & Business Growth",
];

const locations = [
  {
    type: "Main Office",
    city: "Hyderabad, Telangana",
    address:
      "12th Floor, Manjeera Trinity, Corporate E-Seva Lane, JNTU–Hitech City Road, Near Manjeera Mall, KPHB Phase 3, Kukatpally, Hyderabad – 500072, Telangana.",
  },
  {
    type: "Branch Office",
    city: "Mangalagiri, Andhra Pradesh",
    address:
      "Plot No. 12, Autonagar Last Line, Near APIIC, Mangalagiri, Guntur – 522503, Andhra Pradesh.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#101828]">

      {/* HERO SECTION */}
      <section className="relative isolate px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(23,105,255,0.10),transparent_32%),linear-gradient(to_bottom,#ffffff,#f8faff)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              About DELLVE
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Building Better Businesses Through{" "}
              <span className="text-[#1769FF]">
                Strategy & Innovation.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
              DELLVE is a business consulting, product innovation and digital
              growth company helping ambitious businesses turn ideas into
              practical solutions. We bring together business strategy,
              technology, product development and marketing to help
              organizations move forward with confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#1769FF] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Let's Work Together ↗
              </Link>

              <Link
                href="/consulting"
                className="rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-bold text-[#101828] transition duration-300 hover:border-blue-500 hover:text-[#1769FF]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl" />

            <div className="relative h-[390px] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200 sm:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="Business professionals collaborating on strategy and business growth"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/70 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Our Purpose
                </p>
                <p className="mt-2 text-2xl font-bold sm:text-3xl">
                  Ideas. Innovation. Impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative mt-10 h-64 overflow-hidden rounded-2xl sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85"
                alt="Business planning and consulting strategy"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85"
                alt="Digital business analytics and product development"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-blue-100 bg-white px-6 py-4 text-center shadow-xl">
              <p className="text-sm font-extrabold text-[#1769FF]">
                Strategy + Execution
              </p>
              <p className="mt-1 text-xs text-gray-500">
                One connected approach
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Who We Are
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              More Than Consulting.{" "}
              <span className="text-[#1769FF]">
                A Partner in Progress.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-[#667085]">
              Every business has opportunities to improve, innovate and grow.
              But turning those opportunities into results requires the right
              direction, capabilities and execution.
            </p>

            <p className="mt-5 leading-8 text-[#667085]">
              DELLVE brings business consulting, product development, digital
              transformation and marketing capabilities together. Our approach
              connects business objectives with practical solutions, helping
              startups, small and medium-sized businesses and growing
              organizations navigate their next stage.
            </p>

            <p className="mt-5 leading-8 text-[#667085]">
              From understanding a business challenge to planning a product,
              adopting technology or building a stronger digital presence, we
              focus on solutions that support real business needs.
            </p>

            <Link
              href="/consulting"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#1769FF] transition-all hover:gap-4"
            >
              Discover What We Do →
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-[#F5F8FF] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Our Direction
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What Drives DELLVE
            </h2>

            <p className="mt-5 leading-7 text-[#667085]">
              Our focus is to help businesses make better decisions, build
              stronger capabilities and create opportunities for growth.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            <div className="group rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-[#1769FF]">
                ◎
              </div>

              <h3 className="mt-7 text-2xl font-extrabold">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-[#667085]">
                To empower businesses with strategic guidance, innovative
                products and practical technology solutions that improve
                operations, strengthen market presence and support sustainable
                growth.
              </p>
            </div>

            <div className="group rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-[#1769FF]">
                ✦
              </div>

              <h3 className="mt-7 text-2xl font-extrabold">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-[#667085]">
                To become a trusted partner for businesses seeking to innovate,
                adapt to changing markets and build a stronger future through
                business strategy, technology and digital capabilities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
                What We Bring Together
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Connected Capabilities.{" "}
                <span className="text-[#1769FF]">
                  Stronger Outcomes.
                </span>
              </h2>
            </div>

            <p className="leading-8 text-[#667085]">
              We combine complementary business and technology capabilities
              to help organizations address challenges across their growth
              journey.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-[#1769FF] transition group-hover:bg-[#1769FF] group-hover:text-white">
                  0{index + 1}
                </span>

                <h3 className="font-bold leading-6 text-[#101828]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-[#071B32] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              What We Believe
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              The Principles Behind Our Work.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Our values shape how we approach business challenges, work with
              clients and develop solutions.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.number}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white/[0.09]"
              >
                <span className="text-sm font-extrabold text-blue-300">
                  {value.number}
                </span>

                <h3 className="mt-7 text-xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLUVER */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#F2F6FF] lg:grid-cols-2">

          <div className="p-8 sm:p-12 lg:p-16">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Our Product Initiative
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight">
              BLUVER<span className="text-[#1769FF]">.</span>
            </h2>

            <h3 className="mt-3 text-xl font-bold">
              Smart Products. Connected Services. Better Experiences.
            </h3>

            <p className="mt-6 leading-8 text-[#667085]">
              BLUVER is a product and services initiative focused on
              technology-enabled solutions and convenient services through an
              integrated platform approach. It reflects our interest in
              building connected digital experiences around customer needs.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#1769FF] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Explore BLUVER ↗
            </Link>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85"
              alt="Technology team working on connected digital products"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Where We Are
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Our Office Locations
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#667085]">
              DELLVE operates from Hyderabad, Telangana, with a branch office
              in Mangalagiri, Andhra Pradesh.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <div
                key={location.type}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1769FF]">
                  {location.type}
                </span>

                <h3 className="mt-6 text-2xl font-extrabold">
                  {location.city}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#667085]">
                  {location.address}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#667085]">
              Contact our team
            </p>

            <a
              href="tel:+919390627367"
              className="mt-2 inline-block text-xl font-extrabold text-[#1769FF] hover:underline"
            >
              +91 93906 27367
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#1769FF] px-5 py-20 text-center text-white sm:px-8 lg:py-24">
        <div className="absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 -z-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
            Your Next Chapter Starts Here
          </p>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Build What's Next.
          </h2>

          <p className="mt-6 leading-8 text-blue-50">
            Have a business challenge, product idea or growth opportunity?
            Let's explore how DELLVE can help you move forward.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-xl bg-white px-8 py-4 text-sm font-extrabold text-[#1769FF] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Start a Conversation ↗
          </Link>
        </div>
      </section>

    </main>
  );
}

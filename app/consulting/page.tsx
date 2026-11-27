
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Consulting Services in Hyderabad | DELLVE",
  description:
    "DELLVE provides business consulting services in Hyderabad, including business strategy, management consulting, process improvement, market research and growth planning for businesses.",
  keywords: [
    "business consulting services in Hyderabad",
    "business consulting company Hyderabad",
    "management consulting services",
    "business strategy consulting",
    "business growth consulting",
    "business planning services",
    "process improvement consulting",
    "market research and feasibility study",
    "business consulting Telangana",
    "business consulting Andhra Pradesh",
    "business consultant Mangalagiri",
    "business consultant Vijayawada",
  ],
  openGraph: {
    title: "Business Consulting Services in Hyderabad | DELLVE",
    description:
      "Build a stronger business with strategic planning, management consulting and practical growth solutions from DELLVE.",
    type: "website",
    locale: "en_IN",
  },
};

const services = [
  {
    number: "01",
    title: "Business Strategy & Planning",
    description:
      "Create a clear business direction with structured planning, strategic priorities and actionable business objectives.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
    alt: "Business strategy planning and consulting meeting",
  },
  {
    number: "02",
    title: "Business Model Development",
    description:
      "Evaluate business opportunities, define value propositions and develop business models aligned with your market and goals.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    alt: "Business model analysis and financial planning",
  },
  {
    number: "03",
    title: "Market Research & Feasibility",
    description:
      "Understand target customers, market conditions, competitors and opportunities before making important business decisions.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
    alt: "Team conducting market research and business discussion",
  },
  {
    number: "04",
    title: "Process & Operations Improvement",
    description:
      "Identify operational challenges, improve workflows and explore ways to make business processes more efficient.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    alt: "Modern business office and operations environment",
  },
  {
    number: "05",
    title: "Business Growth & Expansion",
    description:
      "Explore new markets, growth opportunities, customer segments and practical expansion strategies.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    alt: "Business team collaborating on growth strategy",
  },
  {
    number: "06",
    title: "Technology & Digital Advisory",
    description:
      "Identify opportunities to use digital platforms, software, automation and technology to support business objectives.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    alt: "Technology components for digital business transformation",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, objectives, challenges and current position.",
  },
  {
    number: "02",
    title: "Analyse",
    description:
      "We assess opportunities, business processes, market conditions and priorities.",
  },
  {
    number: "03",
    title: "Strategise",
    description:
      "We develop recommendations and a practical roadmap aligned with your goals.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "We help translate agreed strategies into actionable business initiatives.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "We review progress, identify improvements and refine the approach over time.",
  },
];

const audiences = [
  "Startups and early-stage founders",
  "Small and medium-sized businesses",
  "Growing companies and enterprises",
  "Product-based businesses",
  "Service-based organizations",
  "Businesses exploring digital transformation",
];

const faqs = [
  {
    question: "What business consulting services does DELLVE provide?",
    answer:
      "DELLVE provides business strategy and planning, business model development, market research, feasibility analysis, process improvement, operations consulting, growth planning and technology advisory.",
  },
  {
    question: "Where does DELLVE provide business consulting services?",
    answer:
      "DELLVE is based in Hyderabad, Telangana, with a branch office in Mangalagiri, Andhra Pradesh. Businesses can contact our team to discuss their consulting requirements.",
  },
  {
    question: "Does DELLVE work with startups?",
    answer:
      "Yes. Our consulting capabilities are relevant to startups and founders looking for business planning, business model development, market research, product strategy and growth direction.",
  },
  {
    question: "Can DELLVE help improve business operations?",
    answer:
      "We can help businesses review workflows, identify operational challenges and explore practical process improvements based on their requirements.",
  },
  {
    question: "Does DELLVE provide technology consulting?",
    answer:
      "Yes. Our technology advisory covers digital transformation opportunities, software solutions, AI and automation possibilities, and technology planning aligned with business objectives.",
  },
  {
    question: "How can I contact DELLVE for consulting?",
    answer:
      "You can contact DELLVE through the website contact page or call +91 93906 27367 to discuss your business requirements.",
  },
];

export default function ConsultingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Consulting Services",
    serviceType: "Business Strategy and Management Consulting",
    description:
      "Business strategy, planning, market research, process improvement, operations consulting and business growth advisory.",
    provider: {
      "@type": "Organization",
      name: "DELLVE",
      telephone: "+91 93906 27367",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "12th Floor, Manjeera Trinity, Corporate E-Seva Lane, JNTU-Hitech City Road, KPHB Phase 3, Kukatpally",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500072",
        addressCountry: "IN",
      },
    },
    areaServed: [
      {
        "@type": "City",
        name: "Hyderabad",
      },
      {
        "@type": "State",
        name: "Telangana",
      },
      {
        "@type": "State",
        name: "Andhra Pradesh",
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-white text-[#101828]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="relative isolate px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(23,105,255,0.11),transparent_32%),linear-gradient(to_bottom,#ffffff,#f8faff)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Business Consulting
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Business Consulting Services to{" "}
              <span className="text-[#1769FF]">
                Build, Improve & Grow.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
              Make informed business decisions with the right strategy and
              direction. DELLVE helps businesses explore opportunities,
              strengthen operations, develop business models and plan for
              sustainable growth through practical consulting solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#1769FF] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss Your Business <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="#consulting-services"
                className="rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-bold transition hover:border-blue-500 hover:text-[#1769FF]"
              >
                Explore Services
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Business consulting in Hyderabad, Telangana and Andhra Pradesh.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />
            <div className="relative h-[390px] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200 sm:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
                alt="Business consulting team discussing strategy and growth"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Strategy Into Action
                </p>
                <p className="mt-3 text-3xl font-extrabold">
                  Clarity for Your Next Move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Business Strategy & Advisory
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Turn Business Challenges Into{" "}
              <span className="text-[#1769FF]">Clear Opportunities.</span>
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-[#667085]">
            <p>
              Running and growing a business involves decisions about
              customers, operations, products, technology, finances and market
              opportunities. Without a clear plan, it can become difficult to
              identify priorities and move forward confidently.
            </p>
            <p>
              DELLVE provides business consulting services in Hyderabad to
              help organizations assess their current position, understand
              challenges and identify practical areas for improvement.
            </p>
            <p>
              Our approach connects business strategy with product innovation
              and digital capabilities. Instead of looking at each challenge
              in isolation, we consider how business planning, operations,
              technology and market development can work together.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="consulting-services"
        className="bg-[#F7F9FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Our Consulting Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Business Consulting Solutions for Every Stage.
            </h2>
            <p className="mt-5 leading-7 text-[#667085]">
              From business planning to operational improvement, explore
              consulting capabilities designed around your business needs.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B32]/40 to-transparent" />
                  <span className="absolute bottom-4 left-5 rounded-lg bg-white/95 px-3 py-2 text-xs font-extrabold text-[#1769FF]">
                    {service.number}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-extrabold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#667085]">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1769FF] transition-all group-hover:gap-4"
                  >
                    Discuss This Service <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CONSULTING */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] sm:min-h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Professionals working together on business improvement"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Why DELLVE
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Consulting That Connects{" "}
              <span className="text-[#1769FF]">Strategy With Execution.</span>
            </h2>
            <p className="mt-6 leading-8 text-[#667085]">
              Business consulting should create clarity and support practical
              action. DELLVE takes an integrated approach that considers your
              objectives, resources and business environment.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Recommendations aligned with business objectives",
                "Business, product and technology perspectives",
                "Practical planning and implementation focus",
                "Flexible solutions based on business requirements",
                "Continuous improvement and growth orientation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-[#1769FF]">
                    ✓
                  </span>
                  <p className="font-semibold leading-7 text-[#344054]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#071B32] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Our Consulting Approach
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              A Clear Process. A Better Direction.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              We use a structured approach to understand business needs and
              develop actionable recommendations.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white/[0.09]"
              >
                <span className="text-sm font-extrabold text-blue-300">
                  {step.number}
                </span>
                <h3 className="mt-7 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Who We Work With
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Supporting Businesses at Every Stage.
            </h2>
            <p className="mt-5 leading-7 text-[#667085]">
              Our consulting capabilities can support different business
              types, from early-stage ideas to established organizations
              exploring their next phase of development.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, index) => (
              <div
                key={audience}
                className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <span className="font-extrabold text-[#1769FF]">
                  0{index + 1}
                </span>
                <p className="font-semibold">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-[#F5F8FF] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
            Our Service Locations
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Business Consulting in Hyderabad & Andhra Pradesh.
          </h2>
          <p className="mt-6 leading-8 text-[#667085]">
            DELLVE operates from Hyderabad, Telangana, and Mangalagiri,
            Andhra Pradesh. We welcome consulting enquiries from businesses
            in Hyderabad, Kukatpally, Madhapur, HITEC City and other parts of
            Telangana, as well as Vijayawada, Guntur, Amaravati and surrounding
            areas of Andhra Pradesh.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Hyderabad",
              "Kukatpally",
              "Madhapur",
              "HITEC City",
              "Telangana",
              "Mangalagiri",
              "Vijayawada",
              "Guntur",
              "Amaravati",
            ].map((place) => (
              <span
                key={place}
                className="rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-semibold text-[#344054] shadow-sm"
              >
                {place}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Business Consulting FAQs
            </h2>
          </div>

          <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-bold text-[#101828]">
                  <span>
                    <span className="mr-3 text-sm text-[#1769FF]">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <span className="text-2xl text-[#1769FF] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl pl-9 text-sm leading-8 text-[#667085]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#1769FF] px-5 py-20 text-center text-white sm:px-8 lg:py-24">
        <div className="absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 -z-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
            Take the Next Step
          </p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Build a Stronger Business.
          </h2>
          <p className="mt-6 leading-8 text-blue-50">
            Tell us about your business goals and challenges. Let's explore
            the right strategy and opportunities for your next stage of growth.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-xl bg-white px-8 py-4 text-sm font-extrabold text-[#1769FF] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Contact DELLVE <span className="ml-2" aria-hidden="true">↗</span>
          </Link>
          <a
            href="tel:+919390627367"
            className="ml-4 mt-9 inline-flex rounded-xl border border-white/40 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Call +91 93906 27367
          </a>
        </div>
      </section>
    </main>
  );
}

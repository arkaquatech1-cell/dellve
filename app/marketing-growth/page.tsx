
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO Services in Hyderabad | DELLVE",
  description:
    "Grow your business with DELLVE's digital marketing, SEO, social media marketing, branding, performance marketing and lead generation services in Hyderabad and Andhra Pradesh.",
  keywords: [
    "digital marketing company in Hyderabad",
    "digital marketing services Hyderabad",
    "SEO services Hyderabad",
    "SEO company in Hyderabad",
    "social media marketing services",
    "performance marketing agency",
    "lead generation services",
    "branding and brand strategy",
    "business growth consulting",
    "online marketing services",
    "digital marketing Telangana",
    "digital marketing Andhra Pradesh",
    "digital marketing Vijayawada",
  ],
  openGraph: {
    title: "Digital Marketing & Business Growth Services | DELLVE",
    description:
      "Build your brand, strengthen online visibility and create opportunities for business growth with DELLVE.",
    type: "website",
    locale: "en_IN",
  },
};

const services = [
  {
    number: "01",
    title: "Digital Marketing Strategy",
    description:
      "Develop a marketing roadmap based on your business objectives, audience, market position and customer acquisition goals.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    alt: "Digital marketing strategy and business analytics",
  },
  {
    number: "02",
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your website's search visibility through technical SEO, on-page optimization, keyword research and useful content.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=85",
    alt: "Search engine optimization and digital content planning",
  },
  {
    number: "03",
    title: "Social Media Marketing",
    description:
      "Plan social media content, campaigns and brand communication to build awareness and engage relevant audiences.",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=85",
    alt: "Social media marketing and digital communication",
  },
  {
    number: "04",
    title: "Performance Marketing",
    description:
      "Plan and optimize paid advertising campaigns with clear objectives, audience targeting and performance measurement.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    alt: "Marketing campaign performance analytics dashboard",
  },
  {
    number: "05",
    title: "Brand Strategy & Identity",
    description:
      "Build a consistent brand foundation through positioning, messaging, visual identity and customer-focused communication.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
    alt: "Brand identity and creative design work",
  },
  {
    number: "06",
    title: "Lead Generation & Customer Acquisition",
    description:
      "Explore targeted campaigns, landing pages and digital channels to attract relevant prospects and support sales opportunities.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    alt: "Business team discussing lead generation and sales growth",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Learn about your business, target customers, market and growth objectives.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Choose suitable channels, messaging, campaigns and marketing priorities.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Develop content, creative assets, landing pages and campaign materials.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "Launch marketing activities and manage agreed campaign deliverables.",
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "Review performance data and identify opportunities for improvement.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Stronger Brand Presence",
    description:
      "Build consistent brand communication across your website and digital channels.",
  },
  {
    number: "02",
    title: "Improved Search Visibility",
    description:
      "Create useful, search-focused content and improve website discoverability.",
  },
  {
    number: "03",
    title: "Relevant Audience Reach",
    description:
      "Plan marketing campaigns around your target audience and business objectives.",
  },
  {
    number: "04",
    title: "Measurable Marketing",
    description:
      "Use campaign and website performance data to guide marketing decisions.",
  },
];

const faqs = [
  {
    question: "What digital marketing services does DELLVE provide?",
    answer:
      "DELLVE offers digital marketing strategy, SEO, social media marketing, performance marketing, brand strategy, lead generation and customer acquisition planning.",
  },
  {
    question: "Does DELLVE provide SEO services in Hyderabad?",
    answer:
      "DELLVE offers SEO capabilities including keyword research, technical SEO, on-page optimization, content planning and website optimization for businesses.",
  },
  {
    question: "Can DELLVE help improve Google search visibility?",
    answer:
      "DELLVE can help improve website search readiness through technical improvements, relevant content, keyword targeting and on-page SEO. Search rankings depend on competition, website quality and other factors, so specific ranking positions cannot be guaranteed.",
  },
  {
    question: "Does DELLVE provide social media marketing?",
    answer:
      "Yes. Social media marketing capabilities include content planning, creative campaign concepts, brand communication and audience engagement strategies.",
  },
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing is a campaign approach focused on measurable objectives such as clicks, enquiries, conversions and customer acquisition.",
  },
  {
    question: "Can DELLVE help generate business leads?",
    answer:
      "DELLVE can help plan lead generation activities using digital campaigns, landing pages, search optimization and relevant customer acquisition channels.",
  },
  {
    question: "Which locations does DELLVE serve?",
    answer:
      "DELLVE operates from Hyderabad, Telangana, with a branch office in Mangalagiri, Andhra Pradesh. Contact our team to discuss your marketing requirements.",
  },
  {
    question: "How can I contact DELLVE for marketing services?",
    answer:
      "You can submit an enquiry through the DELLVE contact page or call +91 93906 27367 to discuss your business and marketing goals.",
  },
];

export default function MarketingGrowthPage() {
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
    name: "Digital Marketing and Business Growth Services",
    serviceType: "Digital Marketing and SEO",
    description:
      "Digital marketing strategy, SEO, social media marketing, performance marketing, branding and lead generation.",
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
      { "@type": "City", name: "Hyderabad" },
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Andhra Pradesh" },
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
              Marketing & Business Growth
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Build Your Brand.{" "}
              <span className="text-[#1769FF]">
                Reach More Customers. Grow.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
              Strengthen your digital presence with strategic marketing, SEO,
              social media, performance campaigns and lead generation.
              DELLVE helps businesses connect their marketing activities with
              meaningful business objectives.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#1769FF] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Grow Your Business ↗
              </Link>

              <Link
                href="#marketing-services"
                className="rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-bold transition duration-300 hover:border-blue-500 hover:text-[#1769FF]"
              >
                Explore Services
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Digital marketing and SEO services in Hyderabad, Telangana and
              Andhra Pradesh.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />

            <div className="relative h-[390px] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200 sm:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
                alt="Digital marketing strategy and campaign analytics"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/75 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Digital Growth Strategy
                </p>
                <p className="mt-3 text-3xl font-extrabold">
                  Visibility Into Opportunity.
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
              Marketing Strategy
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Marketing That Connects{" "}
              <span className="text-[#1769FF]">
                Brands With Customers.
              </span>
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-[#667085]">
            <p>
              Building a strong digital presence requires more than simply
              publishing content or running advertisements. Businesses need
              clear positioning, useful communication and marketing channels
              aligned with their audience.
            </p>

            <p>
              DELLVE approaches digital marketing through a combination of
              brand strategy, search optimization, social media, campaign
              planning and lead generation.
            </p>

            <p>
              Our focus is to understand your business, identify relevant
              marketing opportunities and create a structured approach that
              can be reviewed and improved using performance data.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="marketing-services"
        className="bg-[#F7F9FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Our Marketing Services
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Digital Marketing Solutions for Business Growth.
            </h2>

            <p className="mt-5 leading-7 text-[#667085]">
              Explore integrated marketing capabilities designed to improve
              brand communication, online visibility and customer acquisition.
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
                  <h3 className="text-xl font-extrabold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#667085]">
                    {service.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1769FF] transition-all group-hover:gap-4"
                  >
                    Discuss This Service →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] sm:min-h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=85"
              alt="Search engine optimization and website content strategy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Search Engine Optimization
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Get Found Where Your{" "}
              <span className="text-[#1769FF]">
                Customers Search.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#667085]">
              Search engine optimization helps make your website more
              understandable, accessible and relevant to people searching for
              your products or services.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Technical SEO and website health",
                "Keyword research and search intent",
                "On-page SEO and content optimization",
                "Internal linking and website structure",
                "Local SEO and business visibility",
                "SEO performance monitoring",
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

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#1769FF] transition-all hover:gap-4"
            >
              Discuss Your SEO Requirements →
            </Link>
          </div>
        </div>
      </section>

      {/* BRANDING */}
      <section className="bg-[#071B32] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Brand Development
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Create a Brand People{" "}
              <span className="text-blue-300">
                Recognize and Remember.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              A clear brand identity helps businesses communicate what they
              stand for and how they are different. We bring brand positioning,
              messaging and creative direction together to support consistent
              customer communication.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Brand Strategy",
                "Visual Identity",
                "Brand Messaging",
                "Creative Campaigns",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.05] p-4 text-sm font-semibold transition hover:border-blue-400/50 hover:bg-white/[0.09]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] sm:min-h-[440px]">
            <Image
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85"
              alt="Creative brand identity and visual design"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* MARKETING PROCESS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Our Marketing Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              From Strategy to Measurable Improvement.
            </h2>

            <p className="mt-5 leading-7 text-[#667085]">
              A structured marketing process helps align creative execution,
              channel selection and performance reviews.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {approach.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-lg"
              >
                <span className="text-sm font-extrabold text-[#1769FF]">
                  {step.number}
                </span>

                <h3 className="mt-7 text-xl font-extrabold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#667085]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F5F8FF] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Why Marketing Matters
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Build a Stronger Digital Presence.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="rounded-2xl border border-blue-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-sm font-extrabold text-[#1769FF]">
                  {benefit.number}
                </span>

                <h3 className="mt-7 text-xl font-extrabold">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#667085]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Explore More
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Everything Connected to Business Growth.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Business Consulting",
                description:
                  "Develop business strategies, improve operations and identify growth opportunities.",
                href: "/consulting",
              },
              {
                title: "Product Development",
                description:
                  "Plan and develop digital products, applications and business platforms.",
                href: "/product-development",
              },
              {
                title: "Digital Solutions",
                description:
                  "Explore digital transformation, technology and AI automation solutions.",
                href: "/digital-solutions",
              },
            ].map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <h3 className="text-xl font-extrabold transition group-hover:text-[#1769FF]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#667085]">
                  {item.description}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#1769FF] transition-all group-hover:gap-4">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-[#F7F9FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
            Our Service Locations
          </p>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Digital Marketing Services in Hyderabad & Andhra Pradesh.
          </h2>

          <p className="mt-6 leading-8 text-[#667085]">
            DELLVE operates from Hyderabad, Telangana, with a branch office
            in Mangalagiri, Andhra Pradesh. We welcome digital marketing and
            SEO enquiries from Hyderabad, Kukatpally, Madhapur, HITEC City,
            Vijayawada, Guntur, Amaravati and surrounding areas.
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
              Marketing & Growth FAQs
            </h2>
          </div>

          <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-bold text-[#101828]">
                  <span>
                    <span className="mr-3 text-sm text-[#1769FF]">
                      {String(index + 1).padStart(2, "0")}
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
            Let's Grow Together
          </p>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Make Your Next Move Count.
          </h2>

          <p className="mt-6 leading-8 text-blue-50">
            Tell us about your business, your target customers and your
            marketing goals. Let's explore the right digital growth strategy.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-white px-8 py-4 text-sm font-extrabold text-[#1769FF] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Start a Conversation ↗
            </Link>

            <a
              href="tel:+919390627367"
              className="inline-flex rounded-xl border border-white/40 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Call +91 93906 27367
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

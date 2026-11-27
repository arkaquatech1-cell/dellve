
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BLUVER Digital Products & Connected Platforms | DELLVE",
  description:
    "Explore BLUVER, a DELLVE product initiative focused on smart products, connected services, technology-enabled solutions and better digital experiences.",
  keywords: [
    "BLUVER",
    "digital products",
    "connected digital platforms",
    "product innovation",
    "technology solutions Hyderabad",
    "digital product development",
    "business technology solutions",
  ],
  openGraph: {
    title: "BLUVER Digital Products & Connected Platforms | DELLVE",
    description:
      "Smart products, connected services and better digital experiences by DELLVE.",
    type: "website",
  },
};

const capabilities = [
  {
    number: "01",
    title: "Digital Platform Development",
    description:
      "Building scalable digital platforms designed to connect products, services and customers through seamless experiences.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "Connected Services",
    description:
      "Bringing multiple services together through integrated digital experiences that simplify customer interactions.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Customer-Focused Solutions",
    description:
      "Designing technology-enabled solutions around real customer needs, usability and business objectives.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "04",
    title: "Technology Integration",
    description:
      "Connecting applications, services and business workflows to create more efficient digital operations.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "05",
    title: "Scalable Digital Experiences",
    description:
      "Creating flexible digital foundations that can evolve with changing customer expectations and business requirements.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
  },
];

const faqs = [
  {
    question: "What is BLUVER?",
    answer:
      "BLUVER is a DELLVE product and services initiative focused on smart products, connected services and technology-enabled digital experiences.",
  },
  {
    question: "What is the purpose of BLUVER?",
    answer:
      "BLUVER focuses on bringing products and services together through integrated technology solutions, customer-focused experiences and scalable digital platforms.",
  },
  {
    question: "Is BLUVER a product development initiative?",
    answer:
      "Yes. BLUVER represents a product-focused initiative covering digital platform development, technology integration and connected service experiences.",
  },
  {
    question: "How does DELLVE support product development?",
    answer:
      "DELLVE supports product strategy, research, design, software development, technology integration and digital growth.",
  },
  {
    question: "Where is DELLVE located?",
    answer:
      "DELLVE has its main office at Manjeera Trinity, Kukatpally, Hyderabad, Telangana, and a branch office in Mangalagiri, Andhra Pradesh.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Identify customer needs, business objectives and product opportunities.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define product strategy, features, technology and development priorities.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop digital products and integrate the required technologies.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Evaluate performance and refine the product experience over time.",
  },
];

export default function ProductsPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: "BLUVER",
    description:
      "A DELLVE product and services initiative focused on smart products, connected services and technology-enabled experiences.",
    slogan: "Smart Products. Connected Services. Better Experiences.",
    parentOrganization: {
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
  };

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

  return (
    <main className="overflow-hidden bg-white text-[#101828]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-[#F7F9FC]">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-[#1769FF] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#1769FF]" />
              DELLVE PRODUCT INITIATIVE
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl">
              Introducing{" "}
              <span className="text-[#1769FF]">BLUVER.</span>
              <br />
              Smart Products.
              <br />
              Connected Services.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Building technology-enabled solutions that connect products,
              services and people. BLUVER represents our vision for smarter
              digital experiences and connected business solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#1769FF] px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss a Product Idea
              </Link>
              <Link
                href="/product-development"
                className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-500 hover:text-blue-600"
              >
                Our Development Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-blue-200/60 to-cyan-100/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=90"
                alt="Technology and digital product innovation"
                width={1400}
                height={1000}
                priority
                className="h-[350px] w-full object-cover md:h-[470px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07121F]/75 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  BLUVER
                </p>
                <p className="mt-2 text-2xl font-bold md:text-3xl">
                  Better Digital Experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              About BLUVER
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Smart Products.
              <br />
              Connected Services.
              <br />
              <span className="text-[#1769FF]">
                Better Experiences.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600 md:text-lg">
            <p>
              BLUVER is a product and services initiative from DELLVE,
              focused on creating technology-enabled solutions that bring
              products, services and customers closer together.
            </p>
            <p>
              Our approach combines product thinking, digital technology,
              customer experience and business understanding to explore
              solutions that can adapt to evolving needs.
            </p>
            <p>
              From digital platforms to connected service experiences, the
              focus is on building useful, scalable and customer-oriented
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#F7F9FC] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Our Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Creating Connected Digital Solutions
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Our product-focused capabilities bring together technology,
              innovation and customer experience to support evolving business
              needs.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <article
                key={item.number}
                className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl ${
                  index === 3 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                  <span className="absolute bottom-5 left-6 text-sm font-bold tracking-widest text-white">
                    {item.number}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT APPROACH */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Our Approach
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              From Product Thinking to Digital Experiences
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              A structured approach helps transform opportunities into
              meaningful product experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <span className="text-4xl font-bold text-blue-100">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELLVE CONNECTION */}
      <section className="bg-[#07121F] px-6 py-24 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Powered by DELLVE
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              Product Vision Meets Technology and Business Strategy.
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              DELLVE brings business consulting, product development and
              digital transformation capabilities together to support
              technology-driven ideas and business opportunities.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-xl bg-white px-6 py-4 font-semibold text-[#07121F] transition hover:bg-blue-50"
              >
                About DELLVE
              </Link>
              <Link
                href="/digital-solutions"
                className="rounded-xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Digital Solutions
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85"
              alt="Team collaborating on digital product development"
              width={1200}
              height={900}
              className="h-[360px] w-full object-cover md:h-[440px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07121F]/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-[#F7F9FC] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
            Our Locations
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Product Innovation and Technology Solutions in Hyderabad & Andhra Pradesh
          </h2>
          <p className="mt-6 leading-8 text-slate-600">
            DELLVE operates from Hyderabad, Telangana, with a branch office
            in Mangalagiri, Andhra Pradesh. Our business consulting, product
            development and digital technology capabilities support businesses
            across Hyderabad, Kukatpally, Madhapur, HITEC City, Vijayawada,
            Guntur and Amaravati.
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
            ].map((location) => (
              <span
                key={location}
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700"
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              FAQs
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Learn more about BLUVER, its product vision and DELLVE&apos;s
              technology capabilities.
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold md:text-lg">
                  <span>
                    <span className="mr-3 text-sm text-blue-500">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <span className="text-2xl text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl pl-10 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0B1B35] via-[#123D78] to-[#1769FF] px-7 py-16 text-center text-white md:px-16 md:py-24">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
              Let&apos;s Build What&apos;s Next
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              Have a Product Idea? Let&apos;s Explore It Together.
            </h2>
            <p className="mt-6 leading-8 text-blue-100">
              Connect with DELLVE to discuss product strategy, digital
              platforms, technology integration and business opportunities.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-bold text-[#1769FF] transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Contact DELLVE
              </Link>
              <a
                href="tel:+919390627367"
                className="rounded-xl border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                +91 93906 27367
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

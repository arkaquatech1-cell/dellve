
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Development Company in Hyderabad | DELLVE",
  description:
    "DELLVE helps businesses with product strategy, product design, MVP development, software and application development, testing and product launch planning in Hyderabad and Andhra Pradesh.",
  keywords: [
    "product development company in Hyderabad",
    "product development services",
    "software product development",
    "product strategy consulting",
    "MVP development company",
    "mobile app development",
    "web application development",
    "digital product development",
    "product design services",
    "product development Telangana",
    "product development Andhra Pradesh",
  ],
  openGraph: {
    title: "Product Development Company in Hyderabad | DELLVE",
    description:
      "From product ideas and strategy to development and launch, DELLVE helps businesses build digital products.",
    type: "website",
    locale: "en_IN",
  },
};

const services = [
  {
    number: "01",
    title: "Product Strategy & Planning",
    description:
      "Define your product vision, target audience, core features and development roadmap before investing in execution.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
    alt: "Product strategy and planning session",
  },
  {
    number: "02",
    title: "Product Research & Validation",
    description:
      "Explore customer requirements, market opportunities and competitor offerings to evaluate product ideas.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
    alt: "Product research and business team collaboration",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Plan user journeys, create wireframes and develop intuitive interfaces that make digital products easier to use.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85",
    alt: "Digital product interface and user experience design",
  },
  {
    number: "04",
    title: "Software & Application Development",
    description:
      "Build web applications, mobile applications and custom digital platforms around your product requirements.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    alt: "Software developer working on a digital product",
  },
  {
    number: "05",
    title: "MVP Development",
    description:
      "Prioritize essential features and develop a minimum viable product to test an idea and gather early user feedback.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    alt: "Product analytics and MVP planning",
  },
  {
    number: "06",
    title: "Testing & Product Launch",
    description:
      "Plan product testing, identify improvements and prepare the release process for your digital product.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85",
    alt: "Technology team collaborating on product delivery",
  },
];

const stages = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the idea, business objectives, target users and product requirements.",
  },
  {
    number: "02",
    title: "Validate",
    description:
      "Research the market, assess feasibility and identify the essential product features.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create user journeys, wireframes and interface designs for the product.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Build the product through structured development and iterative improvements.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Test the product, prepare deployment and plan future enhancements.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "React Native",
  "MongoDB",
  "Cloud Platforms",
  "API Integrations",
];

const faqs = [
  {
    question: "What is product development?",
    answer:
      "Product development is the process of turning an idea into a usable product. It can include research, strategy, product design, development, testing, launch and ongoing improvements.",
  },
  {
    question: "Does DELLVE help startups develop products?",
    answer:
      "DELLVE's product development capabilities are suitable for startups and businesses exploring new product ideas, digital platforms, applications and MVP development.",
  },
  {
    question: "What is MVP development?",
    answer:
      "MVP stands for Minimum Viable Product. It is an initial version of a product containing the essential features needed to test an idea and collect feedback from early users.",
  },
  {
    question: "Can DELLVE develop web and mobile applications?",
    answer:
      "DELLVE offers product and technology capabilities covering web applications, mobile applications and custom digital platforms, depending on project requirements.",
  },
  {
    question: "Does product development include UI/UX design?",
    answer:
      "Product development planning can include user research, user journeys, wireframes and UI/UX design to help create clear and usable digital experiences.",
  },
  {
    question: "Where does DELLVE provide product development services?",
    answer:
      "DELLVE is based in Hyderabad, Telangana, with a branch office in Mangalagiri, Andhra Pradesh. Contact our team to discuss your project requirements.",
  },
  {
    question: "How can I discuss my product idea with DELLVE?",
    answer:
      "You can submit an enquiry through the DELLVE contact page or call +91 93906 27367 to discuss your product idea and requirements.",
  },
];

export default function ProductDevelopmentPage() {
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
    name: "Product Strategy and Development Services",
    serviceType: "Digital Product Development",
    description:
      "Product strategy, research, UI/UX design, MVP development, software development, testing and product launch planning.",
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
              Product Strategy & Development
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              From Product Ideas to{" "}
              <span className="text-[#1769FF]">
                Digital Experiences.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
              Turn your ideas into practical digital products. DELLVE brings
              together product strategy, research, UI/UX design and software
              development to help businesses plan, build and improve digital
              solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#1769FF] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss Your Product ↗
              </Link>

              <Link
                href="#product-services"
                className="rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-bold transition duration-300 hover:border-blue-500 hover:text-[#1769FF]"
              >
                Explore Capabilities
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Product development services in Hyderabad, Telangana and Andhra
              Pradesh.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />

            <div className="relative h-[390px] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200 sm:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
                alt="Software development team building digital products"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/70 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Ideas Into Innovation
                </p>
                <p className="mt-3 text-3xl font-extrabold">
                  Imagine. Design. Develop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Product Innovation
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Build Products Around{" "}
              <span className="text-[#1769FF]">
                Real Business Needs.
              </span>
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-[#667085]">
            <p>
              Developing a successful product involves more than writing code.
              It requires understanding the problem, identifying the right
              audience, planning useful features and creating an experience
              that customers can understand and use.
            </p>
            <p>
              DELLVE approaches product development by connecting business
              objectives with product strategy, design and technology. We help
              businesses think through their product requirements before
              moving into development.
            </p>
            <p>
              Whether you are exploring a new digital platform, planning an
              application or improving an existing product, our capabilities
              can support different stages of the product journey.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="product-services"
        className="bg-[#F7F9FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Our Product Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Complete Product Development Services.
            </h2>

            <p className="mt-5 leading-7 text-[#667085]">
              Explore the capabilities that help take a product from an early
              idea through design, development and launch preparation.
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
                    Discuss Your Requirement →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PROCESS */}
      <section className="bg-[#071B32] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Our Development Process
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              From Concept to Product Launch.
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured process helps connect product objectives with
              design, development and launch preparation.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white/[0.09]"
              >
                <span className="text-sm font-extrabold text-blue-300">
                  {stage.number}
                </span>

                <h3 className="mt-7 text-xl font-extrabold">
                  {stage.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Technology Capabilities
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Technology That Supports{" "}
              <span className="text-[#1769FF]">
                Product Innovation.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#667085]">
              The right technology choices help create products that are
              maintainable, adaptable and aligned with business requirements.
              Technology selection depends on the product, its users,
              integrations and long-term objectives.
            </p>

            <Link
              href="/digital-solutions"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#1769FF] transition-all hover:gap-4"
            >
              Explore Digital Solutions →
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#F2F6FF] p-8 sm:p-10">
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((technology, index) => (
                <div
                  key={technology}
                  className="flex min-h-20 items-center justify-center rounded-xl border border-blue-100 bg-white p-4 text-center text-sm font-bold text-[#344054] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-[#1769FF]"
                >
                  <span className="mr-2 text-[#1769FF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="bg-[#F5F8FF] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Who We Work With
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Helping Businesses Bring Ideas to Life.
            </h2>

            <p className="mt-5 leading-7 text-[#667085]">
              Our product development capabilities are relevant to businesses
              at different stages of product planning and development.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Startups & Founders",
                description:
                  "Explore product ideas, validate opportunities and plan an MVP around your business concept.",
              },
              {
                title: "Growing Businesses",
                description:
                  "Develop digital platforms, applications and new product capabilities to support business needs.",
              },
              {
                title: "Established Companies",
                description:
                  "Improve existing digital products, explore new features and plan technology-led product initiatives.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-sm font-extrabold text-[#1769FF]">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-xl font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#667085]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLUVER */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#071B32] text-white lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Our Product Initiative
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight">
              BLUVER<span className="text-[#4B91FF]">.</span>
            </h2>

            <h3 className="mt-3 text-xl font-bold">
              Smart Products. Connected Services. Better Experiences.
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              BLUVER is a product and services initiative focused on
              technology-enabled solutions and convenient services through an
              integrated platform approach. It reflects DELLVE's interest in
              developing connected digital experiences around customer needs.
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
              alt="Digital product development team collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
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
            Product Development in Hyderabad & Andhra Pradesh.
          </h2>

          <p className="mt-6 leading-8 text-[#667085]">
            DELLVE operates from Hyderabad, Telangana, with a branch office
            in Mangalagiri, Andhra Pradesh. We welcome product development
            enquiries from Hyderabad, Kukatpally, Madhapur, HITEC City,
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
              Product Development FAQs
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
            Start Building
          </p>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Have a Product Idea?
          </h2>

          <p className="mt-6 leading-8 text-blue-50">
            Let's discuss your idea, understand your requirements and explore
            the right path to build your digital product.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-xl bg-white px-8 py-4 text-sm font-extrabold text-[#1769FF] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Discuss Your Project ↗
          </Link>
        </div>
      </section>
    </main>
  );
}


import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Transformation & AI Automation Services | DELLVE",
  description:
    "DELLVE provides digital transformation, AI automation, web and mobile app development, CRM integration and technology consulting for businesses in Hyderabad and Andhra Pradesh.",
  keywords: [
    "digital transformation services Hyderabad",
    "AI automation company Hyderabad",
    "web application development Hyderabad",
    "mobile app development",
    "CRM software integration",
    "business automation solutions",
    "technology consulting Hyderabad",
    "digital solutions Andhra Pradesh",
  ],
  openGraph: {
    title: "Digital Transformation & AI Automation Services | DELLVE",
    description:
      "Transform business operations with digital technology, AI automation and connected software solutions from DELLVE.",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Digital Transformation Consulting",
    description:
      "Identify opportunities to modernize business operations, improve workflows and adopt technology aligned with your business objectives.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
    tags: ["Business Strategy", "Digital Roadmap", "Technology Advisory"],
  },
  {
    number: "02",
    title: "AI & Business Automation",
    description:
      "Explore AI-powered workflows, intelligent automation and connected systems to reduce repetitive tasks and improve operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85",
    tags: ["AI Integration", "Workflow Automation", "AI Solutions"],
  },
  {
    number: "03",
    title: "Web Application Development",
    description:
      "Build responsive websites, business applications, customer portals and scalable web platforms tailored to your requirements.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    tags: ["Next.js", "React", "Custom Applications"],
  },
  {
    number: "04",
    title: "Mobile Application Development",
    description:
      "Develop mobile experiences for Android and iOS with user-focused interfaces, connected APIs and business-ready functionality.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=85",
    tags: ["Android", "iOS", "React Native"],
  },
  {
    number: "05",
    title: "CRM & Business Software",
    description:
      "Connect customer management, sales activities and business processes through custom software and integrated business systems.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=85",
    tags: ["CRM", "Business Software", "API Integration"],
  },
  {
    number: "06",
    title: "Cloud & Technology Consulting",
    description:
      "Evaluate cloud infrastructure, application architecture, integrations and technology requirements to support reliable digital operations.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85",
    tags: ["Cloud Solutions", "APIs", "IT Consulting"],
  },
];

const benefits = [
  {
    title: "Better Operational Efficiency",
    description:
      "Improve business workflows by identifying manual processes and suitable opportunities for automation.",
  },
  {
    title: "Connected Business Systems",
    description:
      "Bring applications, customer data and business operations together through appropriate integrations.",
  },
  {
    title: "Improved Customer Experience",
    description:
      "Create accessible digital experiences that make it easier for customers to interact with your business.",
  },
  {
    title: "Technology for Business Growth",
    description:
      "Choose technology solutions that support current needs and can evolve with your organization.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Study your existing business processes, challenges and technology requirements.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Define the right digital roadmap, solution architecture and implementation priorities.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Design, build and integrate the required digital solutions.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Deploy solutions, validate workflows and support the transition.",
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "Review performance and identify opportunities for continuous improvement.",
  },
];

const faqs = [
  {
    question: "What are digital transformation services?",
    answer:
      "Digital transformation services help businesses evaluate and adopt technology to improve operations, customer experiences, business workflows and decision-making.",
  },
  {
    question: "Does DELLVE provide AI automation services?",
    answer:
      "DELLVE offers AI and business automation solutions, including workflow automation, AI integration and technology consulting based on business requirements.",
  },
  {
    question: "Does DELLVE develop web and mobile applications?",
    answer:
      "Yes. DELLVE provides web application and mobile application development using technologies selected according to the project requirements.",
  },
  {
    question: "Can DELLVE build custom CRM software?",
    answer:
      "DELLVE can help plan and develop custom business software and CRM solutions for customer management, sales workflows and business operations.",
  },
  {
    question: "Which technologies does DELLVE work with?",
    answer:
      "Depending on project requirements, DELLVE works with technologies including React, Next.js, TypeScript, Node.js, React Native, APIs, databases and cloud platforms.",
  },
  {
    question: "Where does DELLVE provide digital solutions?",
    answer:
      "DELLVE operates from Kukatpally, Hyderabad, Telangana, and Mangalagiri, Andhra Pradesh, and supports business requirements across locations.",
  },
];

export default function DigitalSolutionsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Transformation and Technology Solutions",
    serviceType: [
      "Digital Transformation Consulting",
      "AI and Business Automation",
      "Web Application Development",
      "Mobile Application Development",
      "CRM and Business Software",
      "Cloud and Technology Consulting",
    ],
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
      { "@type": "City", name: "Vijayawada" },
      { "@type": "City", name: "Guntur" },
      { "@type": "City", name: "Mangalagiri" },
    ],
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
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F7F9FC]">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-[#1769FF] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#1769FF]" />
              DIGITAL TECHNOLOGY & INNOVATION
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl">
              Transform Your Business With
              <span className="text-[#1769FF]"> Digital Solutions.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Move your business forward with digital transformation, AI
              automation, custom software development and connected technology
              solutions. DELLVE helps turn business challenges into practical
              digital opportunities.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#1769FF] px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss Your Project
              </Link>
              <a
                href="#our-services"
                className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-500 hover:text-blue-600"
              >
                Explore Solutions
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-7 text-sm font-medium text-slate-600">
              <span>AI & Automation</span>
              <span>Web & Mobile</span>
              <span>Business Technology</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-blue-200/60 to-cyan-100/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90"
                alt="Digital technology and connected electronic systems"
                width={1400}
                height={1000}
                priority
                className="h-[350px] w-full object-cover md:h-[470px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07121F]/75 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  DELLVE DIGITAL SOLUTIONS
                </p>
                <p className="mt-2 text-2xl font-bold md:text-3xl">
                  Technology That Moves Business Forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Our Digital Expertise
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Build Smarter.
              <br />
              Automate Better.
              <br />
              <span className="text-[#1769FF]">Grow Faster.</span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600 md:text-lg">
            <p>
              Technology plays an important role in how modern businesses
              operate, serve customers and compete in changing markets.
            </p>
            <p>
              DELLVE brings together business understanding, software
              development and technology consulting to help organizations
              identify suitable digital opportunities.
            </p>
            <p>
              Whether you need a new web application, an automated workflow,
              mobile software or connected business systems, we help define a
              solution around your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="our-services"
        className="bg-[#F7F9FC] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              What We Do
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Digital Solutions for Modern Businesses
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              From business automation to custom software, explore technology
              capabilities designed around your operational and growth goals.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <span className="absolute bottom-5 left-6 text-sm font-bold tracking-widest text-white">
                    {service.number}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#1769FF] transition group-hover:gap-4"
                  >
                    Discuss This Service <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI AUTOMATION FEATURE */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[28px]">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85"
              alt="Artificial intelligence technology concept"
              width={1400}
              height={1000}
              className="h-[350px] w-full object-cover md:h-[490px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              AI & Automation
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              Make Your Business Work Smarter With AI.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              AI and automation can help businesses rethink repetitive
              workflows, organize information and connect everyday business
              activities.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  title: "Workflow Automation",
                  description:
                    "Identify repetitive tasks and streamline suitable processes.",
                },
                {
                  title: "AI-Powered Experiences",
                  description:
                    "Explore AI assistants and intelligent features for business applications.",
                },
                {
                  title: "System Integration",
                  description:
                    "Connect software, APIs and business workflows where appropriate.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex rounded-xl bg-[#1769FF] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Explore AI Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#07121F] px-6 py-24 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Business Benefits
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Technology With a Business Purpose.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Digital solutions should address real business needs. We focus
              on practical outcomes rather than technology for its own sake.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-blue-400/50 hover:bg-white/[0.07]"
              >
                <span className="text-sm font-bold tracking-widest text-blue-400">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Technology Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              The Right Technology for the Right Solution.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              We select technologies according to project scope, performance,
              integrations, scalability and long-term maintenance needs.
            </p>
            <Link
              href="/product-development"
              className="mt-8 inline-flex font-bold text-[#1769FF] hover:gap-3"
            >
              Explore Product Development →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Node.js",
              "React Native",
              "MongoDB",
              "REST APIs",
              "Cloud Platforms",
            ].map((technology) => (
              <div
                key={technology}
                className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-6 text-center font-semibold transition hover:border-blue-300 hover:bg-blue-50"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F7F9FC] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              From Business Challenge to Digital Solution.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
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

      {/* RELATED SERVICES */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Explore DELLVE
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              More Ways We Help Businesses Grow.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Business Consulting",
                description:
                  "Business strategy, operational improvement and growth planning.",
                href: "/consulting",
              },
              {
                title: "Product Development",
                description:
                  "Product strategy, software development and digital platforms.",
                href: "/product-development",
              },
              {
                title: "Marketing & Growth",
                description:
                  "SEO, digital marketing, branding and customer acquisition.",
                href: "/marketing-growth",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold group-hover:text-[#1769FF]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex font-bold text-[#1769FF]">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-[#F7F9FC] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
            Serving Businesses Across Locations
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Digital Transformation Services in Hyderabad & Andhra Pradesh
          </h2>
          <p className="mt-6 leading-8 text-slate-600">
            DELLVE operates from Kukatpally, Hyderabad, Telangana, with a
            branch office in Mangalagiri, Andhra Pradesh. Our digital
            technology capabilities support businesses in Hyderabad,
            Kukatpally, Madhapur, HITEC City, Vijayawada, Guntur and Amaravati.
            We work with businesses to explore web development, mobile
            applications, AI automation and digital transformation based on
            their individual requirements.
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
              Digital Solutions FAQs.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Find answers to common questions about DELLVE&apos;s digital
              transformation and technology services.
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
                <p className="mt-4 pl-10 text-sm leading-7 text-slate-600">
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
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 leading-8 text-blue-100">
              Discuss your digital requirements with DELLVE and explore
              practical technology solutions for your business.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-bold text-[#1769FF] transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Start a Conversation
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

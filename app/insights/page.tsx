
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business, Product & Technology Insights | DELLVE",
  description:
    "Explore DELLVE insights on business consulting, product development, digital transformation, AI automation, SEO and digital marketing for growing businesses.",
  keywords: [
    "business consulting insights",
    "product development insights",
    "digital transformation articles",
    "AI automation for business",
    "business growth strategies",
    "SEO and digital marketing insights",
    "technology trends Hyderabad",
  ],
  openGraph: {
    title: "Business, Product & Technology Insights | DELLVE",
    description:
      "Ideas, strategies and practical perspectives on business, products, technology and digital growth.",
    type: "website",
  },
};

const categories = [
  "All Insights",
  "Business Strategy",
  "Product Development",
  "Digital Transformation",
  "Marketing & SEO",
  "AI & Automation",
];

const articles = [
  {
    category: "Business Strategy",
    readTime: "6 min read",
    date: "Business Growth",
    title: "How a Clear Business Strategy Creates Sustainable Growth",
    description:
      "Understand how business planning, market positioning and operational priorities help organizations build a stronger foundation for growth.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    href: "/consulting",
  },
  {
    category: "Product Development",
    readTime: "7 min read",
    date: "Product Innovation",
    title: "From Idea to Product: The Essential Development Journey",
    description:
      "Explore the important stages of product development, from validating an idea and defining requirements to building and improving a product.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    href: "/product-development",
  },
  {
    category: "Digital Transformation",
    readTime: "6 min read",
    date: "Technology",
    title: "Why Digital Transformation Matters for Growing Businesses",
    description:
      "Discover how connected systems, digital workflows and technology adoption can help businesses improve efficiency and customer experiences.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    href: "/digital-solutions",
  },
  {
    category: "Marketing & SEO",
    readTime: "8 min read",
    date: "Digital Growth",
    title: "Building a Strong Digital Presence Through SEO and Content",
    description:
      "Learn how useful content, search visibility, website experience and consistent marketing support long-term digital growth.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    href: "/marketing-growth",
  },
  {
    category: "AI & Automation",
    readTime: "7 min read",
    date: "Business Technology",
    title: "Practical Ways Businesses Can Explore AI Automation",
    description:
      "Explore how businesses can identify repetitive workflows and evaluate AI-powered automation opportunities responsibly.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    href: "/digital-solutions",
  },
  {
    category: "Business Strategy",
    readTime: "5 min read",
    date: "Business Planning",
    title: "Why Market Research Should Come Before Business Expansion",
    description:
      "Learn how customer research, competitor analysis and market validation can support more informed expansion decisions.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    href: "/consulting",
  },
];

const faqs = [
  {
    question: "What topics does DELLVE Insights cover?",
    answer:
      "DELLVE Insights covers business strategy, management consulting, product development, digital transformation, AI automation, technology and digital marketing.",
  },
  {
    question: "Who can benefit from DELLVE Insights?",
    answer:
      "Startup founders, small and medium-sized businesses, growing enterprises, product teams and professionals interested in business and technology can explore these insights.",
  },
  {
    question: "Does DELLVE provide business consulting services?",
    answer:
      "Yes. DELLVE offers business strategy, planning, process improvement, market research and growth consulting. Explore the Business Consulting page for more information.",
  },
  {
    question: "How can I discuss a business or technology project with DELLVE?",
    answer:
      "You can contact DELLVE through the website or call +91 93906 27367 to discuss your business, product development or digital transformation requirements.",
  },
];

export default function InsightsPage() {
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
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F7F9FC]">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-[#1769FF]">
              THE DELLVE KNOWLEDGE HUB
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl">
              Ideas That Inspire.
              <br />
              <span className="text-[#1769FF]">Insights That Drive</span>
              <br />
              Business Growth.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Explore practical perspectives on business strategy, product
              innovation, technology and digital growth. Discover ideas to
              make informed decisions and move your business forward.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#latest-insights"
                className="rounded-xl bg-[#1769FF] px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Insights
              </a>
              <Link
                href="/contact"
                className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-500 hover:text-blue-600"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-blue-200/60 to-cyan-100/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90"
                alt="Modern workspace for business strategy and innovation"
                width={1400}
                height={1000}
                priority
                className="h-[350px] w-full object-cover md:h-[470px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  THINK. INNOVATE. GROW.
                </p>
                <p className="mt-2 text-2xl font-bold md:text-3xl">
                  Knowledge for What&apos;s Next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
            Explore New Perspectives
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Business Knowledge for a Changing World
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            Businesses face new challenges as markets, customer expectations
            and technologies evolve. Our insights explore the ideas and
            practical considerations behind business decisions, product
            innovation and digital transformation.
          </p>
        </div>
      </section>

      {/* FEATURED INSIGHT */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
          <div className="relative min-h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
              alt="Business team discussing strategy and growth"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
            <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              Featured Topic
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
              Building a Business That Is Ready for the Future
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Sustainable business growth requires more than a good idea.
              Strategy, customer understanding, efficient operations and
              technology all play important roles in building an adaptable
              organization.
            </p>
            <Link
              href="/consulting"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#1769FF] transition hover:gap-4"
            >
              Explore Business Consulting <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section
        id="latest-insights"
        className="bg-[#F7F9FC] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
                Knowledge & Perspectives
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Explore Our Insights
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Discover perspectives across business, product innovation,
                technology and digital growth.
              </p>
            </div>
            <span className="text-sm font-medium text-slate-500">
              Explore topics and services
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold ${
                  index === 0
                    ? "border-[#1769FF] bg-[#1769FF] text-white"
                    : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-blue-600">
                      {article.category}
                    </span>
                    <span className="text-slate-400">{article.readTime}</span>
                  </div>

                  <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {article.date}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-snug transition group-hover:text-[#1769FF]">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {article.description}
                  </p>

                  <Link
                    href={article.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#1769FF] transition hover:gap-4"
                  >
                    Explore Topic <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            These cards currently introduce topics and related DELLVE
            services. They are not individual published blog articles.
          </p>
        </div>
      </section>

      {/* TOPIC AREAS */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              What We Explore
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Ideas Across Business and Technology
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Business Strategy",
                description:
                  "Business planning, market positioning, operations and growth strategies.",
                href: "/consulting",
              },
              {
                title: "Product Innovation",
                description:
                  "Product thinking, validation, development and digital experiences.",
                href: "/product-development",
              },
              {
                title: "Digital Transformation",
                description:
                  "Technology adoption, connected systems and business automation.",
                href: "/digital-solutions",
              },
              {
                title: "AI & Automation",
                description:
                  "AI opportunities, workflow automation and technology integration.",
                href: "/digital-solutions",
              },
              {
                title: "Marketing & SEO",
                description:
                  "Search visibility, content strategy, branding and digital growth.",
                href: "/marketing-growth",
              },
              {
                title: "Digital Products",
                description:
                  "Connected services, digital platforms and product experiences.",
                href: "/products",
              },
            ].map((topic, index) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group rounded-2xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-blue-500">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold transition group-hover:text-[#1769FF]">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {topic.description}
                </p>
                <span className="mt-6 inline-flex font-bold text-[#1769FF] transition group-hover:translate-x-2">
                  Explore <span className="ml-2">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F9FC] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              FAQs
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Questions About DELLVE Insights
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Find out more about our topics, services and how to connect
              with our team.
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

      {/* LOCAL SEO */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Business and Technology Insights from Hyderabad
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            DELLVE is based in Kukatpally, Hyderabad, Telangana, with a branch
            office in Mangalagiri, Andhra Pradesh. We work across business
            consulting, product development, digital transformation and
            marketing growth for businesses in Hyderabad, Madhapur, HITEC
            City, Vijayawada, Guntur and Amaravati.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0B1B35] via-[#123D78] to-[#1769FF] px-7 py-16 text-center text-white md:px-16 md:py-24">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
              Let&apos;s Build What&apos;s Next
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              Have an Idea? Let&apos;s Turn It Into an Opportunity.
            </h2>
            <p className="mt-6 leading-8 text-blue-100">
              Connect with DELLVE to explore business consulting, product
              development, digital solutions and marketing growth.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-bold text-[#1769FF] transition hover:bg-blue-50"
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


import Link from "next/link";

const articles = [
  {
    category: "Business Strategy",
    number: "01",
    title: "Building a Strong Business Strategy for Sustainable Growth",
    description:
      "Explore how business planning, market research and operational improvements can help businesses identify opportunities and build a foundation for growth.",
    readTime: "Business Insights",
    accent: "bg-blue-50 text-blue-600",
  },
  {
    category: "Product Innovation",
    number: "02",
    title: "From Idea to Market: Understanding the Product Development Journey",
    description:
      "Discover the importance of product ideation, validation, strategy, MVP development and launch planning.",
    readTime: "Product Insights",
    accent: "bg-violet-50 text-violet-600",
  },
  {
    category: "Digital Transformation",
    number: "03",
    title: "How Digital Transformation Can Improve Business Operations",
    description:
      "Understand how technology, AI, automation and digital solutions can support more efficient business operations.",
    readTime: "Technology Insights",
    accent: "bg-cyan-50 text-cyan-700",
  },
  {
    category: "Marketing & Growth",
    number: "04",
    title: "Building a Digital Growth Strategy for Modern Businesses",
    description:
      "Learn how branding, SEO, digital marketing and lead generation work together to support customer acquisition.",
    readTime: "Growth Insights",
    accent: "bg-emerald-50 text-emerald-700",
  },
];

export default function Insights() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              Insights & Perspectives
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#101828] sm:text-5xl">
              Ideas That Inspire{" "}
              <span className="text-blue-600">Business Growth.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Explore perspectives on business strategy, product innovation,
              digital transformation and marketing to help you think ahead
              and make informed business decisions.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex w-fit items-center gap-3 border-b border-blue-600 pb-2 text-sm font-bold text-blue-600 transition hover:gap-5"
          >
            Explore All Insights
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Featured Article */}
        <div className="mt-14 grid overflow-hidden rounded-3xl border border-gray-200 bg-[#F5F8FC] lg:grid-cols-2">
          <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#101828] p-8 text-white sm:p-12">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full border border-white/10" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-600/30 blur-[70px]" />

            <span className="relative w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
              Featured Topic
            </span>

            <div className="relative mt-16">
              <p className="text-sm font-semibold text-blue-300">
                Business Consulting
              </p>

              <h3 className="mt-4 max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
                Connecting Business Strategy, Technology and Innovation.
              </h3>

              <p className="mt-5 max-w-lg leading-7 text-gray-300">
                Explore how a business-first approach can connect strategy,
                product development and digital capabilities.
              </p>
            </div>

            <div className="relative mt-9 text-sm font-semibold text-blue-300">
              DELLVE Perspectives
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Business Perspective
            </span>

            <h3 className="mt-5 text-2xl font-bold leading-tight text-[#101828] sm:text-3xl">
              Innovation Beyond Ideas. Strategy Beyond Planning.
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              Businesses need more than isolated solutions. Connecting
              business strategy, technology, product innovation and marketing
              can help create a more coordinated path towards growth.
            </p>

            <Link
              href="/insights"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Explore Our Insights
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* Article Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article
              key={article.number}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-2 text-xs font-bold ${article.accent}`}
                >
                  {article.category}
                </span>

                <span className="text-sm font-bold text-gray-300">
                  {article.number}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold leading-snug text-[#101828] transition group-hover:text-blue-600">
                {article.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                {article.description}
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                <span className="text-xs font-medium text-gray-400">
                  {article.readTime}
                </span>

                <Link
                  href="/insights"
                  aria-label={`Explore ${article.category} insights`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-blue-600 transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                >
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

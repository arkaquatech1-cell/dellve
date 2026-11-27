
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand Your Business & Opportunities",
    description:
      "We begin by understanding your business goals, target audience, industry, competitors and challenges. Our business consulting approach identifies opportunities that can create long-term value.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
    alt: "Business professionals discussing strategy and opportunities",
    deliverables: [
      "Business requirement analysis",
      "Market and competitor research",
      "Customer and audience insights",
      "Business opportunity identification",
    ],
  },
  {
    number: "02",
    title: "Strategize",
    subtitle: "Build a Clear Business Roadmap",
    description:
      "We create practical business strategies, product roadmaps and digital growth plans. Every recommendation is aligned with your objectives, resources and measurable business outcomes.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
    alt: "Business planning and strategy discussion",
    deliverables: [
      "Business strategy and planning",
      "Product strategy and roadmap",
      "Technology planning",
      "Business growth strategy",
    ],
  },
  {
    number: "03",
    title: "Develop",
    subtitle: "Transform Ideas Into Solutions",
    description:
      "Our team turns strategies into practical solutions through product development, web and mobile applications, digital platforms, AI automation and technology implementation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    alt: "Digital product development and analytics workspace",
    deliverables: [
      "Product design and development",
      "Website and mobile app development",
      "AI and business automation",
      "Digital platform development",
    ],
  },
  {
    number: "04",
    title: "Launch",
    subtitle: "Take Your Solutions to Market",
    description:
      "We help businesses prepare for successful implementation and launch through testing, deployment, performance checks and go-to-market planning.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",
    alt: "Team collaborating on a product launch",
    deliverables: [
      "Product testing and validation",
      "Technology implementation",
      "Deployment and launch planning",
      "Go-to-market preparation",
    ],
  },
  {
    number: "05",
    title: "Grow",
    subtitle: "Improve Performance & Scale",
    description:
      "We support sustainable business growth through digital marketing, search engine optimization, lead generation, customer acquisition and continuous performance improvement.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    alt: "Business team working together to achieve growth",
    deliverables: [
      "Digital marketing and SEO",
      "Lead generation strategies",
      "Customer acquisition",
      "Performance and growth optimization",
    ],
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* Section Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#1769FF]">
              Our Approach
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-[-1.5px] text-[#101828] sm:text-5xl lg:text-[58px]">
              From Strategy to Execution,
              <span className="text-[#1769FF]">
                {" "}We Make Things Happen.
              </span>
            </h2>
          </div>

          <p className="text-base leading-8 text-[#667085]">
            DELLVE follows a structured approach to business consulting,
            product development and digital transformation. From the first
            idea to market launch and business growth, we connect strategy,
            technology and execution to help businesses move forward.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-16">
          <div className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-blue-100 md:block" />

          <div className="space-y-6">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group relative grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(16,24,40,0.06)] sm:p-8 md:grid-cols-[70px_1fr_240px] md:items-center xl:grid-cols-[70px_1fr_260px_1fr]"
              >
                {/* Step Number */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-sm font-bold text-[#1769FF] transition-all duration-300 group-hover:bg-[#1769FF] group-hover:text-white">
                  {step.number}
                </div>

                {/* Step Information */}
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#101828] transition-colors group-hover:text-[#1769FF]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#667085]">
                    {step.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {step.description}
                  </p>
                </div>

                {/* Process Image */}
                <div className="relative h-52 overflow-hidden rounded-xl bg-gray-100 sm:h-64 md:h-48 xl:h-52">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 35vw, 260px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B35]/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-3 py-1.5 text-xs font-bold text-[#1769FF] backdrop-blur-sm">
                    {step.title}
                  </span>
                </div>

                {/* Key Activities */}
                <div className="rounded-xl bg-[#F8FAFC] p-5 transition-colors group-hover:bg-blue-50/50">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-[#98A2B3]">
                    Key Activities
                  </p>

                  <ul className="space-y-3">
                    {step.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[#475467]"
                      >
                        <span className="mt-0.5 font-bold text-[#1769FF]">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-12 overflow-hidden rounded-2xl bg-[#071B35] p-8 text-white sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-blue-300">
                Your Next Step Starts Here
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Have a Business Challenge to Solve?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300">
                Connect with DELLVE for business consulting, product
                development, digital transformation and business growth
                solutions.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-md bg-[#1769FF] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0755E8]"
            >
              Start a Conversation
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

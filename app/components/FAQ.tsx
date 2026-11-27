
"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What services does DELLVE provide?",
    answer:
      "DELLVE provides business and management consulting, business strategy and planning, product strategy and development, digital transformation, AI and business automation, technology solutions, digital marketing, SEO and business growth services.",
  },
  {
    question: "Where is DELLVE located in Hyderabad?",
    answer:
      "DELLVE's main office is located at 12th Floor, Manjeera Trinity, Corporate E-Seva Lane, JNTU–Hitech City Road, Near Manjeera Mall, KPHB Phase 3, Kukatpally, Hyderabad – 500072, Telangana. DELLVE also has a branch office in Mangalagiri, Andhra Pradesh.",
  },
  {
    question: "Does DELLVE provide business consulting services?",
    answer:
      "Yes. DELLVE supports business strategy and planning, business process improvement, market research, feasibility studies, business model development, operational consulting and business growth strategies.",
  },
  {
    question: "Does DELLVE offer product development services?",
    answer:
      "Yes. DELLVE offers product ideation and validation, market research, product strategy, product design and development, software and application development, MVP development, product testing and launch support.",
  },
  {
    question: "What digital transformation services does DELLVE offer?",
    answer:
      "DELLVE's digital transformation capabilities include AI and business automation, web and application development, cloud and IT solutions, business intelligence, analytics, ERP and CRM solutions, and technology consulting.",
  },
  {
    question: "Does DELLVE provide SEO and digital marketing services?",
    answer:
      "Yes. DELLVE's marketing and business growth services include brand strategy, digital marketing, search engine optimization, social media management, performance marketing, lead generation, campaign management and customer acquisition.",
  },
  {
    question: "Who can work with DELLVE?",
    answer:
      "DELLVE works with startups and founders, small and medium-sized businesses, growing enterprises, product companies, service businesses and organizations pursuing digital transformation.",
  },
  {
    question: "Does DELLVE serve businesses across Andhra Pradesh and Telangana?",
    answer:
      "DELLVE supports businesses across Hyderabad and Telangana, as well as Amaravati, Vijayawada, Guntur and Mangalagiri in Andhra Pradesh.",
  },
  {
    question: "How can I contact DELLVE?",
    answer:
      "You can contact the DELLVE team by calling +91 93906 27367 or by visiting the Contact page on the website to discuss your business consulting, product development, digital transformation or marketing requirements.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

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
    <section
      id="faqs"
      className="relative overflow-hidden bg-[#F5F8FC] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-blue-100/70 blur-[110px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#101828] sm:text-5xl">
              Have Questions?{" "}
              <span className="text-blue-600">We Have Answers.</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-600">
              Find answers about DELLVE's business consulting, product
              development, digital transformation, AI automation and
              marketing services.
            </p>

            {/* Contact Card */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                ?
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#101828]">
                Still Have Questions?
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Tell us about your business goals and requirements.
                Our team can help you explore the right solutions.
              </p>

              <a
                href="tel:+919390627367"
                className="mt-5 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                +91 93906 27367
              </a>

              <div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Contact Our Team
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <article
                  key={faq.question}
                  className={`rounded-2xl border bg-white transition duration-300 ${
                    isOpen
                      ? "border-blue-200 shadow-lg shadow-blue-900/5"
                      : "border-gray-200 hover:border-blue-200"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-7"
                    >
                      <span className="text-base font-bold leading-7 text-[#101828] sm:text-lg">
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl transition duration-300 ${
                          isOpen
                            ? "rotate-45 bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-8 text-gray-600 sm:px-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

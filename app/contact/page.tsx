
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact DELLVE | Business Consulting & Digital Solutions",
  description:
    "Contact DELLVE for business consulting, product development, digital transformation, AI automation and digital marketing. Visit our Hyderabad or Mangalagiri office.",
  keywords: [
    "contact DELLVE",
    "business consulting Hyderabad",
    "product development company Hyderabad",
    "digital transformation Hyderabad",
    "DELLVE Mangalagiri",
    "digital solutions Andhra Pradesh",
  ],
  openGraph: {
    title: "Contact DELLVE | Let's Build What's Next",
    description:
      "Connect with DELLVE to discuss your business, product and technology requirements.",
    type: "website",
  },
};

const offices = [
  {
    type: "Main Office",
    city: "Hyderabad, Telangana",
    address:
      "12th Floor, Manjeera Trinity, Corporate E-Seva Lane, JNTU–Hitech City Road, Near Manjeera Mall, KPHB Phase 3, Kukatpally, Hyderabad – 500072, Telangana.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Manjeera+Trinity+Kukatpally+Hyderabad",
  },
  {
    type: "Branch Office",
    city: "Mangalagiri, Andhra Pradesh",
    address:
      "Plot No. 12, Autonagar Last Line, Near APIIC, Mangalagiri, Guntur – 522503, Andhra Pradesh.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Autonagar+Mangalagiri+Andhra+Pradesh",
  },
];

const enquiryTypes = [
  "Business Consulting",
  "Product Development",
  "Digital Transformation",
  "AI & Automation",
  "Digital Marketing & SEO",
  "Other Enquiry",
];

export default function ContactPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DELLVE",
    description:
      "Business consulting, product innovation and digital growth company.",
    telephone: "+91 93906 27367",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress:
          "12th Floor, Manjeera Trinity, Corporate E-Seva Lane, JNTU-Hitech City Road, Near Manjeera Mall, KPHB Phase 3, Kukatpally",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500072",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 12, Autonagar Last Line, Near APIIC",
        addressLocality: "Mangalagiri",
        addressRegion: "Andhra Pradesh",
        postalCode: "522503",
        addressCountry: "IN",
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-white text-[#101828]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F7F9FC]">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:px-10 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-[#1769FF]">
              LET&apos;S CONNECT
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl">
              Let&apos;s Build
              <br />
              <span className="text-[#1769FF]">What&apos;s Next.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Have a business idea, product vision or digital growth challenge?
              Connect with DELLVE. Let&apos;s discuss your goals and explore
              the right way forward.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="tel:+919390627367"
                className="rounded-xl bg-[#1769FF] px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Call Our Team
              </a>
              <a
                href="#contact-form"
                className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-500 hover:text-blue-600"
              >
                Send an Enquiry
              </a>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-7">
              <p className="text-sm font-medium text-slate-500">
                Call us directly
              </p>
              <a
                href="tel:+919390627367"
                className="mt-2 inline-block text-2xl font-bold text-[#1769FF]"
              >
                +91 93906 27367
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-blue-200/60 to-cyan-100/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=90"
                alt="Modern DELLVE business office and meeting space"
                width={1400}
                height={1000}
                priority
                className="h-[350px] w-full object-cover md:h-[460px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  DELLVE
                </p>
                <p className="mt-2 text-2xl font-bold md:text-3xl">
                  Ideas Start With a Conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <a
            href="tel:+919390627367"
            className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-[#1769FF]">
              <span aria-hidden="true">☎</span>
            </div>
            <h2 className="mt-6 text-xl font-bold">Call Us</h2>
            <p className="mt-3 text-slate-600">Speak with our team</p>
            <p className="mt-4 font-bold text-[#1769FF]">
              +91 93906 27367
            </p>
          </a>

          <a
            href="#office-locations"
            className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-[#1769FF]">
              <span aria-hidden="true">⌖</span>
            </div>
            <h2 className="mt-6 text-xl font-bold">Visit Our Offices</h2>
            <p className="mt-3 text-slate-600">
              Hyderabad and Mangalagiri
            </p>
            <p className="mt-4 font-bold text-[#1769FF]">
              View Office Locations →
            </p>
          </a>

          <div className="rounded-2xl border border-slate-200 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-[#1769FF]">
              <span aria-hidden="true">◷</span>
            </div>
            <h2 className="mt-6 text-xl font-bold">Business Enquiries</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Contact us to discuss your project requirements and business
              objectives.
            </p>
            <p className="mt-4 font-semibold text-[#1769FF]">
              By phone or enquiry form
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="bg-[#F7F9FC] px-6 py-24 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Start a Conversation
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              Tell Us About Your Project.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Share a few details about your requirements. Our team can
              understand your enquiry and discuss the next steps with you.
            </p>

            <div className="mt-10 rounded-2xl bg-[#07121F] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                DELLVE
              </p>
              <h3 className="mt-4 text-2xl font-bold">
                Business Consulting. Product Innovation. Digital Growth.
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                One conversation can be the beginning of a new business
                opportunity.
              </p>
              <a
                href="tel:+919390627367"
                className="mt-7 inline-block font-bold text-blue-300 hover:text-white"
              >
                +91 93906 27367 →
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <form action="#" method="post" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your company name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold"
                >
                  What Service Are You Interested In? *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-semibold"
                >
                  Estimated Project Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Select your budget (optional)</option>
                  <option value="Under ₹25,000">Under ₹25,000</option>
                  <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                  <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                  <option value="₹1,00,000 – ₹5,00,000">
                    ₹1,00,000 – ₹5,00,000
                  </option>
                  <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                  <option value="To be discussed">To be discussed</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Tell Us About Your Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe your project, goals or requirements..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#1769FF] px-7 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Submit Enquiry →
              </button>

              <p className="text-center text-xs leading-6 text-slate-500">
                Your details should be handled securely and used to respond
                to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section
        id="office-locations"
        className="px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              Find Us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Our Office Locations
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Connect with DELLVE through our main office in Hyderabad or
              branch office in Mangalagiri.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {offices.map((office, index) => (
              <article
                key={office.type}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg md:p-10"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#1769FF]">
                    {office.type}
                  </span>
                  <span className="text-sm font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold">{office.city}</h3>
                <p className="mt-5 min-h-24 leading-8 text-slate-600">
                  {office.address}
                </p>

                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-[#1769FF] transition hover:gap-4"
                >
                  Get Directions <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#07121F] px-7 py-16 text-center text-white md:px-16 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Ready to Get Started?
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Let&apos;s Create Something Meaningful Together.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            From business strategy to digital execution, DELLVE is ready to
            discuss your next opportunity.
          </p>
          <a
            href="tel:+919390627367"
            className="mt-9 inline-flex rounded-xl bg-[#1769FF] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Call +91 93906 27367
          </a>
        </div>
      </section>
    </main>
  );
}

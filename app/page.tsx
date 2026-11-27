import Approach from "./components/Approach";
import BusinessIntro from "./components/BusinessIntro";
import ContactCTA from "./components/ContactCTA";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import Locations from "./components/Locations";
import Products from "./components/Products";
import Services from "./components/Services";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-white">
      {/* 01 - Hero */}
      <Hero />

      {/* 02 - Business Introduction */}
      <BusinessIntro />

      {/* 03 - Our Services */}
      <Services />

      {/* 04 - Our Approach */}
      <Approach />

      {/* 05 - Products & Platforms */}
      <Products />

      {/* 06 - Who We Work With */}
      <WhoWeWorkWith />

      {/* 07 - Why Choose DELLVE */}
      <WhyChooseUs />

      {/* 09 - Our Locations */}
      <Locations />

      {/* 10 - Insights & Articles */}
      <Insights />

      {/* 11 - Frequently Asked Questions */}
      <FAQ />

      {/* 12 - Final Contact CTA */}
      <ContactCTA />
    </main>
  );
}

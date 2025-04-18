import HeroSection from "./components/sections/hero-section";
import MarcasSection from "./components/sections/marcas-section";
import BenefitsSection from "./components/sections/benefits-section";
import ProcessSection from "./components/sections/process-section";
import TestimonialsSection from "./components/sections/testimonials-section";
import ContactSection from "./components/sections/contact-section";
import CtaSection from "./components/sections/cta-section";
import Footer from "./components/layout/footer";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <MarcasSection />
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
};

export default App;
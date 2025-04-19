import Header from './components/layout/header';
import HeroSection from './components/sections/hero-section';
import BenefitsSection from './components/sections/benefits-section';
import MarcasSection from './components/sections/marcas-section';
import ModelsSection from './components/sections/models-section';
import ProcessSection from './components/sections/process-section';
import TestimonialsSection from './components/sections/testimonials-section';
import ContactSection from './components/sections/contact-section';
import CtaSection from './components/sections/cta-section';
import Footer from './components/layout/footer';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <MarcasSection />
        <ModelsSection />
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
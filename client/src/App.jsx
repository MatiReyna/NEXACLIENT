import { Routes, Route } from 'react-router-dom';

// Importaciones para el Dashboard del administrador.
import AdminLogin from './components/admin/AdminLogin';
import DashboardAdmin from './components/admin/DashboardAdmin';

// Importaciones para la página principal.
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
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <HeroSection />
              <BenefitsSection />
              <MarcasSection />
              {/* <ModelsSection /> */}
              <ProcessSection />
              <TestimonialsSection />
              <ContactSection />
              <CtaSection />
            </main>
            <Footer />
          </div>
        }
      />
      <Route path="/administrador" element={<AdminLogin />} />
      <Route path="/administrador/dashboard" element={<DashboardAdmin />} />
    </Routes>
  )
};

export default App;
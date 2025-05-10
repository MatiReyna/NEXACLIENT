import { Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"

// Importaciones para el Dashboard del administrador.
import AdminLogin from './components/dashboard/AdminLogin';
import DashboardAdmin from './components/dashboard/DashboardAdmin';

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
              <ModelsSection />
              <ProcessSection />
              <TestimonialsSection />
              <ContactSection />
              <CtaSection />
            </main>
            <Footer />
            <SpeedInsights />
          </div>
        }
      />
      <Route path="/administrador" element={<AdminLogin />} />
      <Route path="/administrador/dashboard" element={
        localStorage.getItem('isAdmin') === 'true' ? (
          <DashboardAdmin />
        ) : (
          <div className="min-h-screen flex items-center justify-center text-center p-4">
            <div className="max-w-md">
              <h1 className="text-2xl font-semibold text-red-600">Acceso denegado</h1>
              <p className="mt-2 text-muted-foreground">No tienes credenciales para acceder a esta sección.</p>
            </div>
          </div>
        )
      } />
    </Routes>
  )
};

export default App;
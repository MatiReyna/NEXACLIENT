import { Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"

// Importaciones para el Dashboard del administrador.
import AdminLogin from '@/components/dashboard/AdminLogin';
import DashboardAdmin from '@/components/dashboard/DashboardAdmin';

// Importaciones para la página principal.
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import BenefitsSection from '@/components/sections/benefits-section';
import MarcasSection from '@/components/sections/marcas-section';
import ModelsSection from '@/components/sections/models-section';
import ProcessSection from '@/components/sections/process-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import CtaSection from '@/components/sections/cta-section';
import Footer from '@/components/layout/footer';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <section id="inicio"><HeroSection /></section>
              <section id="beneficios"><BenefitsSection /></section>
              <section id="marcas"><MarcasSection /></section>
              <section id="modelos"><ModelsSection /></section>
              <section id="proceso"><ProcessSection /></section>
              <section id="testimonios"><TestimonialsSection /></section>
              <section id="contacto"><ContactSection /></section>
              <section id="cta"><CtaSection /></section>
            </main>
            <Footer />
            <SpeedInsights />
          </div>
        }
      />
      <Route path="/administrador" element={<AdminLogin />} />
      <Route path="/administrador/dashboard" element={
        <RequireAuth>
          <DashboardAdmin />
        </RequireAuth>
        } />
    </Routes>
  )
};

export default App;
import ProcessSection from "./components/sections/process-section";
import CtaSection from "./components/sections/cta-section";
import Footer from "./components/layout/footer";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
};

export default App;
import { useState } from 'react';
import './App.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { ImpactDashboardPreview } from './components/ImpactDashboardPreview';
import { MethodologySection } from './components/MethodologySection';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { DemoModal } from './components/DemoModal';

function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedAuditProject, setSelectedAuditProject] = useState(null);

  // Initialize scroll-triggered reveals
  useScrollReveal();

  return (
    <div className="impact-tracker-app">
      {/* Skip to Content Link for Keyboard Accessibility */}
      <a href="#main-content" className="sr-only-focusable">
        Skip to main content
      </a>

      {/* Top Navigation */}
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Editorial Hero */}
        <HeroSection onOpenDemo={() => setDemoModalOpen(true)} />

        {/* Demo Statistics with Count-up */}
        <StatsSection />

        {/* Live Initiatives Dashboard & Filter */}
        <ImpactDashboardPreview 
          onSelectAudit={(project) => setSelectedAuditProject(project)} 
        />

        {/* Methodology & Verification Pillars */}
        <MethodologySection />

        {/* Interactive Impact Simulator */}
        <InteractiveCalculator onOpenDemo={() => setDemoModalOpen(true)} />

        {/* Real Voices & Institutional Trust */}
        <TestimonialsSection />

        {/* Accessible FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Comprehensive Editorial Footer */}
      <Footer />

      {/* Interactive Cryptographic Audit Modal */}
      <AuditModal 
        project={selectedAuditProject} 
        onClose={() => setSelectedAuditProject(null)} 
      />

      {/* Interactive Booking & Telemetry Demo Modal */}
      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
      />
    </div>
  );
}

export default App;

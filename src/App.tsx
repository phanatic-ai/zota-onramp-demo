import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PaymentMethods from './components/PaymentMethods';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0B0E14] text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <PaymentMethods />
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

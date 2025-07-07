import './App.css';
import ContactSection from './components/ContactSection/ContactSection';
import HeroSection from './components/HeroSection/HeroSection'
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import ServicesSection from './components/ServicesSection/ServiceSection';

import './i18n';

function App() {
  return (
    <div className="App">
      <LanguageSwitcher/>
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default App;

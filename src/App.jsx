import './App.css';
import ContactSection from './components/ContactSection/ContactSection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import ServicesSection from './components/ServicesSection/ServiceSection';

import './i18n';

function App() {
  return (
    <div className="App">
           <Header />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default App;

import { useState } from 'react';
import Nav from './components/Nav';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Hero from './components/Hero';
import SituationSelector from './components/SituationSelector';
import Services from './components/Services';
import Quote from './components/Quote';
import Story from './components/Story';
import Team from './components/Team';
import Contact from './components/Contact';
import Closing from './components/Closing';
import Ticker from './components/Ticker';
import Footer from './components/Footer';

export default function App() {
  const [activeStage, setActiveStage] = useState(null);

  return (
    <>
      <ScrollProgress />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Nav />

      <div id="page-wrap">
        <main id="main-content">
          <Hero />
          <SituationSelector onStageChange={setActiveStage} />
          <Services activeStage={activeStage} />
          <Quote />
          <Story />
          <Team />
          <Contact />
          <Closing activeStage={activeStage} />
        </main>

        <Ticker />
        <Footer />
      </div>

      <BackToTop />
    </>
  );
}

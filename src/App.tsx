/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Instructions from './components/Instructions';
import Gallery from './components/Gallery';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white bg-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Gallery />
        <Instructions />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

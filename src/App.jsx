// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';       // ← add these
import { motion, useScroll } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from '@/components/theme-provider';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import './index.css';
import Home1 from './Pages/Home/Home';
import MainMarket from './Pages/Home/MainMarket';
import Chart from './Pages/Home/Chart';

function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.classList.add('has-scroll-smooth');
    return () => {
      document.documentElement.classList.remove('has-scroll-smooth');
    };
  }, []);

  const siteName = "kalyan-555.com";
  const defaultTitle = "Kalyan 555 - Live Kalyan Matka Results";
  const defaultDescription = "Kalyan 555 - Your Ultimate Destination for Live Kalyan Matka Results";
  const siteUrl = "https://kalyan-555.in";

  return (
    <HelmetProvider>
      <BrowserRouter> {/* ← wrap with your Router */}
        <Helmet htmlAttributes={{ lang: 'en-IN' }}>
          <title>{defaultTitle}</title>
          <meta name="description" content={defaultDescription} />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href={siteUrl} />
          {/* …other meta tags… */}
        </Helmet>

        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          {/* scroll progress bar */}
          <motion.div
            className="scroll-progress-bar"
            style={{ scaleX: scrollYProgress }}
          />

      

          <main>
            <Routes>
              <Route path="/" element={<Home1 />} />
              <Route path="/main-market" element={<MainMarket />} />
              <Route path="/chart/*" element={<Chart/>} />
             
              {/* add more <Route>s here as you build out the site */}
            </Routes>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

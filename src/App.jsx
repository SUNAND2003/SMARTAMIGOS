import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to HomePage */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </SmoothScroll>
  );
}

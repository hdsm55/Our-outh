import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './i18n';
import 'react-toastify/dist/ReactToastify.css';

// Lazy load pages with loading boundaries
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => 
  import('./pages/About')
    .then(module => {
      // Preload timeline data
      import('./data/timeline.json');
      return module;
    })
);
const Projects = React.lazy(() => 
  import('./pages/Projects')
    .then(module => {
      // Preload projects data
      import('./data/projects.json');
      return module;
    })
);
const Events = React.lazy(() => 
  import('./pages/Events')
    .then(module => {
      // Preload events data
      import('./data/events.json');
      return module;
    })
);
const Donate = React.lazy(() => import('./pages/Donate'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Join = React.lazy(() => import('./pages/Join'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Press = React.lazy(() => import('./pages/Press'));
const Reports = React.lazy(() => import('./pages/Reports'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Volunteer = React.lazy(() => import('./pages/Volunteer'));

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={<Loader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/volunteer" element={<Volunteer />} />
                    {/* Redirect legacy URLs */}
                    <Route path="/get-involved" element={<Navigate to="/join\" replace />} />
                    <Route path="/news" element={<Navigate to="/blog\" replace />} />
                    <Route path="/about-us" element={<Navigate to="/about\" replace />} />
                    {/* Catch all route */}
                    <Route path="*" element={<Navigate to="/\" replace />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </GoogleReCaptchaProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
import { useState, Suspense, lazy } from 'react';
import './App.css';
import AnimationLoader from './components/AnimationLoader.jsx'; // Import the AnimationLoader component
import { Helmet } from 'react-helmet';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [count, setCount] = useState(0);

  return (

    <>
    <Helmet>
      {/* Title Tag */}
      <title>ReMed Research Solutions Pvt. Ltd | Leading Clinical Research & Site Management Organization (SMO) in India</title>

      {/* Meta Description */}
      <meta name="description" content="ReMed Research Solutions Pvt. Ltd is a premier Site Management Organization specializing in clinical trials from Phase I to IV across India. Our expert team ensures GCP compliance, delivering accurate and efficient trial management services." />

      {/* Keywords */}
      <meta name="keywords" content="Clinical Research, Site Management Organization, SMO Services, Clinical Trials India, GCP Compliance, ICH-GCP Certified, Phase I-IV Trials, Data Management in Clinical Research, Clinical Trial Implementation, Patient Recruitment for Clinical Trials" />

      {/* H1 Tag */}
      <meta name="og:title" content="ReMed Research Solutions Pvt. Ltd – Your Trusted Partner for Clinical Trial Management" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.remedresearch.in/" />
      <meta property="og:title" content="ReMed Research Solutions Pvt. Ltd | Leading Clinical Research & Site Management Organization (SMO) in India" />
      <meta property="og:description" content="ReMed Research Solutions Pvt. Ltd is a premier Site Management Organization specializing in clinical trials from Phase I to IV across India. Our expert team ensures GCP compliance, delivering accurate and efficient trial management services." />
      <meta property="og:image" content="/path/to/image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.remedresearch.in/" />
      <meta property="twitter:title" content="ReMed Research Solutions Pvt. Ltd | Leading Clinical Research & Site Management Organization (SMO) in India" />
      <meta property="twitter:description" content="ReMed Research Solutions Pvt. Ltd is a premier Site Management Organization specializing in clinical trials from Phase I to IV across India. Our expert team ensures GCP compliance, delivering accurate and efficient trial management services." />
      <meta property="twitter:image" content="/path/to/image.jpg" />
    </Helmet>
   
    <Suspense fallback={<AnimationLoader />}>
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Suspense>
    </>
  );
}

export default App;

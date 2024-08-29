import { useState, Suspense, lazy } from 'react';
import './App.css';
import AnimationLoader from './components/AnimationLoader.jsx'; // Import the AnimationLoader component

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<AnimationLoader />}>
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;

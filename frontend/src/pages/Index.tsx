import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import Testimonials from '@/components/Testimonials';
import Presentation from '@/components/Presentacion';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <AboutUs />
      <Contact />
      <Testimonials />
      <Presentation />
      <Footer />
    </div>
  );
};

export default Index;



import Header from "@/components/Layout/Header";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import About from "@/components/Home/About";
import Stats from "@/components/Home/Stats";
import Testimonials from "@/components/Home/Testimonials";
import Footer from "@/components/Layout/Footer";




export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services/>
        <About />
        <Stats />
        <Testimonials />
        <Footer />



      </main>
    
    </>
  );
}


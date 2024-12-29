import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import About from '@/app/pages/About';
import Blog from '@/app/pages/Blog';
import Clients from '@/app/pages/Clients';
import Contact from '@/app/pages/Contact';
import Hero from '@/app/pages/Hero';
import Portfolio from '@/app/pages/Portfolio';


const page = () => {
  return (
    <>
      <div className='md:hidden'>
        <Header />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Blog />
      <Contact />
      <div className='md:hidden'>
        <Footer />
      </div>
    </>
  )
}

export default page;
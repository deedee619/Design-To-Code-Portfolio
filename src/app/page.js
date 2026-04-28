import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IntroForm from '@/components/IntroForm';
import PracticeAreas from '@/components/PracticeAreas';
import Specialist from '@/components/Specialist';
import Team from '@/components/Team';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <IntroForm />
      <PracticeAreas />
      <Specialist />
      <Team />
      <Process />
      <Testimonials />
      <Locations />
      <Footer />
    </main>
  );
}

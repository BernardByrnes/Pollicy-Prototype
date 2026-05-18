import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Research from '@/components/Research';
import Impact from '@/components/Impact';
import Team from '@/components/Team';
import FeaturedStory from '@/components/FeaturedStory';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Research />
        <Impact />
        <Team />
        <FeaturedStory />
        <Partners />
      </main>
      <Footer />
    </>
  );
}

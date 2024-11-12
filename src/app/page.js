import Image from 'next/image';
import HeroSection18 from '@/components/hero';
import ContentSection5 from '@/components/bio';
import ContentSection7 from '@/components/jobs';
import ContentSection4 from '@/components/work';
import TestimonialSection6 from '@/components/testimonials';
import Footer4 from '@/components/footer';

export default function Home() {
  return (
    <main>
      <section>
        <HeroSection18 />
      </section>
      <section>
        <ContentSection5 />
      </section>
      <section>
        <ContentSection7 />
      </section>
      <section>
        <ContentSection4 />
      </section>
      <section>
        <TestimonialSection6 />
      </section>
      <footer>
        <Footer4 />
      </footer>
    </main>
  );
}

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
        <a id='bio'>
          <ContentSection5 />
        </a>
      </section>
      <section>
        <a id='jobs'>
          <ContentSection7 />
        </a>
      </section>
      <section>
        <a id='work'>
          <ContentSection4 />
        </a>
      </section>
      <section>
        <a id='testimonials'>
          <TestimonialSection6 />
        </a>
      </section>
      <footer>
        <Footer4 />
      </footer>
    </main>
  );
}

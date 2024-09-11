import Image from 'next/image';
import HeroSection18 from '@/components/hero';
import ContentSection5 from '@/components/bio';
import ContentSection7 from '@/components/jobs';

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
    </main>
  );
}

'use client';

import { Typography, Card, CardBody } from '@material-tailwind/react';
import Image from 'next/image';

function ContentCard({ img, title, desc }) {
  return (
    <Card
      className='relative grid min-h-[30rem] items-end overflow-hidden rounded-xl'
      color='transparent'
    >
      <Image
        src={img}
        alt='bg'
        width={300}
        height={300}
        className='absolute inset-0 object-cover object-center w-full h-full'
      />
      <div className='absolute inset-0 bg-black/30' />
      <CardBody className='relative flex flex-col justify-end'>
        <Typography variant='h4' color='white'>
          {title}
        </Typography>
        <Typography
          variant='paragraph'
          color='white'
          className='mt-2 font-normal'
        >
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

const contents = [
  {
    img: '/Removing concrete.JPG',
    title: 'Asphalt Installation',
    desc: 'We provide high-quality asphalt installation services, delivering durable and smooth surfaces for residential, commercial, and municipal projects.',
  },
  {
    img: '/Paver Installation-2.JPG',
    title: 'Concrete Installation',
    desc: 'We specialize in reliable and long-lasting concrete installation services, tailored for driveways, sidewalks, foundations, and commercial spaces.',
  },
  {
    img: '/DSCF2275.JPG',
    title: 'Stone Masonry',
    desc: 'Our skilled stonemasonry services bring craftsmanship and durability to every project, from custom patios and walkways to elegant retaining walls and facades.',
  },
];

export function ContentSection4() {
  return (
    <section className='container px-8 py-10 mx-auto lg:py-28'>
      <Typography
        variant='h2'
        color='blue-gray'
        className='!text-3xl lg:!text-4xl'
      >
        Building Something Great
      </Typography>
      <Typography
        variant='lead'
        className='my-2 !text-gray-500  max-w-xl'
      >
        Our comprehensive construction services cover asphalt paving,
        concrete installation, and skilled stone masonry. From durable
        driveways and sturdy sidewalks to beautifully crafted stone
        features, we bring expertise and quality to every project,
        ensuring long-lasting and visually appealing results for
        residential, commercial, and municipal clients.
      </Typography>
      <div className='grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3'>
        {contents.map(({ img, title, desc }) => (
          <ContentCard
            key={title}
            img={img}
            title={title}
            desc={desc}
          />
        ))}
      </div>
    </section>
  );
}

export default ContentSection4;

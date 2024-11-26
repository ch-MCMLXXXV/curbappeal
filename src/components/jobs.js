'use client';

import { Typography, Chip } from '@material-tailwind/react';
import Image from 'next/image';

export function ContentSection7() {
  return (
    <section className='container px-8 py-10 mx-auto lg:py-28'>
      <div className='mb-10 text-center lg:mb-20'>
        {/* <Chip
          color='gray'
          value='co-working'
          size='lg'
          className='mx-auto mb-6 max-w-fit'
        /> */}
        <Typography variant='h2' color='blue-gray'>
          Some of Our Work
        </Typography>
        <Typography
          variant='lead'
          className='mt-4 max-w-4xl mx-auto !text-gray-500'
        >
          Curb Appeal is a professionally Licensed and insured
          Virginia Corporation who takes pride in doing the very best
          job possible in a timely manner with emphasis on customer
          satisfaction. .
        </Typography>
      </div>
      <div className='grid grid-cols-2 gap-6 mb-6 md:grid-cols-12'>
        <div className='col-span-2 h-[140px] sm:h-[150px] md:col-span-4'>
          <Image
            src='/grillclose.jpg'
            width={200}
            height={150}
            alt='photos'
            className='object-cover object-center w-full h-full rounded-lg shadow-md'
          />
        </div>
        <div className='col-span-1 h-[100px] sm:h-[150px] md:col-span-3'>
          <Image
            src='/grillfar.jpg'
            width={200}
            height={150}
            alt='photos'
            className='object-cover object-center w-full h-full rounded-lg shadow-md'
          />
        </div>
        <div className='col-span-1 h-[100px] sm:h-[150px] md:col-span-5'>
          <Image
            src='/firepit.jpg'
            width={200}
            height={150}
            alt='photos'
            className='object-cover w-full h-full rounded-lg shadow-md'
          />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6 md:grid-cols-12'>
        <div className='col-span-2 h-[140px] sm:h-[150px] md:col-span-3'>
          <Image
            src='/drivewaybefore.jpeg'
            width={200}
            height={300}
            alt='photos'
            className='object-cover w-full h-full rounded-lg shadow-md'
          />
        </div>
        <div className='col-span-1 h-[100px] sm:h-[150px] md:col-span-5'>
          <Image
            src='/drivewayafter.jpeg'
            width={200}
            height={150}
            alt='photos'
            className='object-cover w-full h-full rounded-lg shadow-md'
          />
        </div>
        <div className='col-span-1 h-[100px] sm:h-[150px] md:col-span-4'>
          <Image
            src='/image.jpeg'
            width={200}
            height={150}
            alt='photos'
            className='object-cover w-full h-full rounded-lg shadow-md'
          />
        </div>
      </div>
    </section>
  );
}

export default ContentSection7;

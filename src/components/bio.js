'use client';

import { Typography, Button } from '@material-tailwind/react';
import Image from 'next/image';

export function ContentSection5() {
  return (
    <section className='grid min-h-screen px-8 py-10'>
      <div className='grid items-center gap-10 mx-auto my-auto max-w-7xl place-items-center lg:grid-cols-2'>
        <div>
          <Image
            src='/bio.jpeg'
            width={700}
            height={700}
            alt='team work'
            className='mb-6 h-full lg:h-[370px] w-full shadow-lg rounded-xl object-cover object-center'
          />
        </div>
        <div className='lg:max-w-md'>
          <Typography
            variant='h2'
            color='blue-gray'
            className='mb-6 lg:text-3xl !text-2xl !leading-snug lg:max-w-sm'
          >
            Owner
          </Typography>
          <Typography className='text-base !font-normal mb-12 !text-gray-500'>
            Donald Wilson is a Retired Navy Chief with 24 years of
            Naval service. Prior to retiring he started a small
            business, building and installing custom mailboxes for
            homeowners, contractors, and Lowes Hardware. Drawing on
            his military training and expertise he quicky grew his
            business, Curb Appeal, into a highly successful concrete,
            masonry, and asphalt company. Curb has been doing business
            in the Tidewater area for more than 24 years with hundreds
            of satisfied customers as evident by his 5.0 review
            ratings.
            <br />
            {/* <br />
            For a start, it does not automatically follow that a
            record amount of ice will melt this summer. More important
            for determining the size of the annual thaw is the state
            of the weather as the midnight sun approaches and
            temperatures rise. But over the more than 30 years of
            satellite records, scientists have observed a clear
            pattern of decline, decade-by-decade. */}
          </Typography>
          {/* <Typography className='text-base !font-normal !text-gray-500'>
            The Arctic Ocean freezes every winter and much of the
            sea-ice then thaws every summer, and that process will
            continue whatever happens with climate change. Even if the
            Arctic continues to be one of the fastest-warming regions
            of the world, it will always be plunged into bitterly cold
            polar dark every winter. And year-by-year, for all kinds
            of natural reasons, there&apos;s huge variety of the state
            of the ice.
          </Typography> */}
        </div>
      </div>
    </section>
  );
}

export default ContentSection5;

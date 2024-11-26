'use client';

import { UserIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardBody,
  Typography,
  Avatar,
  CardHeader,
  IconButton,
} from '@material-tailwind/react';

function TestimonialCard({ img, feedback, client, title }) {
  return (
    <Card shadow={false} className='items-center text-center'>
      <CardHeader shadow={false} floated={false}>
        {/* <Avatar src={img} alt={client} size='lg' /> */}
      </CardHeader>
      <CardBody>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-medium'
        >
          {client}
        </Typography>
        <Typography
          variant='small'
          className='mb-4 mt-1 font-medium !text-gray-500'
        >
          {title}
        </Typography>
        <Typography
          variant='paragraph'
          className='mb-5 font-normal !text-gray-500'
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    feedback:
      'If you’re looking for reliable, high-quality paving, seal coating, concrete and masonry work, look no further than Curb Appeal. Their dedication to their craft and their customers is truly commendable.',
    client: 'Rick Michaud, CMCA',
    title:
      'General Manager, Bay Creek at Cape Charles Community Association',
    img: 'https://www.material-tailwind.com/img/avatar1.jpg',
  },
  {
    feedback:
      'As a class A Contractor working in the construction industry for decades, rarely have I seen  such a tight knit and professional organization as Curb Appeal. The Owner is first class with an expedient response time and his crews are some of the most hardworking I have been around. After a multitude of completed projects, the only feedback we gave received is how great the job is. I appreciate working with Donald and look forward to many more years to come.',
    client: 'Capt. Dan Hobby',
    title: 'President/Owner Acelutions',
    img: 'https://www.material-tailwind.com/image/avatar4.jpg',
  },
  {
    feedback:
      'Curb Appeal brick masons get 5 stars. I recently had four window lintels replaced. My house has unusual brick and unusual mortar. The repair perfectly matched the bricks and mortar. The masons and helpers were a pleasure to have around the house-courteous and pleasant. The boss, Donald Wilson, was knowledgeable, readily available, and eager to please. I would not hesitate to use Curb Appeal again!',
    client: 'William Oelrich',
    // title: 'CFO @ APPLE INC..',
    img: 'https://www.material-tailwind.com/image/avatar8.svg',
  },
  {
    feedback:
      'We have enjoyed a long-standing business relationship with Curb Appeal through McKown Pressure Washing, and it has been a fantastic experience. Over the years, we’ve collaborated on numerous projects, and their professionalism and commitment to quality have always stood out. Their team consistently delivers exceptional results, ensuring our projects look their best. We appreciate their reliability and attention to detail, making them a trusted partner in our endeavors. We look forward to many more successful projects together!',
    client: 'Stephanie Cathey',
    title:
      'Business Office Adminstrator, McKown Pressure Wash, Painting & Contracting',
    img: 'https://www.material-tailwind.com/image/avatar8.svg',
  },
];

export function TestimonialSection6() {
  return (
    <section className='px-8 py-10 lg:py-28'>
      <div className='container mx-auto'>
        <div className='mb-20 text-center'>
          <IconButton size='lg'>
            <UserIcon className='w-6 h-6' />
          </IconButton>
          <Typography
            variant='h2'
            color='blue-gray'
            className='mt-10 mb-4 text-3xl lg:text-5xl'
          >
            What Clients Say
          </Typography>
          <Typography
            variant='lead'
            className='mx-auto max-w-3xl !text-gray-500'
          >
            Here are a few testimonials from our satisfied customers.
          </Typography>
        </div>
        <div className='grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection6;

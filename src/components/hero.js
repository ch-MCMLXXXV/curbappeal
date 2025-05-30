'use client';

import React from 'react';

// @material-tailwind/react
import {
  Navbar,
  Button,
  Carousel,
  Collapse,
  IconButton,
  Typography,
} from '@material-tailwind/react';

// @heroicons/react
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  Square3Stack3DIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavItem({ href, children }) {
  return (
    <li>
      <Typography
        as='a'
        href={href}
        variant='paragraph'
        className='flex items-center gap-2 font-medium'
      >
        {children}
      </Typography>
    </li>
  );
}

function CarouselComponent({ items }) {
  return (
    <Carousel>
      {/** @ts-ignore */}
      {items.map((item, index) => (
        <div
          key={index}
          className='relative w-full h-full min-h-screen bg-center bg-no-repeat bg-cover'
          style={{ backgroundImage: `url(${item.bgImage})` }}
        >
          <div className='absolute inset-0 w-full h-full bg-black/30' />
          <div
            className={`absolute inset-0 flex items-center justify-center p-4`}
          >
            <div className='text-center'>
              <Typography
                variant='lead'
                color='white'
                className='mb-4 font-normal'
              >
                {item.subtitle}
              </Typography>
              <Typography
                variant='h1'
                color='white'
                className='mb-4 text-3xl md:text-4xl lg:text-5xl'
              >
                {item.title}
              </Typography>
              <Typography
                variant='lead'
                color='white'
                className='w-3/4 mx-auto mb-12 lg:w-4/4'
              >
                {item.description}
              </Typography>
              {/* <Button size='lg'>{item.label}</Button> */}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

const carouselItems = [
  {
    bgImage: '/frontstairs.jpg',
    subtitle: 'Make a Lasting Impression',
    title:
      'First impressions start at the curb. Let us help you make them unforgettable.',
    description:
      'From landscaping to hardscaping, we specialize in creating stunning entrances that stand out.',
    label: 'Discover Our Services',
  },
  {
    bgImage: '/patio.jpg',
    subtitle: 'Excellence in Every Detail',
    title: 'Transforming outdoor spaces, one project at a time',
    description:
      'Our team brings expertise and passion to every design, ensuring your vision becomes a reality.',
    label: 'Explore Our Projects',
  },
  {
    bgImage: '/firepit.jpg',
    subtitle: 'Redefine Your Curb Appeal',
    title: "Your home's beauty begins where the pavement ends.",
    description:
      'Let us enhance your outdoor spaces with taiored solutions that reflect your unique style',
    label: 'Contact Us Today',
  },
];

export function HeroSection18() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar
        fullWidth
        shadow={false}
        color='transparent'
        className='absolute z-50 border-0'
      >
        <div className='container flex items-center justify-between mx-auto'>
          <Typography color='white' className='text-lg font-bold'>
            Curb Appeal
          </Typography>
          <ul className='items-center hidden gap-8 ml-10 lg:flex'>
            <NavItem href='#bio'>
              <UserCircleIcon className='w-5 h-5' />
              Bio
            </NavItem>
            <NavItem href='#work'>
              <RectangleStackIcon className='w-5 h-5' />
              Services
            </NavItem>
            <NavItem>
              <Squares2X2Icon className='w-5 h-5' />
              About Us
            </NavItem>
            <NavItem>
              <UserGroupIcon className='w-5 h-5' />
              Testimonials
            </NavItem>
          </ul>
          {/* <div className='items-center hidden gap-4 lg:flex'>
            <Button variant='text' color='white'>
              Log in
            </Button>
            <Button color='white'>sign in</Button>
          </div> */}
          <IconButton
            variant='text'
            color='white'
            onClick={handleOpen}
            className='inline-block ml-auto lg:hidden'
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className='w-6 h-6' />
            ) : (
              <Bars3Icon strokeWidth={2} className='w-6 h-6' />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className='container px-6 py-5 mx-auto mt-4 bg-white rounded-lg'>
            <ul className='flex flex-col gap-4 text-gray-900'>
              <NavItem href='#bio'>
                <UserCircleIcon className='w-5 h-5' />
                Bio
              </NavItem>
              <NavItem href='#work'>
                <RectangleStackIcon className='w-5 h-5' />
                Services
              </NavItem>
              <NavItem>
                <Squares2X2Icon className='w-5 h-5' />
                About Us
              </NavItem>
              <NavItem href='#testimonials'>
                <UserGroupIcon className='w-5 h-5' />
                Testimonials
              </NavItem>
            </ul>
            {/* <div className='flex items-center gap-4 mt-6'>
              <Button variant='text'>Log in</Button>
              <Button color='gray'>sign in</Button>
            </div> */}
          </div>
        </Collapse>
      </Navbar>
      <div className='relative'>
        {/** @ts-ignore */}
        <CarouselComponent items={carouselItems} />
      </div>
    </>
  );
}

export default HeroSection18;

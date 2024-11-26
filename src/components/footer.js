'use client';

import { IconButton, Typography } from '@material-tailwind/react';

const links = [
  {
    title: 'Contact Us',
    items: [
      'curbappeal57@cox.net',
      'Chesapeake, VA',
      '(757)-681-1550',
      //   'Blog',
    ],
  },
  //   {
  //     title: 'Pages',
  //     items: ['Login', 'Register', 'Add List', 'Contact'],
  //   },
  //   {
  //     title: 'Legal',
  //     items: ['Terms', 'Privacy', 'Team', 'About Us'],
  //   },
  //   {
  //     title: 'Resourced',
  //     items: ['Blog', 'Services', 'Product', 'Pricing'],
  //   },
];

const currentYear = new Date().getFullYear();

export function Footer4() {
  return (
    <footer className='px-8 py-28'>
      <div className='container mx-auto'>
        <div className='grid justify-between grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='mb-8 md:mb-0'>
            <Typography variant='h6' className='mb-6 uppercase'>
              Curb Appeal
            </Typography>
            {/* <Typography className='mb-4 w-10/12 !text-base font-normal !text-gray-500 md:w-5/12 '>
              Next Level Masonary
            </Typography> */}
            <div className='flex gap-2'>
              <a href='#buttons-with-link'>
                <IconButton variant='text' size='sm'>
                  <i className='text-lg text-gray-500 transition-colors fa-brands fa-twitter hover:text-blue-gray-900' />
                </IconButton>
              </a>
              <a href='#buttons-with-link'>
                <IconButton variant='text' size='sm'>
                  <i className='text-lg text-gray-500 transition-colors fa-brands fa-youtube hover:text-blue-gray-900' />
                </IconButton>
              </a>
              <a href='#buttons-with-link'>
                <IconButton variant='text' size='sm'>
                  <i className='text-lg text-gray-500 transition-colors fa-brands fa-instagram hover:text-blue-gray-900' />
                </IconButton>
              </a>
              <a href='#buttons-with-link'>
                <IconButton variant='text' size='sm'>
                  <i className='text-lg text-gray-500 transition-colors fa-brands fa-github hover:text-blue-gray-900' />
                </IconButton>
              </a>
            </div>
          </div>
          <div className='grid justify-between grid-cols-2 gap-4 md:grid-cols-4'>
            {links.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant='h6'
                  color='blue-gray'
                  className='mb-2'
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as='a'
                      href='#'
                      className='py-1 font-medium !text-gray-500 transition-colors hover:!text-gray-900'
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className='flex flex-wrap justify-center py-6 mt-16 md:justify-center'>
          <Typography
            variant='small'
            className='font-normal !text-gray-500'
          >
            All rights reserved.
          </Typography>
          <Typography
            variant='small'
            className='font-normal !text-gray-500'
          >
            Copyright &copy; {currentYear} Curb Appeal
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer4;

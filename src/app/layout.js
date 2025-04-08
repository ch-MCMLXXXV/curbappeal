import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Curb Appeal |  Masonry,Concrete & More',
  description:
    'Discover professional curb appeal services for your home or business. We specialize in concrete, masonry, asphalt and more.',
  keywords: [
    'curb appeal',
    'masonry',
    'concrete',
    'stone work',
    'home improvement',
    'construction',
    'asphalt',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

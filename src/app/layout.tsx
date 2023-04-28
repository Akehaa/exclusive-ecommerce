import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const metadata = {
  title: {
    default: 'Exclusive',
    template: '%s | Exclusive'
  },
  description: 'Exclusive e-Commerce',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-poppins',
  // display: 'swap',
  fallback: ['sans','system-ui', 'arial']
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-inter',
  // display: 'optional',
  fallback: ['sans','system-ui', 'arial']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} font-poppins overflow-x-hidden`}>
      <body className='overflow-x-hidden'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

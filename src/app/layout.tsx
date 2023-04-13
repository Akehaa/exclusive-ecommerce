import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: {
    default: 'Exclusive',
    template: '%s | Exclusive'
  },
  description: 'Exclusive e-Commerce',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-poppins'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-inter'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} font-poppins`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

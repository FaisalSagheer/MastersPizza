
import { Inter, Lobster} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable:'--font-inter'
})
const lob = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster'
})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${lob.className} bg-gray-50`}>
      <body >{children}</body>
    </html>
  )
}
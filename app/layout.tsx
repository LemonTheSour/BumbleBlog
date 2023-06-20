import { Fredoka, Raleway_Dots } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
const fredoka = Fredoka({
  weight: ['400', '700'],
  subsets: ['latin'] 
})

const ralewaydots = Raleway_Dots({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'BumbleBlog',
  description: 'Bridgos Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}

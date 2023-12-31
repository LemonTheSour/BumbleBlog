import { Fredoka } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Provider } from './components/Provider'

const fredoka = Fredoka({
  weight: ['400', '600', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'BumbleBlog',
  description: 'Bridgos Blog',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <Provider>
        <body className={fredoka.className}>
          <Navbar/>
          <main>{children}</main>
        </body>
      </Provider>
    </html>
  )
}

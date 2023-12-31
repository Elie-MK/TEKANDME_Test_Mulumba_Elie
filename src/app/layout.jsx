import 'bootstrap/dist/css/bootstrap.css'
import { Orbitron } from 'next/font/google'
import '../styles/global.scss'
import BootstrapClient from '@/components/BootstrapClient'
import { AOSInit } from '@/components/AOSInit'


const orbitron = Orbitron({ subsets: ['latin'] })

export const metadata = {
  title: 'TEKANDME_TEST',
  description: 'Test',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <link rel="icon" href="/assets/Logo.jpg" sizes="any" />
      <body className={orbitron.className}>
        {children}
        <BootstrapClient />
        <AOSInit />
        </body>
    </html>
  )
}

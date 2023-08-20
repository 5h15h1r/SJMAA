import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'
import Sliderr from '@/components/Slider'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen'>
        <Navbar />
        <Sliderr />
        <Card title={"Events"} />
        <Footer />
    </main>
  )
}

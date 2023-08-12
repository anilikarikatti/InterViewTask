import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Timer from './task/timer'

export default function Home() {
  return (
   <>
    <Timer></Timer>
   </>
  )
}

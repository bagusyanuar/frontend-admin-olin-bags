import Image from 'next/image'
import { Inter } from 'next/font/google'
import LoginPage from '../components/pages/login'
import DragPage from '../components/pages/drag'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <DragPage message=''/>
  )
}

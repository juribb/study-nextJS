import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Seo from '@/components/Seo'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Seo title="Home" />
      <h1>home</h1>
      {/* <img src="/images/profile.jpg" alt="Your Name" /> */}
      {/* <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      /> */}
    </>
  )
}

export default Home;

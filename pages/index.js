import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name = "keywords" content = "ninjas"/>
      </Head>
    <div>
      <h1  className = {styles.title}>HOME</h1>
      <p  className = {styles.text}>Magna anim ad ea ullamco quis ea. Labore et ea minim labore labore deserunt aliqua labore. Nulla reprehenderit do excepteur magna sint anim pariatur ullamco occaecat in elit ea. Enim et ex ea anim ipsum non pariatur consectetur ut nisi nostrud nisi enim.</p>
      <p className = {styles.text}>Magna anim ad ea ullamco quis ea. Labore et ea minim labore labore deserunt aliqua labore. Nulla reprehenderit do excepteur magna sint anim pariatur ullamco occaecat in elit ea. Enim et ex ea anim ipsum non pariatur consectetur ut nisi nostrud nisi enim.</p>
      <Link href = "/ninjas">
        <a className = {styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}

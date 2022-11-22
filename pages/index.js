import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>R.J. Freund&apos;s Video Recordings of Singing</title>
      </Head>
      <h1>R.J. Freund&apos;s Video Recordings of Singing</h1>
      <div>
        <p>On This Day by David Pomeranz</p>
        <p>2022-11-19</p>
        <video src="IMG_8428_x264.mp4" controls />
      </div>
      <div>
        <p>Wonderful Tonight by Eric Clapton</p>
        <p>2022-11-19</p>
        <video src="IMG_8429_x264.mp4" autoPlay controls />
      </div>
    </>
  )
}

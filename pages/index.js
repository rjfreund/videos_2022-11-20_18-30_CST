import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>R.J. Freund&apos;s Video Recordings of Singing</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      </Head>
      <div className='container text-center py-4'>
        <h1 className='mb-4'>R.J. Freund&apos;s Video Recordings of Singing</h1>
        <div className='d-flex flex-column mb-3 gap-5'>
          <div className='card m-auto' style={{ width: "18rem" }}>
            <video className='card-img-top' src="IMG_8428_x264.mp4" controls />
            <div className='card-body'>
              <h5 className='card-title text-center'>On This Day by David Pomeranz</h5>
              <p className='card-text text-center'>2022-11-19</p>
            </div>
          </div>
          <div className='card m-auto' style={{ width: "18rem" }}>
            <video className='card-img-top' src="IMG_8429_x264.mp4" controls />
            <div className='card-body'>
              <h5 className='card-title text-center'>Wonderful Tonight by Eric Clapton</h5>
              <p className='card-text text-center'>2022-11-19</p>
            </div>


          </div>
        </div>


      </div>
    </>
  )
}

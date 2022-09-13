import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>@dysbulic’s Home</title>
        <meta name="description" content="@dysbulic’s homepage."/>
        <link rel="shortcut icon" href="/favicon.svg"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>@dys’s Homepage</h1>
        <h2><a href="//dys.ygg.army">
          <span style={{ color: 'red'}}>{'//'}</span>
          <span style={{ color: 'purple' }}>dys</span>
          <span style={{ color: 'blue' }}>.</span>
          <span style={{ color: 'purple' }}>ygg</span>
          <span style={{ color: 'blue' }}>.</span>
          <span style={{ color: 'purple' }}>army</span>
        </a></h2>

        <a href="//ygg.army">
          <object data="cover.svg" style={{ height: 'calc(100vh)', width: '100vw' }}>
          </object>
        </a>
      </main>

      <footer className={styles.footer}>
        <ul style={{ listStyle: 'none' }}>
          <li>Last Updated</li>
          <li title="Hijri">1444⁄<span style={{ direction: 'rtl' }}>صَفَر</span>⁄16</li>
          <li>≡</li>
          <li title="Gregorian">2022⁄September⁄13</li>
          <li>≡</li>
          <li title="13-Sign Zodiac">-2⁄Leo⁄34</li>
        </ul>
      </footer>
    </div>
  )
}

export default Home

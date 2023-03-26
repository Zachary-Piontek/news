
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Newsreader } from 'next/font/google'
import RSSFeed from './components/RssFeeds'

const inter = Inter({ subsets: ['latin'] })

const newsFont = Newsreader({ 
  subsets: ['latin'],
  weight: ['400', '500'], 
})

export default async function Home() {

  return (
    <main className={newsFont.className} >
      <div className={styles.div}>
        <h1>Filipino News</h1>
        <RSSFeed />
      </div>
    </main>
  )
}

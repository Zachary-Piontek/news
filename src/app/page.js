import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import xml2js from 'xml2js'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const data = await fetch(`https://moxie.foxnews.com/google-publisher/latest.xml`, {
    cache: 'no-cache',
  })
  const xml = await data.text()
  const parser = new xml2js.Parser()
  const result = await parser.parseStringPromise(xml)
  console.log(result)
  console.log(result.rss.channel[0].item[0])

  return (
    <main className={styles.main}>
      <div>
        <h1>Filipino News</h1>
        <ul>
          {result.rss.channel[0].item.map((item, index) => {
            const hasImage =
              item.hasOwnProperty('media:content') && item['media:content'].length > 0
            const imageUrl = hasImage ? item['media:content'][0].$.url : ''
            return (
              <li key={index}>
                <h3 className={styles.title}>{item.title[0]}</h3>
                <p className={styles.description}>{item.description[0]}</p>
                <p className={styles.description}>{item.pubDate[0]}</p>
                {hasImage && <Image src={imageUrl} alt='News Image' width={500} height={500} />}
              </li>
            )
          })}
        </ul>
      </div>
    </main>

  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Newsreader } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const newsFont = Newsreader({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
})

export default async function Home() {
  const response = await fetch(`https://google-news-api1.p.rapidapi.com/search?language=EN&q=philippines&sort=date%3Adesc&limit=20`, {
    headers: {
      'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.GOOGLE_NEWS_API_KEY,
    }
   }
  )

  const data = await response.json()

  return (
    <main className={newsFont.className} >
      <div className={styles.div}>
        <h1>Filipino News</h1>
        <ul className={styles.newsContainer} >
          {data.news.news.map((article, index) => (
            <li key={index} className={styles.newsCards}>
              <a href={article.link} target="_blank" rel="noreferrer">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <img className={styles.newsImages} src={article.props.image} alt={article.title} />
              <p>{new Date(article.date).toLocaleString()}</p>
              </a>
              {/* <Image src={article.props.image} alt={article.title} width={300} height={300} /> need to figure out next.config domains */}
              </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

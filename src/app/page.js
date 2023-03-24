import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const response = await fetch(`https://philippine-news.p.rapidapi.com/latest?limit=15`, {
    headers: {
      'x-rapidapi-host': 'philippine-news.p.rapidapi.com',
      'x-rapidapi-key': process.env.PHILIPPINES_NEWS_API_KEY
    }
  })

  const data = await response.json()
  console.log(data)

  return (
    <main className={styles.main}>
      <div>
        <h1>Filipino News</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.date}>{item.date}</p>
            <p className={styles.source}>{item.source}</p>
            <p className={styles.url}>{item.url}</p>
            <Image
               src={item.image}
                alt={item.title}
                width={500}
                height={500}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}


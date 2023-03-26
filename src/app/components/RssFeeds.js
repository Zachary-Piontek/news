import xml2js from 'xml2js'
import styles from '../page.module.css'

export default async function RssFeeds() {

    const inquirer = await fetch('https://www.inquirer.net/fullfeed/', {
        revalidate: 120,
    })
    const inquirerText = await inquirer.text()
    const inquirerJson = await xml2js.parseStringPromise(inquirerText)

    console.log(inquirerJson.rss.channel[0].item[0]['media:content'][0]['$'])

    return (
        <div className={styles.rssfeeds}>
            <ul>
                {inquirerJson.rss.channel[0].item.map((item, index) => {
                    const mediaContent = item['media:content'][0]['$'];
        return (
          <li key={index}>
            <p className="title">{item.title}</p>
            <a href={item.link}>{item.link}</a>
            {mediaContent && (
              <img src={mediaContent.url} alt={item.title} />
            )}
          </li>
                    )
                })}
            </ul>
        </div>
    )
}
import xml2js from "xml2js";
import styles from "../page.module.css";
import Image from "next/image";
import { Carter_One } from "next/font/google";

const newsFont = Carter_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function SportsFeed() {
  const rssCombined = await fetch(
    "https://rss.app/feeds/_6FAaJBwDPJ1otpeC.xml",
    {
      cache: "no-cache",
    }
  );
  const rssCombinedText = await rssCombined.text();
  const rssCombinedJson = await xml2js.parseStringPromise(rssCombinedText);

  console.log(rssCombinedJson.rss.channel[0].item);

  return (
    <div className={styles.div}>
      <div className={styles.rssfeeds}>
        <h2 className={`${newsFont.className} ${styles.newsFont}`}>Visayas</h2>
        <ul className={styles.newspaperPage}>
          {rssCombinedJson.rss.channel[0].item.map((item, index) => {
            const mediaContent =
              item["media:content"] && item["media:content"][0];
            // Convert item.description to a string and remove HTML tags
            const description = item.description
              .toString()
              .replace(/<[^>]*>?/gm, "");
            return (
              <li key={index}>
                <h3 className="title">{item.title}</h3>
                <p className="description">{description}</p>
                {mediaContent && (
                  <Image
                    src={mediaContent.$.url}
                    alt={item.title}
                    width={400}
                    height={400}
                  />
                )}
                <a href={item.link}>Read More</a>
                <p>{new Date(item.pubDate).toLocaleString()}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

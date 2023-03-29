import xml2js from "xml2js";
import styles from "../page.module.css";
import Image from "next/image";

export default async function RssFeeds() {
  const rssCombined = await fetch(
    "https://rss.app/feeds/Ki9xo9U48CHNbCnw.xml",
    {
      next: { revalidate: 60 },
      cache: "no-cache",
    }
  );
  const rssCombinedText = await rssCombined.text();
  const rssCombinedJson = await xml2js.parseStringPromise(rssCombinedText);

  console.log(rssCombinedJson.rss.channel[0].item);

  return (
    <div className={styles.rssfeeds}>
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
              <p className="title">{item.title}</p>
              <p className="description">{description}</p>
              {mediaContent && (
                <Image
                  src={mediaContent.$.url}
                  alt={item.title}
                  width={200}
                  height={200}
                />
              )}
              <a href={item.link}>Read More</a>
              <p>{new Date(item.pubDate).toLocaleString()}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

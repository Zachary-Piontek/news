import xml2js from "xml2js";
import styles from "../page.module.css";
import sanitizeHtml from "sanitize-html";
import Image from "next/image.js";

export default async function RssFeeds() {
  const inquirer = await fetch("https://www.inquirer.net/fullfeed/", {
    cache: "no-cache",
  });
  const inquirerText = await inquirer.text();
  const inquirerJson = await xml2js.parseStringPromise(inquirerText);

  const rssCombined = await fetch(
    "https://rss.feedspot.com/folder/5RfLtmMZ6w==/rss/rsscombiner",
    {
      cache: "no-cache",
    }
  );
  const rssCombinedText = await rssCombined.text();
  const rssCombinedJson = await xml2js.parseStringPromise(rssCombinedText);

  //   console.log(rssCombinedJson.rss.channel[0].item[0]);

  return (
    <div className={styles.rssfeeds}>
      <ul>
        {inquirerJson.rss.channel[0].item.map((item, index) => {
          const mediaContent = item["media:content"][0]["$"];
          const sanitizedDescription =
            typeof item.description === "string"
              ? sanitizeHtml(item.description)
              : item.description;
          return (
            <li key={index}>
              <p className="title">{item.title}</p>
              <a href={item.link}>
                {/* <img src={mediaContent.url} alt={item.title} /> */}
                <Image
                  src={mediaContent.url}
                  alt={item.title}
                  width={300}
                  height={300}
                />
              </a>
              <a href={item.link}>Read More</a>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              ></p>
              <p>{new Date(item.pubDate).toLocaleString()}</p>
            </li>
          );
        })}
      </ul>
      <ul>
        {rssCombinedJson.rss.channel[0].item.map((item, index) => {
          const sanitizedDescription =
            typeof item.description === "string"
              ? sanitizeHtml(item.description)
              : item.description;
          return (
            <li key={index}>
              <p className="title">{item.title}</p>
              {/* <img src={item.enclosure[0].$.url} alt={item.title} /> */}
              <Image
                src={item.enclosure[0].$.url}
                alt={item.title}
                width={300}
                height={300}
              />
              <a href={item.link}>Read More</a>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              ></p>
              <p>{new Date(item.pubDate).toLocaleString()}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import xml2js from "xml2js";
import styles from "../page.module.css";
import sanitizeHtml from "sanitize-html";

export default async function RssFeeds() {
  const inquirer = await fetch("https://www.inquirer.net/fullfeed/", {
    next: { revalidate: 120 },
  });
  const inquirerText = await inquirer.text();
  const inquirerJson = await xml2js.parseStringPromise(inquirerText);

  const rssCombined = await fetch(
    "https://rss.feedspot.com/folder/5RfLtmMZ6w==/rss/rsscombiner",
    {
      next: { revalidate: 120 },
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
          console.log(item); // add this line to log the contents of the item object
          return (
            <li key={index}>
              <p className="title">{item.title}</p>
              <a href={item.link}>
                <img src={mediaContent.url} alt={item.title} />
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
          return (
            <li key={index}>
              <p className="title">{item.title}</p>
              <img src={item.enclosure[0].$.url} alt={item.title} />
              <a href={item.link}>Read More</a>
              <p className="description">{item.description}</p>
              <p>{new Date(item.pubDate).toLocaleString()}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

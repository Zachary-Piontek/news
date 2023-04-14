import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Carter_One } from "next/font/google";
import RSSFeed from "./components/RssFeeds";

const inter = Inter({ subsets: ["latin"] });

const newsFont = Carter_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Home() {
  return (
    <main>
      <div className={styles.div}>
        <h1 className={`${newsFont.className} ${styles.newsFont}`}>
          The Philippine Sun
        </h1>
        <RSSFeed />
      </div>
    </main>
  );
}

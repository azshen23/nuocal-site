import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nuocal</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} `}>
        <h1 className="text-4xl font-bold">Site is coming soon...</h1>
        <Link href="/devlog">
          <h2 className="text2xl font-bold underline cursor-pointer">
            Check out the devlog
          </h2>
        </Link>
      </main>
    </div>
  );
}

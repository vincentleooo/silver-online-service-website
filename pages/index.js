import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import firstPicture from "../public/images/first-picture.webp";
import phonePicture from "../public/images/phone.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Silver Online Service</title>
        <meta name="description" content="A phone navigation tool for seniors." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{maxWidth: "400px", transform: "translateY(80px)", zIndex: -99}}>
          <Image src={phonePicture} alt="Hand holding a phone with SOS app."/>
        </div>
        <h1 className={styles.title}>Silver Online Service</h1>
        <h2 className={styles.tagLine}>A phone navigation tool for seniors.</h2>
        {/* <button className={styles.button}>Sign Up Now!</button> */}
        {/* <Image src={firstPicture}></Image> */}
      </main>
    </div>
  );
}

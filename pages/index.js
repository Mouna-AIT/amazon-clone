import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Just a small Next.js Project" />
        <link rel="icon" href="/amazon-png-logo-vector-6708.png" />
      </Head>

      <Header />
      <main className= 'max-screen-2xl mx-auto'>
         {/*banner*/}
         <Banner/>

         {/*feeds*/}
      </main>
    </div>
  );
}

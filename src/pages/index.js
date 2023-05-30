import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import About from "@/Components/About";
import Opening from "@/Components/Opening";
import Social from "@/Components/Social";
import NavFoot from "@/Components/NavFoot";
import InstaFotos from "@/Components/InstaFotos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Santa Rita Gigantes</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <NavBar />
          <Header />
          <Cards />
          <About />
          <Opening />
          <Social />
          <InstaFotos />
          <NavFoot />
        </div>
      </main>
    </>
  );
}

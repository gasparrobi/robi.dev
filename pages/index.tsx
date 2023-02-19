/* eslint-disable react/jsx-no-target-blank */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>[WIP] Hey, I&apos;m Robi</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-between min-h-screen p-4 md:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://techfizu.robi.dev"
            className={styles.card}
            target="_blank"
            rel="noopener"
          >
            <h2 className={inter.className}>
              techfizu.robi.dev <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Stats about software dev salaries in Hungary
            </p>
          </a>

          <a
            href="https://inflacio.robi.dev"
            className={styles.card}
            target="_blank"
            rel="noopener"
          >
            <h2 className={inter.className}>
              inflacio.robi.dev <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Calculate the depreciation of your money
            </p>
          </a>

          <a
            href="https://frontendfizu.robi.dev"
            className={styles.card}
            target="_blank"
            rel="noopener"
          >
            <h2 className={inter.className}>
              frontendfizu.robi.dev <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Stats about frontend dev salaries in Hungary
            </p>
          </a>

          <a
            href="https://budget.robi.dev"
            className={styles.card}
            target="_blank"
            rel="noopener"
          >
            <h2 className={inter.className}>
              budget.robi.dev <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              You can get insights about your past expenses (only OTP Bank users
              for now)
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next js</title>
        <meta name='Azizjon' content='this is test' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic culpa
        reprehenderit provident nobis ipsa tenetur maiores, aspernatur veniam
        quo, corporis illum consectetur ullam, labore vitae porro maxime?
        Itaque, iste magnam?
      </h1>
    </div>
  );
}

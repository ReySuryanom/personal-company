import Head from 'next/head';
import * as Section from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Profile Company website generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-hero px-[105px]">
        <Section.Hero />
      </header>
      <Section.About />
      <Section.Features />
      <Section.Products />
      <Section.Authors />
    </>
  );
}
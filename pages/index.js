import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link
          rel="icon"
          href="https://secure.webtoolhub.com/static/resources/icons/set111/63f29b37.png"
        />
      </Head>

      <Header />
    </div>
  );
}

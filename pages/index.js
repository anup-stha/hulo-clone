import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";

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
      <Nav />
    </div>
  );
}

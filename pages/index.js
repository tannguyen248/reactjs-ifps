import Head from "next/head";
import App from "../components/app/App";

export default function Home({ images }) {
  return (
    <>
      <Head>
        <title>Tan's demo</title>
        <meta name="description" content="I am a Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <App images={images} />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://pixabay.com/api/?key=21955956-28046ca4ff5401b273c44dd05&page=1&per_page=50&safesearch=true`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const images = data.hits.map((image) => ({
    id: image.id,
    largeImageURL: image.largeImageURL,
    webformatURL: image.webformatURL,
    ratio: image.imageWidth / image.imageHeight,
    tags: image.tags,
    width: image.imageWidth,
    height: image.imageHeight,
  }));

  return {
    props: { images },
  };
}

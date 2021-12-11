import Head from 'next/head'

const Layout = ({ advanced, title, content, image, description, route }) => (
  <>
    <Head>
      <title>{`${title} - CryptoNation`}</title>
      <meta name="description" content={content} />
      {advanced && (
        <Head>
          <meta property="og:title" content={`${title} - CryptoNation`} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={image} />
          <meta property="og:description" content={description} />
          <meta
            property="og:url"
            content={`https://cryptonation.vercel.app/${route}`}
          />
        </Head>
      )}
    </Head>
  </>
)

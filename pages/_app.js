import Head from 'next/head'

// Components
import NavBar from '../components/navbar'
import GlobalStyle from '../components/globalStyle'
import ThemeToggler from '../components/theme-toggler'

const Website = ({ Component, router, pageProps }) => {
  return (
    <>
      <Head>
        <title>CryptoNation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="A exchange Cryptocurrencies App" />
        <meta property="og:title" content="CryptoNation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/HIAE4CA.jpg" />
        <meta
          property="og:description"
          content="A exchange Cryptocurrencies App"
        />
        <meta property="og:url" content="pokedrip.netlify.app" />
      </Head>
      <ThemeToggler Nav={NavBar}>
        <GlobalStyle />
        <Component {...pageProps} key={router.route} />
      </ThemeToggler>
    </>
  )
}
export default Website

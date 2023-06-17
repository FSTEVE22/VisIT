import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel='stylesheet' href='style.css' />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

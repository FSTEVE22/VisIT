import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel='stylesheet' href='style.css' />
      <title>VisIT | Salon d'événements virtuels</title>
      <link
        rel='shortcut icon'
        type='image/x-icon'
        href='/assets/IT.png'
      />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

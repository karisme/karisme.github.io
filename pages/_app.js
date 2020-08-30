import "../styles/global-dark.css"
import Head from 'next/head'
import { siteTitle } from "../components/layout"

export default function App({ Component, pageProps }) {
    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
            <title>{siteTitle}</title>
            <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Head>  
    <Component {...pageProps} />
    </>
    )
}
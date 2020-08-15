import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import Link from 'next/link'
import TypeIt from "typeit-react";
import Date from '../components/date'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <TypeIt 
            options={{
              lifelike: true,
              loop: true
            }}
            getBeforeInit={instance => {
              instance
                .type("Wannabe Software Engineer, trying to make it. Don't ev")
                .pause(250)
                .delete(2)
                .pause(200)
                .type("@ me after the come up");
          
              return instance;
            }}
          />
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Featured Projects</h2>
      </section>
    </Layout>
  )
}

// if i want to use JS to load, and keep static parts: https://swr.vercel.app/

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // blahblah
//     }
//   }
// }

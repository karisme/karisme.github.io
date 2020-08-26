import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import Link from 'next/link'
import TypeIt from "typeit-react";
import Date from '../components/date'
import Baffle from "baffle-react";

export default function Home() {
  return (
    <>
    <Baffle
        speed={125}
        characters="█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░"
        exclude={[" ", "!"]}
        obfuscate={false}
        revealDuration={5000}
      > 
        I'd like to add baffling because it looks cool. 
    </Baffle>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
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
    </>
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

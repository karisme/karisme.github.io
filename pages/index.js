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
    <Layout home>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <title>{siteTitle}</title>
        <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
      </Head> 
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.intro}>Hello! My name is Ali, welcome to my website!</div>
        <div className={utilStyles.intro}>
          <TypeIt
            options={{
              lifelike: true,
              loop: true
            }}
            getBeforeInit={instance => {
              instance
                .type("I'm a Software Engineer")
                .pause(350)
                .delete(19)
                .pause(300)
                .type("Senegalese")
                .pause(300)
                .delete(10)
                .pause(300)
                .type("a Student")
                .pause(300)
                .delete(9)
                .pause(300)
                .type("a Hacker")
                .pause(300)
                .delete(8)
                .pause(300)
                .type("an Anime addict")
                .go()
          
              return instance;
            }}
          ></TypeIt>
        </div>
      </section>
      <br />
      <br />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          <Baffle
            speed={125}
            characters="█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░"
            exclude={[" ", "!"]}
            obfuscate={false}
            revealDuration={5000}
            > Featured Projects
          </Baffle> 
        </h2>

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

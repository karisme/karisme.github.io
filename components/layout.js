import styles from "./layout.module.css"
import Head from "next/head"
import Link from "next/link"
import utilStyles from "../styles/utils.module.css"
import Particles from 'react-particles-js'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

export const siteTitle = "Ali's Personal Website"

function Layout({ children, home }) {
    return (
        <div>
            <Particles
            params={{
                "fps_limit": 28,
                "particles": {
                    "collisions": {
                        "enable": false
                    },
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 30,
                        "opacity": 0.4
                    },
                    "move": {
                        "speed": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "opacity_min": 0.05,
                            "speed": 2,
                            "sync": false
                        },
                        "value": 1.6
                    }
                },
                "retina_detect": false,
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "size": 6,
                            "distance": 40
                        }
                    }
                }
            }} 
            className={ utilStyles.particles }
            />
            <Navbar sticky='top' collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="#home">Ali Ka</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/bio">About</Nav.Link>
                    <Nav.Link href="#pricing">Portfolio</Nav.Link>
                    <Nav.Link href="#pricing">Bookshelf</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Resume</Nav.Link>
                    {/* <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a> ← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
        </div>
    )
}

export default Layout
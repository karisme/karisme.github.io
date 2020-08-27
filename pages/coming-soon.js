import Layout from "../components/layout"
import Baffle from "baffle-react";

export default function Soon() {
    return (
        <Layout>
            <Baffle
                speed={125}
                characters="█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░"
                exclude={[" ", "!"]}
                obfuscate={false}
                revealDuration={5000}
                > Under Construction
            </Baffle> 
        </Layout>
    )
}
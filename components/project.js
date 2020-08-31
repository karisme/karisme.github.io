import styles from './project.module.css'
import Baffle from 'baffle-react'
import * as data from '../public/project_data/project_descriptions'

// Component was built to be used anywhere project information is to be displayed, namely the landing page
// and the portfolio page. Whenever this component is to be used, refer to /public/project_data/project_descriptions to see 
// which name and length is desired. The picture associated with each project will always match the definition found in the description file.

function Project({ name, length }) {
    const image_source = "project_data/" + name + ".png";
    return (
        <div className={ styles.container }>
            <img className={ styles.image } src={ image_source } alt="Project Picture" />
            <div className= { styles.description }>
                <Baffle
                    speed={115}
                    characters="█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░" 
                    exclude={[" ", "!"]}
                    obfuscate={false}
                    revealDuration={8000}
                > { data.desc[name]["title"] }
                </Baffle> 
                <br />
                <br />
                { data.desc[name][length] }
            </div>
        </div>
    )
}

export default Project
import ProjectForm from '../projects/ProjectForms'

import styles from './NewProject.module.css'

function NewProjet(){
    return (
        <div className={styles.newproject_container}>
            <h1>Criar paragrafo</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>

            <ProjectForm btnText="Criar projeto"/>
        </div>
    )
}

export default NewProjet
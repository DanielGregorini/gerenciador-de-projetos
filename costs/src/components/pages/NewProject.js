import { useNavigate } from 'react-router-dom'
import ProjectForm from '../projects/ProjectForms'

import styles from './NewProject.module.css'

function NewProjet(){

    const navigate = useNavigate()

    function createPost(project) {
        // intialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) =>  {
            const state = { message: "Projeto criado com sucesso!" };
            navigate("/projects", {state});
        
        })
            .catch((err) => console.log(err));
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar paragrafo</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>

            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProjet
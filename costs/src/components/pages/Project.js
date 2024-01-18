import styles from './Project.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project(){

    const { id } = useParams()
    
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) =>  {
            setProject(data)
        })
            .catch((err) => console.log(err));

    }, [id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    return (
        <>
            {project.name ? (
                
               <div className={styles.project_details}>
                <Container customClass="column">
                    <div>
                        <h1>Projeto: {project.name}</h1>
                        <button onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'fechar'}</button>
                    </div>

                    {!showProjectForm ? (

                        <div className={styles.project_info}>
                            <p> 
                                <span>Categoria:</span> {project.category.name}  
                            </p>
                            <p> 
                                <span>Total de Orçamento:</span> {project.budget}  
                            </p>
                            <p> 
                                <span>Total de Utilizado:</span> {project.cost}  
                            </p>
                        </div>
                    ) : (
                        <div className={styles.project_info}>
                            <p>Detalhes do project</p>
                        </div>
                    )}

                </Container>
               </div>
            ) 
            : (
                <Loading/>
            )}
        </>
    )
}

export default Project 
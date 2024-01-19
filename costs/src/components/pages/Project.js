import styles from './Project.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../projects/ProjectForms'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project(){

    let { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [services, setServices] = useState([])
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')

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

    function editPost(project) {
        
        if (project.budget < project.cost) {
          setMessage('O Orçamento não pode ser menor que o custo do projeto!')
          setType('error')
          return false
        }
    
        fetch(`http://localhost:5000/projects/${project.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data)
            setShowProjectForm(!showProjectForm)
            setMessage('Projeto atualizado!')
            setType('success')
          })
      }


    return (
        <>
            {project.name ? (
                
               <div className={styles.project_details}>
                <Container customClass="column">
                    <div>
                        <h1>Projeto: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'fechar'}</button>
                    </div>

                    {!showProjectForm ? (

                        <div className={styles.form}>
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
                            <ProjectForm
                               handleSubmit={editPost} 
                               btnText="Concluir edição"
                               projectData={project}

                            />
                            
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
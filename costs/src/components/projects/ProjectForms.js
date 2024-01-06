import styles from './ProjectForm.module.css'

import Input from '../form/Input'

function ProjectForm(){
    return (
        <form className={styles.form}>
            
            <Input 
                type="text" 
                text="Nome do projeto"
                name = "name"
                placeholder="Insira o nome do projeto"
            />

            <Input 
                type="number" 
                text="Orçamento do projeot"
                name = "budget"
                placeholder="Insira o orçamento total do projeto"
            />

            <div>
                <select name="category_id">
                    <option disabled>Selecione a Cagetoria</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Criar projeto"/>
            </div>
           
        </form>
    )
}

export default ProjectForm
import React, {useSate} from 'react'

export const teste = () => {
    const [tarefas, setTarefas] = useState([])

    const handleDelete = (index) => { 
          const newTarefas =  [...tarefas]  
          newTarefas.map((newTarefa)=>{ 
            if(newTarefa.key === index) {
                newTarefa.pop(index) 
            } 
          })  

          setTarefas(newTarefas)
    }

    const handleUpdate = () => { 
        const infoUser = input.value
        const newTarefas = [...tarefas]
        newTarefas.push(infoUser)
        setTarefas(newTarefas)
    }

    
    
  return (
   <div>
   { 
    tarefas.map((tarefa, index) =>{ 
        <div key="index" className = "qualquer">{tarefa}</div>
    })

   }
   </div>

  )
}

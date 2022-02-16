import { ChangeEvent, useState } from 'react'
import { usePeopleList} from './reducers/peopleList'



const App = () =>  {
  const [list, dispatch] = usePeopleList();
  const [nameInput, SetNameInput] = useState('');




  const handleAddButton = () => {
    if(nameInput){
      dispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      })
      SetNameInput('');
    }
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    SetNameInput(e.target.value)
  }
  const deletePerson = (id:string) => {
    dispatch({
      type: 'DELL',
      payload: {
        id,
      }
    })
  }
 
  const handleOrderButton = () => {
    dispatch({
      type: 'ORDER',
    })
  }

  return (
    <div className="App">

      

      <input type="text" value={nameInput} onChange={handleInputChange} />
      <br />
      <button onClick={handleAddButton}>Adicionar</button>
      <br />

      <button onClick={handleOrderButton}>Ordenar</button>

      
      <hr />
      Lista de Pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
                <button onClick = {() => deletePerson(item.id)}>Deletar</button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

import { useState } from 'react'
import * as style from './App.styles'
import {Item} from './types/item'
import {ListItem} from './components/listItem'
import {AddArea} from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    // {id: 1, name: "Comprar o pão na padaria", done: false},
    // {id: 1, name: "Comprar um bolo na padaria", done: false}
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return (
    <div>
      <style.Container>
        <style.Area>
          <style.Header>Lista de Tarefas</style.Header>

          <AddArea onEnter={handleAddTask}/>

          {list.map((item, i) => (
            <ListItem key={i} item={item}/>
          ))}
        </style.Area>
      </style.Container>
    </div>
  )
}
export default App
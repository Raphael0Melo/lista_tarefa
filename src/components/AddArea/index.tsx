import { KeyboardEvent, useState } from 'react'
import * as style from './style'

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
  const [inputText, setInputText] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== '') {
      onEnter(inputText)
      setInputText('')
    }
  }
  
  return (
    <style.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione um tarefa"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </style.Container>
  )
}
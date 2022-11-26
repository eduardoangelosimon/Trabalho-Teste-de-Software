import { useState } from "react"
import { AddButton, Container, Input, InputContainer, ListItem, ListItemContainer, RemoveButton, SubContainer } from "./styles";

type ListProps = {
  initialItems: string[]
}

function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(initialItems);

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem]);
    }, 500)
  }

  function removeFromList(item: string) {
    setTimeout(() => {
      setList(state => state.filter(item => item !== item));
    }, 500)
  }

  return (
      <Container>
        <SubContainer>
          <h1>Trabalho de Teste de Software</h1>
          <InputContainer>
            <Input placeholder="Nome do integrante" value={newItem} onChange={e => setNewItem(e.target.value)} />
            <AddButton onClick={addToList}>Adicionar</AddButton>
          </InputContainer>
          <ul>
            {list.map(item => (
              <ListItemContainer>
                <ListItem key={item}>
                  {item}  
                </ListItem>
                <RemoveButton onClick={() => removeFromList(item)}>X</RemoveButton>
              </ListItemContainer>
            ))}
          </ul>
        </SubContainer>
      </Container>
  )
}

export default List

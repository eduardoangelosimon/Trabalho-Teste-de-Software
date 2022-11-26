import styled from 'styled-components'

export const Container = styled.div`
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
`

export const SubContainer = styled.div`
    background-color: #e9e9e9;
    padding: 2rem;
    border-radius: 1rem;
`

export const Input = styled.input`
    width: 15rem;
    height: 3rem;
    font-size: 1.5rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: none;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const AddButton = styled.button`
    background-color: #00ff00;
    border: none;
    border-radius: 0.5rem;
    padding: 0 1rem;
    font-size: 1.2rem;
`

export const RemoveButton = styled.button`
    width: 5rem;
    padding: 0.5rem 1rem;
    border-radius: 0 0.5rem 0.5rem 0 ;
    background-color: #fff;
    margin-bottom: 0.5rem;
    border: none;
    background-color: #e00;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
`

export const ListItem = styled.li`
    width: 100%;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem 0 0 0.5rem;
    background-color: #fff;
    margin-bottom: 0.5rem;
    font-weight: 400;
`

export const ListItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
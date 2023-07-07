import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};

  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1120px;

  padding: 0 1.5rem;
  margin: 0 auto;
`

export const NewTransactionButton = styled.button`
  background: ${(props) => props.theme['green-500']};
  height: 50px;

  padding: 0 1.25rem;
  border: 0;
  border-radius: 6px;

  color: ${(props) => props.theme.white};
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`

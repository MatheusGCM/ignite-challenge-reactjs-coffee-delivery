import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`
export const FlexDirectionRow = styled.div`
  display: flex;
  /* border: 1px solid red; */
  gap: 0.75rem;
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  /* margin-bottom: 1rem; */
`

export const ButtonContainer = styled.label<{
  $isSelected?: boolean
  $error?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  gap: 0.75rem;
  border: 1px solid
    ${({ $isSelected, $error, theme }) =>
      $error ? 'red' : $isSelected ? theme.purple : theme['base-button']};
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? `${theme['purple-light']}` : `${theme['base-button']}`};
  border-radius: 0.375rem;

  cursor: pointer;
  transition: 300ms;

  input {
    display: none;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

import styled from 'styled-components'

export const InputNumberContainer = styled.div<{ $height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: ${(props) => props.$height}rem;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 0.375rem;
  margin-right: 0.5rem;

  background-color: ${(props) => props.theme['base-button']};

  span {
    width: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3rem;
  }
`

export const StyleIcon = styled.button`
  display: flex;
  color: ${(props) => props.theme.purple};
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

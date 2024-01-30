import styled from 'styled-components'

export const CartContainer = styled.button<{
  $backgroundColor: string
  $hasHover: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  cursor: pointer;

  padding: 0.5rem;
  border-radius: 0.25rem;

  background-color: ${(props) => props.$backgroundColor};
  transition: 300ms;

  ${(props) =>
    props.$hasHover &&
    `
  &:hover {
    background-color: ${props.theme.purple};
  }
  `}
`

export const CartCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  right: -0.52156rem;
  top: -0.5rem;
  border-radius: 62.5rem;

  background-color: ${(props) => props.theme['yellow-dark']};

  span {
    color: ${(props) => props.theme.white};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
  }
`

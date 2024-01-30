import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  flex: 50%;
  align-items: center;
  /* border: 1px solid red; */

  gap: 0.75rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3rem;
  color: ${(props) => props.theme['base-text']};
`

export const IconContainer = styled.div<{ $backgroundColor: string }>`
  display: flex;

  padding: 0.5rem;
  border-radius: 62.5rem;

  background-color: ${(props) => props.$backgroundColor};
`

import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`
export const CardContentLeft = styled.div`
  display: flex;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3rem;
    margin-bottom: 0.5rem;
  }
`

export const TextPrice = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3rem;
  align-self: flex-start;
`

export const ButtonsContainer = styled.div`
  display: flex;
`

export const RemoveButton = styled.button`
  display: flex;
  padding: 0 0.5rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme['base-button']};

  cursor: pointer;
  border: none;
  transition: 300ms;

  span {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2rem;
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

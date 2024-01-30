import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;
  margin-bottom: 0.75rem;

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3rem;
  }
  span {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.1375rem;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

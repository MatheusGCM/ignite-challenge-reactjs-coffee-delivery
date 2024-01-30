import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 16rem;
  height: 19.375rem;
  border-radius: 0.375rem 2.25rem;
  background-color: ${(props) => props.theme['base-card']};
  /* margin: 0 1.46rem 2.5rem 0; */

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.625rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.1375rem;
    width: 13.5rem;
    margin-bottom: 2.06rem;
  }
`
export const RelativeContainer = styled.div`
  position: relative;
  top: -1.3rem;
`

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
`

export const Tag = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 0.8125rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PriceContainer = styled.div`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1375rem;
  margin-right: 1.4rem;

  span {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`

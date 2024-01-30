import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 2.6rem;
  }
  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem;
    margin-bottom: 2.5rem;
  }
`
export const FlexContainer = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    img {
      display: none;
    }
  }
`

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 32.875rem;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 0.375rem 2.25rem;
  border: 1px solid ${(props) => props.theme.yellow};

  @media (max-width: 530px) {
    width: auto;
    padding: 0;
    border: none;
  }
`

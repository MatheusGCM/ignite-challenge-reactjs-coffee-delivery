import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  width: 70rem;

  @media (max-width: 1130px) {
    width: 50rem;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`

import styled from 'styled-components'

export const HomeContainer = styled.main``

export const HomeContainerMid = styled.section`
  display: flex;
  margin: 7rem 0 8.75rem;
  @media (max-width: 1130px) {
    img {
      display: none;
    }
  }
`

export const HomeContent = styled.div`
  /* border: 1px solid green; */
  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;
  }

  h3 {
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
  }
`
export const HomeContainerBottom = styled.section`
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 2.6rem;
  }
`

export const CoffeeContainer = styled.div`
  margin-top: 3.37rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2rem;
  /* border: 1px solid red; */
  @media (max-width: 1130px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 525px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 36.75rem;
  margin-top: 4.13rem;
  row-gap: 1.25rem;

  /* border: 1px solid blue; */
`

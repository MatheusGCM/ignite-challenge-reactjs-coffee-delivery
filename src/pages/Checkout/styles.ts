import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 4.5rem;
`

export const LeftContainer = styled.section`
  display: flex;
  flex: 60%;
  flex-direction: column;
  /* border: 1px solid red; */
`
export const TitleCheckout = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4625rem;
  margin-bottom: 0.94rem;
`

export const RightContainer = styled.section`
  display: flex;
  flex: 40%;
  flex-direction: column;
  /* border: 1px solid red; */
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;
  border-radius: 0.375rem 2.75rem;
  gap: 1.5rem;
`

export const OrderValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ConfirmButton = styled.button`
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.yellow};

  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4rem;
  text-transform: uppercase;

  border: none;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

export const MediumText = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3rem;
`
export const SmallText = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1375rem;
`
export const LargeText = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem;
`

import styled from 'styled-components'

export const BaseContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const HeaderContainer = styled(BaseContainer)`
  justify-content: space-between;
  /* border: 1px solid red; */
`
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.75rem;
`
export const LocaleContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  border-radius: 0.25rem;
  gap: 0.25rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1375rem;

  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
`

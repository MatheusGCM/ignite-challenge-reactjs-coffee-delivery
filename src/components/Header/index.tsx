import logo from '@assets/svg/Logo.svg'
import { MapPin } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

import { useCartContext } from 'src/context/CartContext'
import { defaultTheme } from 'src/styles/themes/default'

import { NavContainer, HeaderContainer, LocaleContainer } from './styles'
import { Cart } from '../Cart'

export function Header() {
  const { coffeeCart } = useCartContext()

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logo} alt="" />
      </NavLink>

      <NavContainer>
        <LocaleContainer>
          <MapPin size={22} color={defaultTheme.purple} weight="fill" />
          <p>Recife, PE</p>
        </LocaleContainer>
        <NavLink to="/checkout" title="cart">
          <Cart
            amount={coffeeCart.length}
            isDisabled={!coffeeCart.length}
            iconColor={defaultTheme['yellow-dark']}
            backgroundColor={defaultTheme['yellow-light']}
          />
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}

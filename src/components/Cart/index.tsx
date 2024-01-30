import { ShoppingCart } from '@phosphor-icons/react'

import { CartContainer, CartCounter } from './styles'

interface CartProps {
  iconColor: string
  backgroundColor: string
  amount?: number
  hasHover?: boolean
  isDisabled?: boolean
}

export function Cart({
  iconColor,
  backgroundColor,
  amount,
  hasHover = false,
  isDisabled,
}: CartProps) {
  return (
    <CartContainer
      $backgroundColor={backgroundColor}
      $hasHover={hasHover}
      disabled={isDisabled}
    >
      {!!amount && (
        <CartCounter>
          <span>{amount}</span>
        </CartCounter>
      )}
      <ShoppingCart size={22} color={iconColor} weight="fill" />
    </CartContainer>
  )
}

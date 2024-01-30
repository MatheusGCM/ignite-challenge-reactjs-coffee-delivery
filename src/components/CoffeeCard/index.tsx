import { Cart, InputNumber } from '@components'
import { NavLink } from 'react-router-dom'

import { CoffeeProps } from 'src/@types/coffee'
import { useCartContext } from 'src/context/CartContext'
import { defaultTheme } from 'src/styles/themes/default'

import {
  BuyContainer,
  CardContainer,
  PriceContainer,
  TagContainer,
  Tag,
  RelativeContainer,
} from './styles'

interface CoffeCardProps extends CoffeeProps {
  onPressedAdd(): void
  onPressedSub(): void
}

export function CoffeeCard({
  imgSrc,
  type,
  name,
  description,
  price,
  onPressedAdd,
  onPressedSub,
}: CoffeCardProps) {
  const { coffeeCart } = useCartContext()
  return (
    <CardContainer>
      <RelativeContainer>
        <img src={imgSrc} alt="" />
        <TagContainer>
          {type.map((type, index) => (
            <Tag key={`${index}`}>{type}</Tag>
          ))}
        </TagContainer>
        <h4>{name}</h4>
        <p>{description}</p>
        <BuyContainer>
          <PriceContainer>
            R$ <span>{price}</span>
          </PriceContainer>
          <InputNumber
            onPressedAdd={onPressedAdd}
            onPressedSub={onPressedSub}
          />
          <NavLink to="/checkout" title="card">
            <Cart
              isDisabled={!coffeeCart.length}
              iconColor={defaultTheme['base-card']}
              backgroundColor={defaultTheme['purple-dark']}
              hasHover
            />
          </NavLink>
        </BuyContainer>
      </RelativeContainer>
    </CardContainer>
  )
}

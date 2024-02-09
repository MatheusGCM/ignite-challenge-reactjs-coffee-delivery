import { InputNumber } from '@components'
import { Trash } from '@phosphor-icons/react'

import { defaultTheme } from 'src/styles/themes/default'

import {
  ButtonsContainer,
  CardContainer,
  CardContentLeft,
  RemoveButton,
  TextPrice,
} from './styles'

interface SelectedCoffeeCardProps {
  imgSrc: string
  name: string
  price: string
  quantify: number
  onPressedAdd(): void
  onPressedSub(): void
  onPressedRemove(): void
}

export function SelectedCoffeeCard({
  imgSrc,
  name,
  price,
  quantify,
  onPressedAdd,
  onPressedSub,
  onPressedRemove,
}: SelectedCoffeeCardProps) {
  return (
    <CardContainer>
      <CardContentLeft>
        <img src={imgSrc} alt="" />
        <div>
          <h4>{name}</h4>
          <ButtonsContainer>
            <InputNumber
              value={quantify}
              height={2}
              onPressedAdd={onPressedAdd}
              onPressedSub={onPressedSub}
            />
            <RemoveButton onClick={onPressedRemove}>
              <Trash size={16} color={defaultTheme.purple} />
              <span>remover</span>
            </RemoveButton>
          </ButtonsContainer>
        </div>
      </CardContentLeft>
      <TextPrice>R$ {price}</TextPrice>
    </CardContainer>
  )
}

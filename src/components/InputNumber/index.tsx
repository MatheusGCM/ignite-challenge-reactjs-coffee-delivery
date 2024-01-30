import { Minus, Plus } from '@phosphor-icons/react'

import { InputNumberContainer, StyleIcon } from './styles'

interface InputNumberProps {
  height?: number
  value?: number
  onPressedAdd(): void
  onPressedSub(): void
}

export function InputNumber({
  height = 2.375,
  value = 1,
  onPressedSub,
  onPressedAdd,
}: InputNumberProps) {
  return (
    <InputNumberContainer $height={height}>
      <StyleIcon>
        <Minus size={14} weight="bold" onClick={onPressedSub} />
      </StyleIcon>

      <span>{value}</span>

      <StyleIcon>
        <Plus size={14} weight="bold" onClick={onPressedAdd} />
      </StyleIcon>
    </InputNumberContainer>
  )
}

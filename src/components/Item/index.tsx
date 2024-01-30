import { Icon } from '@phosphor-icons/react'
import { ReactNode } from 'react'

import { defaultTheme } from 'src/styles/themes/default'

import { IconContainer, ItemContainer } from './styles'

interface ItemProps {
  icon: Icon
  iconColor?: string
  iconBackgroundColor?: string
  children: ReactNode
}

export function Item({
  icon: Icon,
  children,
  iconColor = defaultTheme.background,
  iconBackgroundColor = defaultTheme['yellow-dark'],
}: ItemProps) {
  return (
    <ItemContainer>
      <IconContainer $backgroundColor={iconBackgroundColor}>
        <Icon size={16} color={iconColor} weight="fill" />
      </IconContainer>
      {children}
    </ItemContainer>
  )
}

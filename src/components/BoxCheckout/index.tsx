import { Icon } from '@phosphor-icons/react'
import { ReactNode } from 'react'

import { Container, Content } from './styles'

interface BoxCheckoutProps {
  icon: Icon
  iconColor: string
  title: string
  subtitle: string
  children: ReactNode
}

export function BoxCheckout({
  icon: Icon,
  iconColor,
  title,
  subtitle,
  children,
}: BoxCheckoutProps) {
  return (
    <Container>
      <Content>
        <Icon size={22} color={iconColor} />
        <div>
          <p>{title}</p>
          <span>{subtitle}</span>
        </div>
      </Content>
      {children}
    </Container>
  )
}

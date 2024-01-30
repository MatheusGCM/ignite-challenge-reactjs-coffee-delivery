import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { ReactNode } from 'react'

import { defaultTheme } from 'src/styles/themes/default'

export interface PaymentProps {
  name: string
  type: 'credit' | 'debit' | 'cash'
  icon: ReactNode
}

export const payment: PaymentProps[] = [
  {
    type: 'credit',
    name: 'Cartão de Crédito',
    icon: <CreditCard size={16} color={defaultTheme.purple} />,
  },
  {
    type: 'debit',
    name: 'Cartão de Débito',
    icon: <Bank size={16} color={defaultTheme.purple} />,
  },
  {
    type: 'cash',
    name: 'Dinheiro',
    icon: <Money size={16} color={defaultTheme.purple} />,
  },
]

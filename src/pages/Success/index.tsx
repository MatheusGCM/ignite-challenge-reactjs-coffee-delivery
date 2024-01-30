import { illustration } from '@assets/svg'
import { Item } from '@components'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import { useCartContext } from 'src/context/CartContext'
import { payment } from 'src/data/payment'
import { defaultTheme } from 'src/styles/themes/default'

import { FlexContainer, OverviewContainer, SuccessContainer } from './styles'

export function Success() {
  const { order } = useCartContext()
  const { street, number, city, uf, district, paymentMethod } = order
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <FlexContainer>
        <OverviewContainer>
          <Item icon={MapPin} iconBackgroundColor={defaultTheme.purple}>
            <span>
              Entrega em <strong>{`${street}, ${number}`}</strong>
              <br />
              {`${district} - ${city}, ${uf}`}
            </span>
          </Item>
          <Item icon={Timer} iconBackgroundColor={defaultTheme.yellow}>
            <span>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </span>
          </Item>
          <Item
            icon={CurrencyDollar}
            iconBackgroundColor={defaultTheme['yellow-dark']}
          >
            <span>
              Pagamento na entrega <br />
              <strong>
                {payment.find((item) => item.type === paymentMethod)?.name}
              </strong>
            </span>
          </Item>
        </OverviewContainer>
        <img src={illustration} alt="" />
      </FlexContainer>
    </SuccessContainer>
  )
}

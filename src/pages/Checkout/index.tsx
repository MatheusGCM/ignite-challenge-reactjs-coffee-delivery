import { FormInput, OrderForm, SelectedCoffeeCard } from '@components'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { CoffeeProps } from 'src/@types/coffee'
import { useCartContext } from 'src/context/CartContext'

import {
  CheckoutContainer,
  ConfirmButton,
  LargeText,
  LeftContainer,
  MediumText,
  OrderContainer,
  OrderValuesContainer,
  RightContainer,
  SmallText,
  SpaceBetween,
  TitleCheckout,
} from './styles'

export function Checkout() {
  const navigate = useNavigate()
  const {
    coffeeCart,
    addCoffeeCart,
    subCoffeeCart,
    removeCoffeeCart,
    checkout,
  } = useCartContext()

  const totalPrice = coffeeCart.length * 9.9
  const totalPriceFormated = `R$ ${totalPrice.toFixed(2).toString().replace('.', ',')}`
  const totalPriceWithDelivery = totalPrice + 3.5
  const totalPriceWithDeliveryFormated = `R$ ${totalPriceWithDelivery.toFixed(2).toString().replace('.', ',')}`
  const hasCoffeeSelected = coffeeCart.length > 0

  const handleAddCoffeeCart = (coffee: CoffeeProps) => {
    addCoffeeCart(coffee)
  }
  const handleSubCoffeeCart = (coffee: CoffeeProps) => {
    subCoffeeCart(coffee)
  }
  const handleRemoveCoffeeCart = (id: string) => {
    removeCoffeeCart(id)
  }

  const handleCheckout = (data: FormInput) => {
    checkout(data)
  }

  useEffect(() => {
    if (!hasCoffeeSelected) {
      navigate('/')
    }
  }, [hasCoffeeSelected, navigate])

  return (
    <CheckoutContainer>
      <LeftContainer>
        <TitleCheckout>Complete seu pedido</TitleCheckout>
        <OrderForm id="order" onSubmitForm={(data) => handleCheckout(data)} />
      </LeftContainer>
      <RightContainer>
        <TitleCheckout>Cafés selecionados</TitleCheckout>
        <OrderContainer>
          {coffeeCart.map((item) => (
            <SelectedCoffeeCard
              key={item.id}
              {...item}
              onPressedAdd={() => handleAddCoffeeCart(item)}
              onPressedSub={() => handleSubCoffeeCart(item)}
              onPressedRemove={() => handleRemoveCoffeeCart(item.id)}
            />
          ))}

          <OrderValuesContainer>
            <SpaceBetween>
              <SmallText>Total de itens</SmallText>
              <MediumText>{totalPriceFormated}</MediumText>
            </SpaceBetween>
            <SpaceBetween>
              <SmallText>Entrega</SmallText> <MediumText>R$ 3,50</MediumText>
            </SpaceBetween>
            <SpaceBetween>
              <LargeText>Total</LargeText>{' '}
              <LargeText>{totalPriceWithDeliveryFormated}</LargeText>
            </SpaceBetween>
          </OrderValuesContainer>
          <ConfirmButton type="submit" form="order">
            confirmar pedido
          </ConfirmButton>
        </OrderContainer>
      </RightContainer>
    </CheckoutContainer>
  )
}

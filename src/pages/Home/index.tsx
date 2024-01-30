import imgCoffee from '@assets/svg/imageCoffee.svg'
import { ShoppingCart, Package, Coffee, Timer } from '@phosphor-icons/react'

import { CoffeeProps } from 'src/@types/coffee'
import { CoffeeCard } from 'src/components/CoffeeCard'
import { Item } from 'src/components/Item'
import { useCartContext } from 'src/context/CartContext'
import { coffees } from 'src/data/coffees'
import { defaultTheme } from 'src/styles/themes/default'

import {
  CoffeeContainer,
  HomeContainer,
  HomeContainerBottom,
  HomeContainerMid,
  HomeContent,
  ItemContainer,
} from './styles'

export function Home() {
  const { addCoffeeCart, subCoffeeCart } = useCartContext()

  const handleAddCoffeeCart = (coffee: CoffeeProps) => {
    addCoffeeCart(coffee)
  }
  const handleSubCoffeeCart = (coffee: CoffeeProps) => {
    subCoffeeCart(coffee)
  }

  return (
    <HomeContainer>
      <HomeContainerMid>
        <HomeContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <ItemContainer>
            <Item icon={ShoppingCart}>Compra simples e segura</Item>
            <Item
              icon={Package}
              iconBackgroundColor={defaultTheme['base-text']}
            >
              Embalagem mantém o café intacto
            </Item>
            <Item icon={Timer} iconBackgroundColor={defaultTheme.yellow}>
              Entrega rápida e rastreada
            </Item>
            <Item icon={Coffee} iconBackgroundColor={defaultTheme.purple}>
              O café chega fresquinho até você
            </Item>
          </ItemContainer>
        </HomeContent>

        <img src={imgCoffee} alt="" />
      </HomeContainerMid>
      <HomeContainerBottom>
        <h2>Nossos cafés</h2>
        <CoffeeContainer>
          {coffees.map((item) => (
            <CoffeeCard
              key={item.name}
              {...item}
              onPressedAdd={() => handleAddCoffeeCart(item)}
              onPressedSub={() => handleSubCoffeeCart(item)}
            />
          ))}
        </CoffeeContainer>
      </HomeContainerBottom>
    </HomeContainer>
  )
}

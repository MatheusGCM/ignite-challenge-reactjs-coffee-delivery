import { ReactNode, createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CoffeeCart, CoffeeProps } from 'src/@types/coffee'
import { OrderProps } from 'src/@types/order'

interface CartContextProps {
  coffeeCart: CoffeeCart[]
  order: OrderProps
  addCoffeeCart(coffee: CoffeeProps): void
  subCoffeeCart(coffee: CoffeeProps): void
  removeCoffeeCart(id: string): void
  checkout(data: OrderProps): void
}

interface CartContextProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextProps)

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const navigate = useNavigate()
  const [coffeeCart, setCoffeeCart] = useState<CoffeeCart[]>([])
  const [order, setOrder] = useState({} as OrderProps)

  const addCoffeeCart = (coffee: CoffeeProps) => {
    const id = String(new Date().getTime())
    setCoffeeCart((state) => [...state, { ...coffee, id }])
  }

  const subCoffeeCart = (coffee: CoffeeProps) => {
    if (coffeeCart.length) {
      const index = coffeeCart.findIndex((item) => item.name === coffee.name)
      if (index !== -1) {
        const newCoffeeCart = [
          ...coffeeCart.slice(0, index),
          ...coffeeCart.slice(index + 1),
        ]
        setCoffeeCart(newCoffeeCart)
      }
    }
  }

  const removeCoffeeCart = (id: string) => {
    const newCoffeeCart = coffeeCart.filter((item) => item.id !== id)
    setCoffeeCart(newCoffeeCart)
  }

  const checkout = (data: OrderProps) => {
    setOrder(data)
    navigate('/success')
    setCoffeeCart({} as CoffeeCart[])
  }

  return (
    <CartContext.Provider
      value={{
        order,
        coffeeCart,
        addCoffeeCart,
        subCoffeeCart,
        removeCoffeeCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => useContext(CartContext)

export { CartContextProvider, useCartContext }

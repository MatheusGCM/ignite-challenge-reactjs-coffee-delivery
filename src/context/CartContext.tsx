import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'

import { CoffeeProps } from 'src/@types/coffee'
import { OrderProps } from 'src/@types/order'
import {
  addNewCoffeeAction,
  clearCoffeeCartAction,
  coffeeCartReducer,
  removeCoffeeAction,
  subCoffeeQuantifyAction,
} from 'src/reducers/coffee-cart'

interface CartContextProps {
  coffeeCart: CoffeeProps[]
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
  const [coffeeCart, dispatch] = useReducer(
    coffeeCartReducer,
    [],
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffee-cart',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return initialState
    },
  )
  const [order, setOrder] = useState({} as OrderProps)

  const addCoffeeCart = (coffee: CoffeeProps) => {
    dispatch(addNewCoffeeAction(coffee))
  }

  const subCoffeeCart = (coffee: CoffeeProps) => {
    const coffeeFound = coffeeCart.find((item) => item.name === coffee.name)
    if (coffeeFound) {
      if (coffeeFound.quantify > 1) {
        dispatch(subCoffeeQuantifyAction(coffee))
      } else {
        const { name } = coffee
        dispatch(removeCoffeeAction(name))
      }
    }
  }

  const removeCoffeeCart = (name: string) => {
    dispatch(removeCoffeeAction(name))
  }

  const checkout = (data: OrderProps) => {
    setOrder(data)
    navigate('/success')
    dispatch(clearCoffeeCartAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeCart)

    localStorage.setItem('@coffee-delivery:coffee-cart', stateJSON)
  }, [coffeeCart])

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

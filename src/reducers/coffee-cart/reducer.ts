import { produce } from 'immer'

import { CoffeeProps } from 'src/@types/coffee'

import { Action, ActionTypes } from './actions'

export function coffeeCartReducer(
  state: CoffeeProps[],
  action: Action,
): CoffeeProps[] {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const currentCoffeeIndex = state.findIndex(
        (coffee) => coffee.name === action.payload.coffee.name,
      )

      if (currentCoffeeIndex < 0) {
        return [...state, { ...action.payload.coffee, quantify: 1 }]
      }

      return produce(state, (draft) => {
        draft[currentCoffeeIndex].quantify++
      })
    }
    case ActionTypes.SUB_COFFEE_QUANTIFY:
      return state.map((coffee) =>
        coffee.name === action.payload.coffee.name
          ? { ...coffee, quantify: coffee.quantify - 1 }
          : coffee,
      )
    case ActionTypes.REMOVE_COFFEE: {
      const newCoffeeCart = state.filter(
        (coffee) => coffee.name !== action.payload.name,
      )
      return newCoffeeCart
    }
    case ActionTypes.CLEAR_COFFEE_CART:
      return []
    default:
      return state
  }
}

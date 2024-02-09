import { CoffeeProps } from 'src/@types/coffee'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  SUB_COFFEE_QUANTIFY = 'SUB_COFFEE_QUANTIFY',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_COFFEE_CART = 'CLEAR_COFFEE_CART',
}

export type Action =
  | {
      type: ActionTypes.ADD_NEW_COFFEE | ActionTypes.SUB_COFFEE_QUANTIFY
      payload: {
        coffee: CoffeeProps
      }
    }
  | {
      type: ActionTypes.REMOVE_COFFEE
      payload: {
        name: string
      }
    }
  | {
      type: ActionTypes.CLEAR_COFFEE_CART
    }

export function addNewCoffeeAction(coffee: CoffeeProps): Action {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffee,
    },
  }
}

export function subCoffeeQuantifyAction(coffee: CoffeeProps): Action {
  return {
    type: ActionTypes.SUB_COFFEE_QUANTIFY,
    payload: {
      coffee,
    },
  }
}

export function removeCoffeeAction(name: string): Action {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      name,
    },
  }
}

export function clearCoffeeCartAction(): Action {
  return {
    type: ActionTypes.CLEAR_COFFEE_CART,
  }
}

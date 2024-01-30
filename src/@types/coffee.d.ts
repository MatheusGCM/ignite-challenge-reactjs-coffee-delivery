type CoffeeType =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'especial'
  | 'alcoólico'

export interface CoffeeProps {
  name: string
  imgSrc: string
  description: string
  type: CoffeeType[]
  price: string
}

export interface CoffeeCart extends CoffeeProps {
  id: string
}

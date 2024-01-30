import {
  americano,
  arabe,
  capuccino,
  chocolateQuente,
  comLeite,
  cremoso,
  cubano,
  gelado,
  havaiano,
  irlandes,
  latte,
  macchiato,
  mocaccino,
  tradicional,
} from '@assets/svg'

import { CoffeeProps } from 'src/@types/coffee'

export const coffees: CoffeeProps[] = [
  {
    name: 'Expresso Tradicional',
    imgSrc: tradicional,
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: ['tradicional'],
    price: '9,90',
  },
  {
    name: 'Expresso Americano',
    imgSrc: americano,
    description: 'Expresso diluído, menos intenso que o tradicional',
    type: ['tradicional'],
    price: '9,90',
  },
  {
    name: 'Expresso Cremoso',
    imgSrc: cremoso,
    description: 'Café expresso tradicional com espuma cremosa',
    type: ['tradicional'],
    price: '9,90',
  },
  {
    name: 'Expresso Gelado',
    imgSrc: gelado,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    type: ['tradicional', 'gelado'],
    price: '9,90',
  },
  {
    name: 'Café com Leite',
    imgSrc: comLeite,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    type: ['tradicional', 'com leite'],
    price: '9,90',
  },
  {
    name: 'Latte',
    imgSrc: latte,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    type: ['tradicional', 'com leite'],
    price: '9,90',
  },
  {
    name: 'Capuccino',
    imgSrc: capuccino,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    type: ['tradicional', 'com leite'],
    price: '9,90',
  },
  {
    name: 'Macchiato',
    imgSrc: macchiato,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    type: ['tradicional', 'com leite'],
    price: '9,90',
  },
  {
    name: 'Mocaccino',
    imgSrc: mocaccino,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    type: ['tradicional', 'com leite'],
    price: '9,90',
  },
  {
    name: 'Chocolate Quente',
    imgSrc: chocolateQuente,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    type: ['especial', 'com leite'],
    price: '9,90',
  },
  {
    name: 'Cubano',
    imgSrc: cubano,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    type: ['especial', 'alcoólico', 'gelado'],
    price: '9,90',
  },
  {
    name: 'Havaiano',
    imgSrc: havaiano,
    description: 'Bebida adocicada preparada com café e leite de coco',
    type: ['especial'],
    price: '9,90',
  },
  {
    name: 'Árabe',
    imgSrc: arabe,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    type: ['especial'],
    price: '9,90',
  },
  {
    name: 'Irlandês',
    imgSrc: irlandes,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    type: ['especial', 'alcoólico'],
    price: '9,90',
  },
]

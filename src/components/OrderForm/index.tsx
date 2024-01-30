import { zodResolver } from '@hookform/resolvers/zod'
import { MapPinLine, CurrencyDollar } from '@phosphor-icons/react'
import { FormHTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { payment } from 'src/data/payment'
import { defaultTheme } from 'src/styles/themes/default'

import {
  AddressContainer,
  ButtonContainer,
  FlexDirectionRow,
  SelectContainer,
} from './styles'
import { BoxCheckout } from '../BoxCheckout'
import { InputText } from '../InputText'

const formShema = z.object({
  cep: z.string().min(8),
  street: z.string().min(1),
  number: z.string().min(1),
  complement: z.string().optional(),
  district: z.string().min(1),
  city: z.string().min(1),
  uf: z.string().max(2).min(1),
  paymentMethod: z.enum(['credit', 'debit', 'cash']),
})

export type FormInput = z.infer<typeof formShema>

interface OrderFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmitForm(data: FormInput): void
}

export function OrderForm({ onSubmitForm, ...rest }: OrderFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormInput>({
    defaultValues: {} as FormInput,
    resolver: zodResolver(formShema),
  })

  const selectedPayment = watch('paymentMethod')

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} {...rest}>
      <BoxCheckout
        icon={MapPinLine}
        iconColor={defaultTheme['yellow-dark']}
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      >
        <AddressContainer>
          <InputText
            placeholder="CEP"
            width={'12.5rem'}
            error={!!errors.cep?.message}
            {...register('cep')}
          />
          <InputText
            placeholder="Rua"
            {...register('street')}
            error={!!errors.street?.message}
          />
          <FlexDirectionRow>
            <InputText
              placeholder="Número"
              width="36%"
              error={!!errors.number?.message}
              {...register('number')}
            />
            <InputText
              placeholder="Complemento"
              isOptional
              width="65%"
              error={!!errors.complement?.message}
              {...register('complement')}
            />
          </FlexDirectionRow>
          <FlexDirectionRow>
            <InputText
              placeholder="Bairro"
              width="35%"
              error={!!errors.district?.message}
              {...register('district')}
            />
            <InputText
              placeholder="Cidade"
              width="50%"
              error={!!errors.city?.message}
              {...register('city')}
            />
            <InputText
              placeholder="UF"
              width="3.75rem"
              error={!!errors.uf?.message}
              {...register('uf')}
            />
          </FlexDirectionRow>
        </AddressContainer>
      </BoxCheckout>
      <BoxCheckout
        icon={CurrencyDollar}
        iconColor={defaultTheme.purple}
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      >
        <SelectContainer>
          {payment.map(({ icon, type, name }) => (
            <ButtonContainer
              key={type}
              $isSelected={selectedPayment === type}
              $error={!!errors.paymentMethod}
            >
              <input type="radio" value={type} {...register('paymentMethod')} />
              {icon}
              <span>{name}</span>
            </ButtonContainer>
          ))}
        </SelectContainer>
      </BoxCheckout>
    </form>
  )
}

import { zodResolver } from '@hookform/resolvers/zod'
import { FormHTMLAttributes, forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FlexDirectionRow, FormContainer } from './styles'
import { InputText } from '../InputText'

const formShema = z.object({
  cep: z.string().min(8),
  rua: z.string(),
  numero: z.number(),
  complemento: z.string().optional(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string().max(2),
})

type FormInput = z.infer<typeof formShema>

interface AddressFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmitForm?(data: FormInput): void
}

export const AddressForm = forwardRef<HTMLFormElement, AddressFormProps>(
  ({ ...rest }) => {
    const { register, handleSubmit } = useForm<FormInput>({
      defaultValues: {} as FormInput,
      resolver: zodResolver(formShema),
    })
    return (
      <FormContainer
        onSubmit={handleSubmit(() => console.log('teste'))}
        {...rest}
      >
        <InputText
          type="text"
          placeholder="CEP"
          width={'12.5rem'}
          {...register('cep')}
        />
        <InputText type="text" placeholder="Rua" {...register('rua')} />
        <FlexDirectionRow>
          <InputText
            type="text"
            placeholder="Número"
            width="36%"
            {...register('numero')}
          />
          <InputText
            type="text"
            placeholder="Complemento"
            isOptional
            width="65%"
            {...register('complemento')}
          />
        </FlexDirectionRow>
        <FlexDirectionRow>
          <InputText
            type="text"
            placeholder="Bairro"
            width="35%"
            {...register('bairro')}
          />
          <InputText
            type="text"
            placeholder="Cidade"
            width="50%"
            {...register('cidade')}
          />
          <InputText
            type="text"
            placeholder="UF"
            width="3.75rem"
            {...register('uf')}
          />
        </FlexDirectionRow>
        <button type="submit">ENVIAR</button>
      </FormContainer>
    )
  },
)

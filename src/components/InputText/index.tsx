import { InputHTMLAttributes, forwardRef } from 'react'

import { StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  width?: string
  error?: boolean
}

export const InputText = forwardRef<HTMLInputElement, InputProps>(
  ({ isOptional = false, width, error = false, ...rest }, ref) => {
    return (
      <StyledInput $width={width} $error={error}>
        <input ref={ref} type="text" {...rest} />
        {isOptional && <span>Opcional</span>}
      </StyledInput>
    )
  },
)

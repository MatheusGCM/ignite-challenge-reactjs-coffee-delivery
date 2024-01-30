import styled from 'styled-components'

export const StyledInput = styled.div<{ $width?: string; $error: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: ${(props) => props.$width};
  padding: 0.75rem;
  border-radius: 0.25rem;
  gap: 0.25rem;

  border: 1px solid
    ${(props) => (props.$error ? 'red' : props.theme['base-button'])};
  background-color: ${(props) => props.theme['base-input']};

  input {
    display: flex;
    width: 100%;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.1375rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
  span {
    color: ${(props) => props.theme['base-label']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: 0.975rem;
  }
`

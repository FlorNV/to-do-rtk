import styled, { css } from 'styled-components'

export const Button = styled.button`
  width: max-content;
  border-radius: var(--border-radius);
  border: 2px solid transparent;
  padding: 0.6rem;
  font-family: inherit;
  background-color: var(--dark);
  color: ${({ checked }) => checked ? 'var(--green)' : 'var(--white)'};
  cursor: pointer;
  transition: border-color 0.25s;
  ${({ icon }) => icon && css`
    line-height: 0;
    padding: 0.2rem;
  `}

  &:hover {
    border-color: #6290c3;
  }
`

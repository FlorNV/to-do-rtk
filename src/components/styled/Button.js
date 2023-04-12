import styled, { css } from 'styled-components'

export const Button = styled.button`
  border-radius: var(--border-radius);
  border: 2px solid transparent;
  padding: 0.6rem;
  font-family: inherit;
  background-color: #1a1b41;
  color: ${({ checked }) => checked ? '#baff29' : '#fff'};
  cursor: pointer;
  transition: border-color 0.25s;
  ${({ hasIcon }) => hasIcon && css`
    line-height: 0;
    padding: 0.4rem;
  `}

  &:hover {
    border-color: #6290c3;
  }
`

import styled, { css } from 'styled-components'

export const Button = styled.button`
  width: max-content;
  border-radius: var(--border-radius);
  border: 2px solid transparent;
  padding: 0.6rem;
  font-family: inherit;
  background-color: var(--dark);
  color: var(--white);
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

export const ButtonIcon = styled.button`
  width: max-content;
  border: none;
  background-color: transparent;
  color: var(--dark);
  line-height: 0;
  padding: 0.2rem;
  cursor: pointer;
`

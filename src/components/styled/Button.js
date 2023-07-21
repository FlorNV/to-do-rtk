import styled from 'styled-components'

export const DarkButton = styled.button`
  width: max-content;
  border-radius: var(--border-radius);
  border: 2px solid transparent;
  padding: 0.3rem 0.6rem;
  font-family: inherit;
  background-color: var(--dark);
  color: var(--white);
  cursor: pointer;
  transition: border-color 250ms;

  &:hover {
    border-color: #6290c3;
  }
`

export const LightButton = styled(DarkButton)`
  background-color: var(--secondary);
  color: var(--dark);
`

export const LightButtonIcon = styled.button`
  padding: 3px;
  border: none;
  border-radius: var(--border-radius);
  background-color: transparent;
  line-height: 0;
  font-size: ${({ xl }) => xl ? 'var(--text-xl)' : 'var(--text-lg)'};
  cursor: pointer;
  transition: background-color 100ms ease;

  &:hover {
    background-color: rgba(var(--light-rgb), 0.5);
  }
`

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  color: var(--dark);
  line-height: 0;
  margin-left: ${({ left }) => left && 'auto'};
  cursor: pointer;
  transition: color 100ms ease;
  font-size: inherit;

  &:hover {
    color: rgba(var(--dark-rgb), 0.6);
  }
`

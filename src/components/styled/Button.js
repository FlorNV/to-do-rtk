import styled from 'styled-components'

export const DarkButton = styled.button`
  margin-left: ${({ left }) => left && 'auto'};
  width: max-content;
  border-radius: var(--border-radius);
  border: 2px solid transparent;
  padding: 0.3rem 0.6rem;
  font-family: inherit;
  background-color: var(--bg-primary);
  color: var(--font-color-tertiary);
  cursor: pointer;
  transition: border-color 250ms;

  &:hover {
    border-color: var(--font-color-cyan);
  }
`

export const LightButton = styled(DarkButton)`
  background-color: var(--bg-secondary);
  color: var(--font-color-primary);
`

export const LightButtonIcon = styled.button`
  padding: 3px;
  border: none;
  border-radius: var(--border-radius);
  background-color: transparent;
  line-height: 0;
  font-size: ${({ xl }) => xl ? 'var(--text-xl)' : 'var(--text-lg)'};
  cursor: pointer;
  transition: background-color 150ms ease-in;

  &:hover {
    background-color: var(--bg-white);
  }
`

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  line-height: 0;
  margin-left: ${({ left }) => left && 'auto'};
  cursor: pointer;
  transition: color 150ms ease-in;
  font-size: inherit;
  color: ${({ black }) => black ? 'inherit' : 'var(--font-color-secondary)'};

  &:hover {
    color: var(--font-color-hover);
  }
`

export const MenuButton = styled(LightButtonIcon)`
  display: block;

  @media (min-width: 768px) {
    display: ${({ isVisible }) => isVisible && 'none'};
  }
`

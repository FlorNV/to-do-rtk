import styled from 'styled-components'

export const IconStyled = styled.span`
  font-size: 1.4rem;
`

export const ListIcon = styled.span`
  display: none;
  line-height: 0;

  @media (min-width: 768px) {
    display: ${({ isVisible }) => isVisible && 'block'};
  }
`

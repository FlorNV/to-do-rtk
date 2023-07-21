import styled from 'styled-components'

export const Layer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};

  @media (min-width: 768px) {
    display: ${({ isVisible }) => isVisible && 'none'};
  }
`

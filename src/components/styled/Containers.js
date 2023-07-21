import styled from 'styled-components'

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: ${({ column }) => column ? 'column' : 'row'};
  overflow: hidden;
`

export const ToolBar = styled.div`
  font-size: var(--text-xxl);
  margin: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`

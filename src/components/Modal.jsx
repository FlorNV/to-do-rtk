import styled, { css } from 'styled-components'
import { useDispatch } from 'react-redux'
import { closeModal, setModalResult } from '../redux/modal/modalSlice'

const Layer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled.div`
  min-width: 300px;
  height: 180px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: var(--border-radius);
  background-color: var(--white);
`

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  & > button {
    padding: 6px 12px;
  }
`

export const Button = styled.button`
  width: max-content;
  border-radius: var(--border-radius);
  border: 2px solid transparent;
  padding: 0.6rem;
  font-family: inherit;
  ${({ cancel }) => cancel
  ? css`
    background-color: var(--secondary);
    color: var(--dark);
  `
  : css`
    background-color: var(--dark);
    color: var(--white);
  `};
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #6290c3;
  }
`

export const Modal = () => {
  const dispatch = useDispatch()

  const handleCloseModal = () => dispatch(closeModal())

  const cancelOperation = () => {
    dispatch(setModalResult('cancel'))
    dispatch(closeModal())
  }

  const confirmOperation = () => {
    dispatch(setModalResult('confirm'))
    dispatch(closeModal())
  }

  return (
    <Layer onClick={handleCloseModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h3>"List 1" will be permanently removed.</h3>
        <p>You will not be able to undo this action.</p>
        <ButtonContainer>
          <Button cancel onClick={cancelOperation}>Cancel</Button>
          <Button onClick={confirmOperation}>Delete list</Button>
        </ButtonContainer>
      </ModalContainer>
    </Layer>
  )
}

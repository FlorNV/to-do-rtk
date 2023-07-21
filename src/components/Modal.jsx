import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { closeModal, setModalResult } from '../redux/modal/modalSlice'
import { DarkButton, LightButton } from './styled/Button'

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
        <h3>This list will be permanently removed.</h3>
        <p>You will not be able to undo this action.</p>
        <ButtonContainer>
          <LightButton cancel onClick={cancelOperation}>Cancel</LightButton>
          <DarkButton onClick={confirmOperation}>Delete list</DarkButton>
        </ButtonContainer>
      </ModalContainer>
    </Layer>
  )
}

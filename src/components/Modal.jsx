import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { closeModal, setModalResult } from '../redux/modal/modalSlice'
import { DarkButton, LightButton } from './styled/Button'
import { AiOutlineClose } from '../utils/icons'

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
  background-color: var(--bg-white);
  position: relative;
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

const CloseButton = styled.button`
  position: absolute;
  top: -14px;
  right: -14px;
  line-height: 0;
  padding: 8px;
  border-radius: 50%;
  border: none;
  background-color: var(--bg-primary);
  color: var(--font-color-tertiary);
  cursor: pointer;
`

export const Modal = () => {
  const dispatch = useDispatch()

  const cancelOperation = () => {
    dispatch(setModalResult('cancel'))
    dispatch(closeModal())
  }

  const confirmOperation = () => {
    dispatch(setModalResult('confirm'))
    dispatch(closeModal())
  }

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        cancelOperation()
      }
    }

    document.addEventListener('keydown', handleKey)

    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <Layer onClick={cancelOperation}>
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <CloseButton onClick={cancelOperation}><AiOutlineClose /></CloseButton>
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

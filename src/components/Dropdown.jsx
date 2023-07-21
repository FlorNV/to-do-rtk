import { useEffect, useRef } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { IconStyled } from '../components/styled/Icon'
import { AiOutlineDelete, AiOutlineEdit } from '../utils/icons'

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0px, -10px, 0px);
    pointer-events: none;
  }
  100% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
    pointer-events: auto;
  }
`

const Menu = styled.div`
  position: absolute;
  top: 30px;
  z-index: 3;
  font-size: var(--text-md);
  background-color: var(--light);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  ${({ show }) => show
? css`
  animation-name: ${fadeInDown};
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  animation-fill-mode: both;
  `
 : css`
  opacity: 0;
  pointer-events: none;
  `}

  & > h5 {
    text-align: center;
    padding: 12px;
    border-bottom: 1px solid rgba(var(--dark-rgb), 0.2);
  }
`

const Options = styled.ul`
  list-style: none;

  & > li > button {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 12px 16px;
    border: none;
    background-color: transparent;
    text-align: left;
    cursor: pointer;
  }

  & > li > button:hover {
    background-color: rgba(var(--primary-rgb), 0.1);
  }
`

export const Dropdown = ({
  forwardedRef,
  isOpenDropdown,
  handleShowInput,
  handleDeleteList,
  closeDropdown
}) => {
  const menuRef = useRef()

  if (forwardedRef) {
    forwardedRef.current = menuRef.current
  }

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        closeDropdown()
      }
    }

    document.addEventListener('keydown', handleKey)

    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <Menu ref={menuRef} show={isOpenDropdown} onClick={(e) => e.stopPropagation()}>
      <h5>List options</h5>
      <Options>
        <li>
          <button onClick={handleShowInput}>
            <IconStyled as={AiOutlineEdit} />
            Change list name
          </button>
        </li>
        <li>
          <button onClick={handleDeleteList}>
            <IconStyled as={AiOutlineDelete} />
            Delete list
          </button>
        </li>
      </Options>
    </Menu>
  )
}

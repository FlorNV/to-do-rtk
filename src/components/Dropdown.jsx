import { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { IconStyled } from '../components/styled/Icon'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

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
      opacity: 1;
      transform: translateY(10px);
    `
  : 'opacity: 0'};
  transition: opacity 0.2s ease, transform 0.2s ease;

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

import styled from 'styled-components'
import SearchBarRed from '../../assets/img/search_bar_vermelho.svg'
import SearchBarWhite from '../../assets/img/search_bar_branco.svg'

interface SearchBarStyledProps {
  isRed?: boolean
  isLarge?: boolean
}

export const SearchBarStyled = styled.div<SearchBarStyledProps>`
  // background: url(${({ isRed }) =>
    isRed ? SearchBarRed : SearchBarWhite}) no-repeat;
  background-color: ${({ isRed }) => (isRed ? '#FDECEC' : '#f9f4f4')};
  border-radius: 32px;
  width: ${({ isLarge }) => (isLarge ? '100%' : '40%')};
  height: 50px;
  padding-left: 30px;
  display: flex;
  align-items: center;
`
export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;

  ::placeholder {
    color: #ff0000;
  }
`

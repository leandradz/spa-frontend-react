import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
  padding: 0 2em;
  gap: 24;
`

export const Header = styled.header`
  text-align: center;
  margin: 1.5em;
`

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3em;

  span {
    flex: 2;
  }

  div {
    display: flex;
    align-items: center;
  }
`
export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
`

export const Centralize = styled.div`
  text-align: center;
  font-size: 24px;
`

interface TextProps {
  isColorRed?: boolean
  isColorGray?: boolean
}
export const Text = styled.span<TextProps>`
  color: ${({ isColorRed, isColorGray }) =>
    isColorRed ? ' #ff0000' : isColorGray ? '#989191' : '#rgb(42, 42, 42)'};
`

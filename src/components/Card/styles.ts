import styled from 'styled-components'

export const CardStyled = styled.div`
display: flex;
flex-direction: column;
gap: 0.5em;
padding: 0.5em;

img {
  border-radius: 4px;
  border-bottom: 3px solid #ff0000;
  width: 100%;
}

div {
  display: flex;
  justify-content: space-between;
}

:hover {
  cursor: pointer;
  background-color: #ffedeb;
  border-radius: 12px;
  box-shadow: 3px 3px red;
}
`

export const H4 = styled.h4`
  font-weight: normal;
`
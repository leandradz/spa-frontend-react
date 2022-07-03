import 'react-toastify/dist/ReactToastify.css'
import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
export default createGlobalStyle`
* {
margin: 0;
padding: 0;
border: none;
box-sizing: border-box;
outline: 0;
gap: 0.5em;
}
html,
body,
#root {
height: 100%;
}
body {
font-family: marvel, san-serif;
color: rgb(42, 42, 42);
}
`

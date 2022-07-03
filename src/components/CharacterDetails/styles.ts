import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const CardDetails = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  padding: 1.5em;
  background-color: rgba(255, 255, 255, 0.36);
  border-radius: 24px;
`
export const Space = styled.div`
  display: flex;
  justify-content: space-between;
`

export const H4 = styled.h4`
  font-size: 18px;
  font-weight: bold;
`
export const BlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Column = styled.div`
  flex: 1;
  margin: 0.5em 0;
`

export const Row = styled.div`
  width: 100%;
  margin: 0.5em 0;
`

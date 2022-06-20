import styled from 'styled-components'

export const PlanetListWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80vw;
`

export const PagginationRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const PagginationButton = styled.button`
  background: ${(props) => props.theme.colors.green};
  padding: 10px;
`

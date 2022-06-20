import styled from 'styled-components'
import Button from 'src/components/Button/styled'

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

export const PagginationButton = styled(Button)`
  ${(props) => {
    if (props.disabled) {
      return `cursor: default;
              background: ${props.theme.colors.minor}!important;
              opacity: 0.3;

              `
    }
  }}
  padding: 10px;
  margin: 0px 2px;
`

export const PagginationIndexButton = styled(Button)`
  padding: 10px 5px;
`

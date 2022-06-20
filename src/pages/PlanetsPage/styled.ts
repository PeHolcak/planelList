import styled from 'styled-components'
import Button from 'src/components/Button/styled'

export const PlanetPageWrapper = styled.section`
  width: 80vw;
`

export const PagginationRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;

    > * {
      padding: 10px 0px;
    }
  }
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
export const PagginationWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
`

export const ThreeDots = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0px 5px;
`

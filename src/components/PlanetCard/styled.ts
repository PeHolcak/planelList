import styled from 'styled-components'
import Button from 'src/components/Button/styled'

export const PlanetCardWrap = styled.article`
  width: 10vw;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin: 15px;
  font-family: 'Bebas Neue', cursive;
  ${(props) => {
    const boxShadow = props.theme.colors.boxShadow
    return `-webkit-box-shadow: 0px 0px 17px 4px ${boxShadow};
    box-shadow: 0px 0px 17px 4px ${boxShadow};`
  }}

  @media only screen and (max-width: 2160px) {
    width: 15vw;
  }

  @media only screen and (max-width: 1440px) {
    width: 20vw;
  }

  @media only screen and (max-width: 1080px) {
    width: 40vw;
  }

  @media only screen and (max-width: 720px) {
    width: 50vw;
  }

  @media only screen and (max-width: 480px) {
    width: 70vw;
  }
`

export const DetailButton = styled(Button)`
  width: 40pt;
  height: 40pt;
  bottom: 0px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  clip-path: polygon(100% 0%, 0% 100%, 100% 100%);

  > svg {
    width: 20pt;
    height: 20pt;
  }
`
export const PlanetCardContentWrap = styled.div`
  flex-grow: 1;
  align-self: flex-end;
  width: 100%;
  padding: 0px 15px;
`

export const PlanetCardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const PlanetCardHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0px;
  font-size: 27pt;
`

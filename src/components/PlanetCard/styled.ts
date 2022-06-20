import styled from 'styled-components'

export const PlanetCardWrap = styled.article`
  width: 20vw;
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
`

export const DetailButton = styled.button`
  width: 40pt;
  height: 40pt;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
  transition-duration: 0.5s;
  background: ${(props) => props.theme.colors.green};
  color: white;

  > svg {
    width: 20pt;
    height: 20pt;
  }

  &:hover {
    background: ${(props) => props.theme.colors.minor};
  }
  &:active {
    background: ${(props) => props.theme.colors.secondary};
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

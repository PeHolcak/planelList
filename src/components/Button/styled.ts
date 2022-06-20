import styled from 'styled-components'

export default styled.button`
  transition-duration: 0.5s;
  cursor: pointer;
  background: ${(props) => props.theme.colors.green};
  color: white;

  &:hover {
    background: ${(props) => props.theme.colors.minor};
  }
  &:active {
    background: ${(props) => props.theme.colors.secondary};
  }
`

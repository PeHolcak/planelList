import styled from 'styled-components'

export const Container = styled.div`
  width: 80vw;
  margin-left: 10vw;
  max-width: ${({ theme }) => theme.container.maxWidth}px;
`

import styled from 'styled-components'

export const FooterContainer = styled.div`
  height: 5vw;
  background: ${({ theme }) => theme.navBackground};
  color: ${({ theme }) => theme.navColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4vw;
  @media (max-width: 600px) {
    font-size: 3.6vw;
    height: 10vw;
  }
`

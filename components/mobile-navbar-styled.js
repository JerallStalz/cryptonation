import styled from 'styled-components'

export const Nav = styled.nav`
  height: 60px;
  color: ${({ theme }) => theme.navColor};
  background: ${({ theme }) => theme.navBackground};
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  @media (max-width: 700px) {
    display: flex;
  }
`
export const Logo = styled.svg`
  fill: rgb(243, 186, 47);
  height: 35%;
  cursor: pointer;
  & .text {
    fill: ${props => props.theme.logoColor || '#fff'};
  }
`

import styled from 'styled-components'

export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  color: ${({ theme }) => theme.navColor};
  background: ${({ theme }) => theme.mobileNavBackground};
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    display: flex;
  }
`
export const Logo = styled.svg`
  fill: rgb(243, 186, 47);
  height: 38%;
  cursor: pointer;
  margin-left: 20px;
  & .text {
    fill: ${props => props.theme.navColor || '#fff'};
  }
`
export const Menu = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  margin-right: 20px;
`

import styled from 'styled-components'

const Nav = styled.nav`
  height: 7vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 40px;
`

export const ToggleButton = styled.button`
  height: 35px;
  width: 35px;
  background: transparent;
  border: none;
  font-size: 1.3vw;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  padding-left: 8%;
  & svg {
    position: absolute;
    top: -300%;
    transition: 400ms;
    transition-delay: 100ms;
  }
  & svg:first-child {
    top: ${props => !props.themeMode && 'calc(50% - 0.65vw)'};
  }
  & svg:nth-child(2) {
    top: ${props => props.themeMode && 'calc(50% - 0.65vw)'};
  }
`

export const ButtonsContainer = styled.div`
  position: relative;
  height: 100%;
  width: calc(100% - 30%);
  display: flex;
  align-items: center;
  padding-right: 5%;
  background: ${({ theme }) => theme.navBackground};
`

export const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  padding-right: 10%;
  font-size: 1.2vw;
  & span {
    color: ${props => props.theme.navColor};
    cursor: pointer;
  }
`

export const Rounded = styled.svg`
  height: 100%;
  fill: ${({ theme }) => theme.navBackground};
  position: absolute;
  right: 99.5%;
`

export const Logo = styled.svg`
  fill: rgb(243, 186, 47);
  height: 28%;
  cursor: pointer;
  & .text {
    fill: ${props => props.theme.logoColor || '#fff'};
  }
`

export const ConnectButton = styled.button`
  background: #fff;
  display: flex;
  min-width: 16vw;
  align-items: center;
  font-size: 1.25vw;
  justify-content: space-around;
  color: ${({ theme }) => theme.navBackground};
  border-radius: 25px;
  border: none;
  text-transform: capitalize;
  padding: 12px 20px;
  & svg {
    font-size: 1.25vw;
    padding-right: 10px;
    color: ${({ theme }) => theme.navBackground};
  }
  & span {
    font-weight: 600;
  }
`

export default Nav

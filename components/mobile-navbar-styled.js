import styled from 'styled-components'

export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  color: ${({ theme }) => theme.navColor};
  background: ${({ theme }) => theme.navBackground};
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

export const Slider = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 70px;
  transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 200;
  background: rgba(0, 0, 0, 0.7);
  & > div {
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 4vw 2vw;
    background: ${({ theme }) => theme.navBackground};
    & > span {
      height: 12vw;
      padding: 4vw;
      background: #111;

      margin: 2vw 0;
      box-sizing: border-box;
      &:first-child {
      }
    }
  }
  & > span {
    width: 20%;
  }
`

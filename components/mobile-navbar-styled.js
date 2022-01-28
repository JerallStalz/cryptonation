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
  height: 32%;
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
  top: 60px;
  transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 200;
  background: rgba(0, 0, 0, 0.7);
  font-size: 4vw;
  & > div {
    width: 80%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.navBackground};
    transform: ${({ active }) =>
      active ? 'translateX(0)' : 'translateX(100%)'};
    transition: 200ms;
    border-top: 1px solid #444;
    position: relative;
    & > span {
      top: 0;
      color: #fff;
      margin-bottom: 1px;
      padding: 4vw;
      box-sizing: border-box;
      border-bottom: 1px solid #444;
      transform: ${({ active }) =>
        active ? 'translateX(0)' : 'translateX(100%)'};

      transition: 300ms;
    }
  }
  & > span {
    width: 20%;
  }
`

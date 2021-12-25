import styled from 'styled-components'

export const ExternalBox = styled.div`
  color: ${({ theme }) => theme.navColor};
  margin-top: 3vw;
`

export const LinksBox = styled.div`
  background: ${({ theme }) => theme.navBackground};
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-top: 3vw;
  padding-bottom: 3vw;
  & svg {
    font-size: 3.5vw;
  }
`
export const NetworksTitle = styled.div`
  font-size: 2.2vw;
  height: 8vw;
  display: flex;
  & h3 {
    padding: 2vw 3vw;
    height: 100%;
    margin: 0;
    background: ${({ theme }) => theme.navBackground};
  }
`

export const LinkCard = styled.article`
  position: relative;
  height: 12vw;
  width: 25vw;
  margin-bottom: 2vw;
  cursor: default;
  &:hover {
    & .front {
      z-index: -1;
      transform: rotateY(180deg);
    }
    & .back {
      z-index: 0;
      transform: rotateY(0deg);
      & span:nth-child(2) {
        color: ${({ theme }) => theme.mainColor};
        cursor: pointer;
      }
    }
  }
  & .front {
    z-index: 0;
    transform: rotateY(0deg);
    font-size: 1.3vw;
    & span {
      margin-top: 1.4vw;
    }
  }
  & .back {
    z-index: -1;
    transform: rotateY(180deg);
    background: rgba(120, 120, 120, 0.5);
    font-size: 1.3vw;
    & span:first-child {
      font-weight: 700;
      font-size: 1.8vw;
      margin-bottom: 1.4vw;
    }
  }
  & div {
    position: absolute;
    height: 100%;
    width: 100%;
    transition: 400ms;
    transform: rotateY(0deg);
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(80, 80, 80, 0.5);
    border-radius: 15px;
  }
`

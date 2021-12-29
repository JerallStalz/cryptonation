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
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
  & svg {
    font-size: 3.5vw;
    @media (max-width: 768px) {
      font-size: 10vw;
    }
  }
`
export const NetworksTitle = styled.div`
  font-size: 2.2vw;
  height: 12vw;
  display: flex;
  @media (max-width: 768px) {
    font-size: 4vw;
  }
  & h3 {
    padding: 2vw 3vw;
    height: 100%;
    margin: 0;
    background: ${({ theme }) => theme.navBackground};
    @media (max-width: 768px) {
      padding: 3vw 6vw;
    }
  }
`

export const LinkCard = styled.article`
  position: relative;
  height: 12vw;
  width: 25vw;
  margin-bottom: 2vw;
  cursor: default;
  @media (max-width: 768px) {
    height: 50vw;
    width: 40vw;
    margin-bottom: 5vw;
  }
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
    @media (max-width: 768px) {
      font-size: 3.3vw;
    }
    & span {
      margin-top: 1.4vw;
    }
  }
  & .back {
    z-index: -1;
    transform: rotateY(180deg);
    background: rgba(120, 120, 120, 0.5);
    font-size: 1.3vw;
    @media (max-width: 768px) {
      font-size: 3.3vw;
    }
    & span:first-child {
      font-weight: 700;
      font-size: 1.8vw;
      margin-bottom: 1.4vw;
      @media (max-width: 768px) {
        font-size: 3.8vw;
        margin-bottom: 5.4vw;
      }
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

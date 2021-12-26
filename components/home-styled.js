import styled from 'styled-components'

export const TitleContainer = styled.div`
  position: relative;
  max-width: 100%;
`

export const Title = styled.h1`
  font-size: 11.5vw;
  line-height: 11vw;
  letter-spacing: -0.5vw;
  font-weight: 500;
  margin: 0;
  padding-top: 3vw;
  padding-left: 7vw;
  padding-right: 14vw;
  & span {
    display: block;
  }
  @media (max-width: 600px) {
    font-size: 19vw;
    line-height: 18vw;
    padding-top: 18vw;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 16.5vw;
    text-align: center;
  }
`

export const FloatingDate = styled.span`
  position: absolute;
  right: 3.2vw;
  top: 7vw;
  font-weight: 600;
  font-size: 1.25vw;
  padding-right: 40px;
  color: ${({ theme }) => theme.subTextColor};
  & svg {
    margin-right: 0.8vw;
  }
  @media (max-width: 600px) {
    top: 5vw;
    font-size: 3.7vw;
    right: 10px;
    padding-right: 0;
  }
`

export const FloatingArticle = styled.article`
  position: absolute;
  font-weight: 600;
  max-width: calc(100% - 60vw);
  color: ${({ theme }) => theme.subTextColor};
  font-size: 1.35vw;
  line-height: 2.6vw;
  bottom: 0;
  left: 43vw;
  & span {
    @media (max-width: 600px) {
      display: inline;
      margin-right: 3.5vw;
    }
  }
  @media (max-width: 600px) {
    max-width: 100%;
    position: relative;
    font-size: 3.8vw;
    line-height: 4.6vw;
    left: 0;
    display: block;
    text-align: center;
    padding: 0 4vw;
  }
`

export const FloatingButtonContainer = styled.div`
  height: 4.5vw;
  padding-top: 4vw;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    height: 12vw;
    padding-top: 10vw;
  }
`

export const FloatingButton = styled.button`
  background: ${({ theme }) => theme.mainColor};
  border: 1px solid ${({ theme }) => theme.mainColor};
  height: 100%;
  border-radius: 3vw;
  color: ${({ theme }) => theme.color};
  font-size: 1.05vw;
  font-weight: 600;
  padding: 0 3vw;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 3.7vw;
    padding: 0 6vw;
    border-radius: 25px;
  }
`

export const SupportsAnnon = styled.div`
  height: 5vw;
  display: flex;
  & div {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 4vw;
    padding-right: 4vw;
    color: ${({ theme }) => theme.navColor};
    background-color: ${({ theme }) => theme.navBackground};
    position: relative;
    bottom: -2px;
    & span {
      position: relative;
      bottom: -1vw;
      font-size: 1.25vw;
      @media (max-width: 600px) {
        font-size: 13px;
      }
    }
  }
  @media (max-width: 600px) {
    height: 40px;
  }
`

export const Rounded = styled.svg`
  position: relative;
  bottom: 1px;
  fill: ${({ theme }) => theme.navBackground};
`

export const SupportPlatforms = styled.div`
  height: 6.5vw;
  display: flex;
  position: relative;
  top: 1px;
  & div {
    background-color: ${({ theme }) => theme.navBackground};
    width: 55%;
    display: flex;
    align-items: center;
    padding: 0 2%;
    padding-top: 1vw;
    @media (max-width: 600px) {
      width: 100%;
      justify-content: space-between;
    }
  }
  & svg {
    @media (max-width: 600px) {
      display: none;
    }
  }
  & article {
    opacity: 0.7;
    margin: 0 1.5vw;
    position: relative;
    @media (max-width: 600px) {
      width: 20vw !important;
      height: 10vw !important;
    }
  }
  @media (max-width: 600px) {
    height: 40px;
  }
`

export const SupportsFloat = styled.span`
  color: ${({ theme }) => theme.subTextColor};
  display: flex;
  position: absolute;
  right: 0;
  text-transform: uppercase;
  font-size: 1.15vw;
  padding: 0 8vw;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  flex-direction: column;

  & span {
    padding-bottom: 0.3vw;
  }
  @media (max-width: 600px) {
    display: none;
  }
`

export const ProjectsContainer = styled.div`
  color: ${({ theme }) => theme.navColor};
  background-color: ${({ theme }) => theme.navBackground};
  position: relative;
  padding: 4.5vw 5vw;
  & small {
    color: ${({ theme }) => theme.mainColor};
    text-transform: uppercase;
    font-size: 1.2vw;
  }
  h2 {
    & span {
      font-size: 4.5vw;
      font-weight: 400;
    }
    & span:first-child {
      display: block;
    }
    & small {
      font-size: 1.2vw;
      padding: 0 6vw;
      font-weight: 400;
      color: ${({ theme }) => theme.navColor};
      opacity: 0.8;
    }
  }
`

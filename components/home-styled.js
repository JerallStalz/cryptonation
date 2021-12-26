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
    font-size: 60px;
    line-height: 60px;
    padding-top: 30px;
    padding-right: 30px;
    padding-left: 30px;
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
    top: 10px;
    font-size: 16px;
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
  bottom: 0vw;
  left: 43vw;
`

export const FloatingButtonContainer = styled.div`
  height: 4.5vw;
  padding-top: 4vw;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export const FloatingButton = styled.button`
  background: ${({ theme }) => theme.navBackground};
  border: 1px solid ${({ theme }) => theme.mainColor};
  height: 100%;
  border-radius: 3vw;
  color: ${({ theme }) => theme.mainColor};
  font-size: 1.05vw;
  font-weight: 600;
  padding: 0 3vw;
  cursor: pointer;
`

export const SupportsAnnon = styled.div`
  height: 5vw;
  display: flex;
  & div {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 2em;
    padding-right: 2em;
    color: ${({ theme }) => theme.navColor};
    background-color: ${({ theme }) => theme.navBackground};
    position: relative;
    bottom: -2px;
    & span {
      position: relative;
      bottom: -1vw;
      font-size: 1.25vw;
    }
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
  }
  & article {
    opacity: 0.7;
    margin: 0 1.5vw;
    position: relative;
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

import styled from 'styled-components'

export const Project = styled.div`
  display: flex;
  padding: 0 16%;
  padding-top: 5%;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0;
    padding-top: 5%;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 6vw;
  font-weight: 600;
  margin-bottom: 5%;
  @media (max-width: 768px) {
    padding: 0 5%;
  }
  @media (max-width: 500px) {
    font-size: 10vw;
  }
`

export const P = styled.p`
  font-size: 1.35vw;
  line-height: 2.5vw;
  word-spacing: 0.4vw;
  @media (max-width: 768px) {
    font-size: 2.5vw;
    line-height: 2.8vw;
    word-spacing: 1.3vw;
    padding: 0 5%;
  }
  @media (max-width: 500px) {
    font-size: 3.6vw;
    line-height: 4.6vw;
    word-spacing: 2vw;
  }
  & b {
    color: ${({ theme }) => theme.mainColor};
    font-weight: 400;
  }
  & strong {
    font-weight: 600;
  }
`

export const Subtitle = styled.h2`
  font-size: 3.5vw;
  @media (max-width: 768px) {
    padding: 0 5%;
  }
  @media (max-width: 500px) {
    font-size: 5.5vw;
  }
`

export const ImageContainer = styled.figure`
  padding: 5%;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    padding: 0;
  }
  & span {
    border-radius: 10px;
  }
`

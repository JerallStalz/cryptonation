import styled from 'styled-components'

export const Project = styled.div`
  display: flex;
  padding: 0 16%;
  padding-top: 5%;
  flex-direction: column;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 6vw;
  font-weight: 600;
  margin-bottom: 5%;
`

export const P = styled.p`
  font-size: 1.35vw;
  line-height: 2.5vw;
  word-spacing: 0.4vw;
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
`

export const ImageContainer = styled.figure`
  padding: 5%;
  display: flex;
  justify-content: center;
  & span {
    border-radius: 10px;
  }
`

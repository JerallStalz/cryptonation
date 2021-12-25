import styled, { keyframes } from 'styled-components'

export const appear = keyframes`
  from {
    margin-top: 1vw;
    opacity: 0;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
`

export const Category = styled.div`
  border-radius: 3vw;
  background: ${props =>
    props.active ? props.theme.mainColor : 'rgba(100, 100, 100, 0.5)'};
  height: 100%;
  padding: 0 1.5vw;
  font-size: 1.2vw;
  display: flex;
  align-items: center;
  margin-right: 2vw;
  cursor: pointer;
`

export const CategoryContainer = styled.div`
  margin-top: 7vw;
  display: flex;
  height: 3.5vw;
`
export const BoxContainer = styled.div`
  padding: 5vw 0;
  padding-bottom: 0;
  width: 100%;
  min-height: 20vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  border-radius: 1.3vw;
  overflow: hidden;
  background: rgba(70, 70, 70, 0.3);
  margin: 0 3vw;
  margin-bottom: 3vw;
  cursor: pointer;
  animation-name: ${appear};
  animation-timing-function: ease-in;
  animation-duration: 300ms;
  & figure {
    margin: 0;
    position: relative;
    height: 13vw;
  }
  & > div {
    height: 10vw;
    position: relative;
    margin: 0;
    padding: 0 1vw;
    padding-top: 2.3vw;
    & span {
      display: inline-block;
      width: 100%;
      font-size: 1.4vw;
      & p {
        margin: 0;
        display: inline-block;
        margin: 0;
      }
      & small {
        padding-left: 0.3vw;
        display: inline-block;
      }
    }
    & strong {
      width: 90%;
      display: flex;
      justify-content: space-between;
      font-size: 1.2vw;
      font-weight: 400;
      padding-top: 1vw;
      margin: 0 1vw;
      p {
        display: inline-block;
        opacity: 0.6;
        margin: 0;
      }
      p:first-child {
        opacity: 1;
      }
    }
    & > figure {
      position: absolute;
      height: 5vw;
      width: 5vw;
      top: -3.5vw;
      border-radius: 50%;
      background-color: rgba(40, 40, 40, 0.5);
      border: 2px solid rgba(40, 40, 40, 0.5);
      & div {
        height: 100%;
        border-radius: 50%;
        width: 100%;
      }
    }
  }
`

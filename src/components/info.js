import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import reactBG from '../images/React-Icon.svg'
import Fade from 'react-reveal/Fade'
import Social from './social'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const InfoWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: left;
  background-color: var(--light);
  position: relative;
`

const ReactIcon = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  animation: ${rotate} 6s linear infinite;
  background-image: url('${reactBG}');
  background-repeat: no-repeat;
`

export default class info extends Component {
  render() {
    return (
      <Fade bottom delay={300}>
        <InfoWrapper>
          <>{this.props.children}</>
          <Social />
          <ReactIcon />
        </InfoWrapper>
      </Fade>
    )
  }
}

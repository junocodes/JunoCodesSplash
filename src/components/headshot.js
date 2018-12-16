import React, { Component } from 'react'
import styled from 'styled-components'
import headshot from '../images/justin-juno-codes-twins.jpg'
import Fade from 'react-reveal/Fade'

const HeadshotWrapper = styled.div`
  background-color: var(--prime);
  background-image: url('${headshot}');
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-position: right top;
    min-height: 100%;
  @media (max-width: 660px) {
    background-position: right top;
        min-height: 420px;

  }
`

export default class Headshot extends Component {
  render() {
    return (
      <Fade left>
        <HeadshotWrapper />
      </Fade>
    )
  }
}

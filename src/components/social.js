import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { github } from 'react-icons-kit/entypo/github'
import { twitter } from 'react-icons-kit/entypo/twitter'
import { mail } from 'react-icons-kit/entypo/mail'

const SocialWrapper = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  li {
    margin-right: 20px;
    a:link,
    a:visited {
      color: var(--dark);
    }
    a:hover,
    a:active {
      color: var(--prime);
    }
  }
`

export default class Social extends Component {
  render() {
    return (
      <SocialWrapper>
        <li>
          <a
            href="https://github.com/junocodes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={github} size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/junocodes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={twitter} size={24} />
          </a>
        </li>
        <li>
          <a
            href="mailto:hello@juno.codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={mail} size={24} />
          </a>
        </li>
      </SocialWrapper>
    )
  }
}

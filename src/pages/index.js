import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'justin',
        'juno',
        'junocodes',
        'react',
        'texas',
        'developer',
        'javascript',
        'react',
        'graphql',
        'd3',
        'engineer',
        'code',
      ]}
    />
    <h1>Hello World!</h1>
    <p>
      My name is Justin Juno. I'm an infinitely curious javascript developer
      from Whitehouse, Texas. Currently working on my portfolio and exploring
      React, D3, and GraphQL. Striving to be the coolest dad of all-time.
    </p>
  </Layout>
)

export default IndexPage

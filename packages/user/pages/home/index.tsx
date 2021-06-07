import React from 'react'
import Head from 'next/head'
import { Wrapper } from './style'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home | lerna</title>
        <meta name="description" content="homepage" />
      </Head>
      <Wrapper>This is the Home Page</Wrapper>
    </>
  )
}

export default HomePage

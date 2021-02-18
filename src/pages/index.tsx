import React from 'react'
import Head from 'next/head'
import Logo from '../assets/vercel.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>

      <Logo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Typescript + Next.JS structure made by Wanderson P.</p>
    </Container>
  )
}

export default Home

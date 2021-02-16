import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import Head from 'next/head';
import Grid from './layout/Grid';

const MainStyles = styled.main`
  grid-column: 1 / span 14;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 5.2rem)) 1fr;
  gap: 0 2rem;

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 1 / span 8;
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: 0 1rem;
  }

  @media ${(props) => props.theme.breakpoints.s} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    gap: 0 1rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJS Starter</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='A starter that includes nextjs and styled-components. It also has a grid Layout in place.'
        />
      </Head>
      <Grid>
        <Header />
        <MainStyles>{children}</MainStyles>
        <Footer />
      </Grid>
    </>
  );
};

export default Layout;

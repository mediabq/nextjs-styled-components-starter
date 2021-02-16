import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;

  grid-column: 2 / span 12;

  h1 {
    margin: 0;
  }

  a {
    margin-right: 2em;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <h1>Logo</h1>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/details'>
          <a>Details</a>
        </Link>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </nav>
    </HeaderStyles>
  );
};

export default Header;

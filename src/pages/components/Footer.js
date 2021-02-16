import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  grid-column: 2 / span 12;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <h1>Footer</h1>
    </FooterStyles>
  );
};

export default Footer;

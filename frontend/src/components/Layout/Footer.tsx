import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #34495e;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
`;

const Footer = () => (
  <FooterContainer>
    © {new Date().getFullYear()} Food Category Auto-Suggest
  </FooterContainer>
);

export default Footer;
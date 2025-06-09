import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Food Category Auto-Suggest</Title>
  </HeaderContainer>
);

export default Header;
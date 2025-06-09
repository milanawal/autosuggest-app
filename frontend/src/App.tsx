import React from 'react';
import styled from 'styled-components';
import { AutoSuggest, Header, Footer } from './components';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <AutoSuggest />
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
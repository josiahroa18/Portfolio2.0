import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import { AppContainer } from './styles/StyledComponents';

function App() {
  return (
    <AppContainer>
      <Header/>
      <Route exact path='/'>
        <Main/>
      </Route>
    </AppContainer>
  );
}

export default App;

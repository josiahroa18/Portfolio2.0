import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import ProjectPage from './components/Projects/ProjectPage';
import SkillPage from './components/Skills/SkillPage';
import { AppContainer } from './styles/StyledComponents';

function App() {
  return (
    <AppContainer>
      <Header/>
      <Route exact path='/'>
        <Main/>
      </Route>
      <Route path='/projects'>
        <ProjectPage/>
      </Route>
      <Route path='/skills'>
        <SkillPage/>
      </Route>
    </AppContainer>
  );
}

export default App;

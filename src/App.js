import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import ProjectPage from './components/Projects/ProjectPage';
import SkillPage from './components/Skills/SkillPage';
import AboutPage from './components/About/AboutPage';
import ContactPage from './components/Contact/ContactPage';
import ResumePage from './components/Resume/ResumePage';
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
      <Route path='/about'>
        <AboutPage/>
      </Route>
      <Route path='/contact'>
        <ContactPage/>
      </Route>
      <Route path='/resume'>
        <ResumePage/>
      </Route>
    </AppContainer>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import ProjectPage from './pages/ProjectsPage';
import SkillPage from './pages/SkillPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
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

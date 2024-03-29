import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  
//componentes e paginas
import Home from './components/pages/Home';
import Company from './components/pages/Company'; 
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project'

import Container from './components/layout/Container';
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
     <Router>
        <NavBar/>
        <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects/>} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
          <Route exact path='/project/:id' element={<Project />} />
        </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
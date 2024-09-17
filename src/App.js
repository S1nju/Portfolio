

import Aboutme from './about-me-section/Aboutme';
import './App.css';

import Header from './components/Header';
import Contact from './contactmesection/Contact';
import Project from './ProjectsSection/Project';
import Wave from 'react-wavify'
import Skills from './skillssection/skills';
import Education from './education section/education';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/loading';


function App() {
  return (


<Routes>
  <Route path='/' element={<Loading></Loading>}>
<Route path='/' element={  <div className='app'>
<Header></Header>
<div className='abtme'>
<Aboutme></Aboutme>
<Wave fill='white'
        paused={false}
        style={{ display: 'flex',width:'100vw',scale:'1.1',zIndex:'1'}}
        options={{
          height: 15,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
</div>
<Project></Project>
<Skills></Skills>
<Education></Education>
<Contact></Contact>
</div>}></Route></Route>
</Routes>



  );
}

export default App;

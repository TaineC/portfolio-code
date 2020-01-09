import React, {Component} from 'react';
import Landing from './Landing';
import ProjectThreads from './ProjectThreads';
import ProjectBarber from './ProjectBarber';
import Profile from './Profile';

import {BrowserRouter,Route} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

class App extends Component{

  render(){
    return (
      <div className='app'>
      
      <div className='mobileNav'>
        <Dropdown>
          <Dropdown.Toggle className='custom' variant='' id='dropdown-basic' aria-expanded='true'>
            <i className='fas fa-cog'></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className='link' href='https://www.linkedin.com/in/taine-collins-731351188' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'></i></Dropdown.Item>
            <Dropdown.Item className='link' href='https://github.com/TaineC' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      
      <div className='navbar'>
        <a className='link' href='https://www.linkedin.com/in/taine-collins-731351188' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
        <a className='link' href='https://github.com/TaineC' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
      </div>

        <BrowserRouter basename='/'>
          <Route exact path='/' component={Landing}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/threads' component={ProjectThreads}/>
          <Route path='/barber' component={ProjectBarber}/>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;

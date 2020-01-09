import React, {Component} from 'react';
import './App.scss';

import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import ThreadsMockup from './img/threads_display_mockup.png';

class Threads extends Component{

  pageTop(){
    document.documentElement.scrollTop = 0;
  }

  render(){
    return (
      <div className='project'>
        <div className='content'>
          <div className='mockup'>
            <a href='https://www.freepik.com/free-photos-vectors/mockup' target='_blank' rel='noopener noreferrer'>Mockup by zlatko_plamenov</a>
            <img src={ThreadsMockup} alt=''/>
          </div>
          <div className='info'>
            <h2>Threads</h2>
            <p>The task was to work as a team to build an application that is intuitive to use and displays data from an API in an easily understandable representation. The project was managed using agile methodologies and the team members used the MERN stack to produce a dynamic fully functional application.</p>
            <div className='projectbuttons'>
              <Link to='/threads'><Button onClick={this.pageTop}>View Project</Button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 

export default Threads;
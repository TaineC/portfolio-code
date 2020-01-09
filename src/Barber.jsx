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
            <h2>Barber</h2>
            <p>This project is in the early stage of development but has been thoroughly planned to be built using the latest development tools and software. The structure of the application has been planned with an ERD and UML diagram. The production of the application will use the React framework for the front end and Node for the back end. Within the application there will also include a search algorithm, interrelational data processing with redux and various areas for scalability.</p>
            <div className='projectbuttons'>
              <Link to='/barber'><Button onClick={this.pageTop}>View Project</Button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 

export default Threads;
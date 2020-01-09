import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

import logoleft from './img/logo-left.png';
import logoright from './img/logo-right.png';

class App extends Component{

  render(){
    return (
      <div className='app'>
        <div className='main'>
          <div className='profileBackground'></div>
          <div className='profileContent'>
            <h1>Taine Collins</h1>
            <h4>I am a Web Developer with a history in design based in Auckland, New Zealand. </h4>
            <p>Over the past two year I have grown an understanding of the industry and it motivates me want to continue to grow and learn more. In the coming years I want to further develop my skillset and work on more innovative projects. I have highly technical problem solving skills when understanding software related problems. I have used this skillset to build and write more complex web applications.</p>
          </div>
          <Link to='/'>
          <div className='logo logoSmall'>
            <img src={logoleft} className='logo-left' alt='logo-left'/>
            <img src={logoright} className='logo-right' alt='logo-right'/>
          </div>
        </Link>
        </div>
        
      </div>

    );
  }
}

export default App;

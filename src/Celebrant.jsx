import React, {Component} from 'react';
import './App.scss';

import CelebrantMockup from './img/celebrant_website_mockup.png';
import Button from 'react-bootstrap/Button';

class Celebrant extends Component{

  render(){
    return (
      <div className='project'>
        <div className='content'>
          <div className='mockup'>
            <a href='https://www.freepik.com/free-photos-vectors/background' target='_blank' rel='noopener noreferrer'>Mockup by zlatko_plamenov</a>
            <img src={CelebrantMockup} alt=''/>
          </div>
          <div className='info'>
            <h2>NZ Celebrant Theresa Johnson</h2>
            <p>This website was built for a wedding celebrant service as a Content Management System using WordPress. The website was built as a LAMP stack site and made to be highly customisable for the website's admin.</p>
            <div className='projectbuttons'>
              <Button href='http://celebrant.taine.collins.yoobee.net.nz/' target='_blank'>Visit Website</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Celebrant;
import React, {Component} from 'react';
import './App.scss';
import {Button} from 'react-bootstrap';

import Image1 from './img/threads_homepage.png';
import Image2 from './img/threads_profile.png';
import Image3 from './img/threads_addproduct.png';
import Image4 from './img/threads_item.png';
import Image5 from './img/threads_purchaseditem.png';

class ProjectThreads extends Component{

  render(){
    return (
      <div className='app'>
        <div className='detailsContent'>
          <div className='summary'>
            <h2>Barber</h2>
            <p>Threads is a consumer to consumer high end second hand clothes selling application. The app allows for users to create an account where they can view and purchase products other users are selling. They can also list their own products to sell. After purchasing a product they can leave a review on the users product so other users can see what previous purchasers thought of their products.</p>
            <div className='projectbuttons'>
              <a className='link' href='https://github.com/TaineC/threads-api' target='_blank' rel='noopener noreferrer'>
                <Button><i className='fab fa-github'></i><span className='gitButton'>API</span></Button>
              </a>
              <a className='link' href='https://github.com/TaineC/threads' target='_blank' rel='noopener noreferrer'>
                <Button><i className='fab fa-github'></i><span className='gitButton'>Application</span></Button>
              </a>
            </div>
          </div>
            
          <div className='projectInfo'>
            
          </div>
        </div>
      </div>
    );
  }
}
 

export default ProjectThreads;
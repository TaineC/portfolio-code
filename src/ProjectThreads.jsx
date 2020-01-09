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
              <h2>Threads</h2>
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
              <div className='mockup'>
                <img src={Image1} alt=''/>
              </div>
              <div className='content'>
                <h3>Landing</h3>
                <p>When the user launches the app they are greeted to the landing page shown here. On this page users have the ability to login to an existing account or sign up to create a new account so they can access all the features the application has to offer. Also on the landing page users can view products that are currently on sale whether they are logged in or not. If they are not logged in when they view the product then try to purchase the item it will then prompt the user to sign in or create an account.</p>
              </div>
            </div>
            <hr/>    
            <div className='projectInfo'>
              <div className='mockup'>
                <img src={Image2} alt=''/>
              </div>
              <div className='content'>
                <h3>Profile</h3>
                <p>When the user has created an account they will then be able to use the various different features the app has to offer. These features include the ability to list a product, purchase a product and leave reviews on purchased products. In the profile the user has the ability to change their display picture as well as edit their details which include their username and password. On this page they can also monitor all the products they are selling and the products they have built.</p>
              </div>
            </div>
            <hr/>
            <div className='projectInfo'>
              <div className='mockup'>
                <img src={Image3} alt=''/>
              </div>
              <div className='content'>
                <h3>Listings</h3>
                <p>When a user wants to sell a product they can go into the menu and click sell an item. It will take them to a form where they are able to put all the details of the product they wish to sell. The form lets them put their product into a category so that purchasers can filter products and find what they want more easily. Their is also space to put the name of the product, the description, the price and the photos. When the product has been listed the user can go back and edit the product details or remove the product completely if it hasn't been sold.</p>
              </div>
            </div>
            <hr/> 
            <div className='projectInfo'>
              <div className='mockup'>
                <img src={Image4} alt=''/>
              </div>
              <div className='content'>
                <h3>Products</h3>
                <p>With other users products anyone can buy it if they have an account. When viewing another product they can see the name, description, price and photos. They can also see the user that is selling the product so they can view what else that user is selling and the reviews they have received from their previous products sold. When the user clicks purchase they will be taken to a payment form which will take their address and payment details which will then get processed before the item gets delivered to the purchasers address.</p>
              </div>
            </div>
            <hr/> 
            <div className='projectInfo'>
              <div className='mockup'>
                <img src={Image5} alt=''/>
              </div>
              <div className='content'>
                <h3>Purchases</h3>
                <p>Once a user has bought a product it will then appear in their profile under purchases. From there they can click on review for the product they have bought. With this they are able to leave the rating and a comment on the product that they had bought from a specific user. Once they submit this review it will be under the user's product that they purchased it from as well as with the reviews they made on their other purchases.</p>
              </div>
            </div>
            <hr/> 
          </div>
    </div> 
    );
  }
}
 

export default ProjectThreads;
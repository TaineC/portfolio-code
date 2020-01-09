import React, {Component} from 'react';
import Threads from './Threads';
import Celebrant from './Celebrant';
import Barber from './Barber';
import './App.scss';

import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import {slideOutLeft, pulse} from 'react-animations';
import {scroller} from 'react-scroll';

import logoleft from './img/logo-left.png';
import logoright from './img/logo-right.png';
import hexagon1 from './img/hexagon1.png';
import hexagon2 from './img/hexagon2.png';
import hexagon3 from './img/hexagon3.png';
import hexagon4 from './img/hexagon4.png';
import hexagon5 from './img/hexagon5.png';

const HexMove = keyframes`${slideOutLeft}`;
const pulseAnimate = keyframes`${pulse}`;

const HexAn1 = styled.div`animation: 1s ${HexMove} infinite;`;
const HexAn2 = styled.div`animation: 3s ${HexMove} infinite;`;
const HexAn3 = styled.div`animation: 5s ${HexMove} infinite;`;
const HexAn4 = styled.div`animation: 2s ${HexMove} infinite;`;
const HexAn5 = styled.div`animation: 4s ${HexMove} infinite;`;
const HexAn6 = styled.div`animation: 7s ${HexMove} infinite;`;
const HexAn7 = styled.div`animation: 6s ${HexMove} infinite;`;
const HexAn8 = styled.div`animation: 4s ${HexMove} infinite;`;
const HexAn9 = styled.div`animation: 3s ${HexMove} infinite;`;
const CreatorName = styled.div`animation: 3s ${pulseAnimate} infinite;`;
const DownArrow = styled.div`animation: 2s ${pulseAnimate} infinite;`;

class Landing extends Component{

  scrollToContainer(){
    scroller.scrollTo('projects', {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  render(){
    return (
      <div className='app'>

        <div className='landing'>
          <div className='backgroundImg'>
            <div className='hexagons'>
                <HexAn1>
                  <img src={hexagon1} className='hexagon hexagon1' alt='hexagon'/>
                </HexAn1>
                <HexAn2>
                  <img src={hexagon2} className='hexagon hexagon2' alt='hexagon'/>
                </HexAn2>
                <HexAn3>
                  <img src={hexagon3} className='hexagon hexagon3' alt='hexagon'/>
                </HexAn3>
                <HexAn4>
                  <img src={hexagon4} className='hexagon hexagon4' alt='hexagon'/>
                </HexAn4>
                <HexAn5>
                  <img src={hexagon5} className='hexagon hexagon5' alt='hexagon'/>
                </HexAn5>
                <HexAn6>
                  <img src={hexagon3} className='hexagon hexagon6' alt='hexagon'/>
                </HexAn6>
                <HexAn7>
                  <img src={hexagon5} className='hexagon hexagon7' alt='hexagon'/>
                </HexAn7>
                <HexAn8>
                  <img src={hexagon2} className='hexagon hexagon8' alt='hexagon'/>
                </HexAn8>
                <HexAn9>
                  <img src={hexagon1} className='hexagon hexagon9' alt='hexagon'/>
                </HexAn9>
              </div>
            <div className='backgroundCover'></div>
          </div>
          <Link to='/profile'>
            <div className='logo'>
              <img src={logoleft} className='logo-left' alt='logo-left'/>
              <img src={logoright} className='logo-right' alt='logo-right'/>
            </div>
          </Link>
          <div className='title'>
            <CreatorName>
              <Link to='/profile'><h1>Taine Collins</h1></Link>
            </CreatorName>
            <h2>Web Developer</h2>
          </div>
          <div className='downArrow'>
            <DownArrow>
              <i onClick={() => this.scrollToContainer()} className='fas fa-chevron-down'></i>
            </DownArrow>
          </div>
        </div>

        <div className='projects'>
          <Threads/>
          <Barber/>
          <Celebrant/>
        </div>
      </div>
    );
  }
}
 

export default Landing;
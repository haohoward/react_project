import React from 'react';
import '../styles/BigPicture.scss';
import { Carousel } from 'react-bootstrap';

export default function BigPicture() {
  return (
    <div className='bigpicture'>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className='d-block w-100'
            src='https://hotaicdn.azureedge.net/toyotaweb/BANNER_202109301723359A31848A.jpg'
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className='d-block w-100'
            src='https://hotaicdn.azureedge.net/toyotaweb/BANNER_2021100117014847946163.jpg'
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className='d-block w-100'
            src='https://hotaicdn.azureedge.net/toyotaweb/BANNER_2021093016593700000001.jpg'
            alt='Third slide'
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className='d-block w-100'
            src='https://hotaicdn.azureedge.net/toyotaweb/BANNER_202109241632038D6AE3E7.jpg'
            alt='Forth slide'
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className='d-block w-100'
            src='https://hotaicdn.azureedge.net/toyotaweb/BANNER_20210929115540K3DDH1K4.jpg'
            alt='Fivth slide'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

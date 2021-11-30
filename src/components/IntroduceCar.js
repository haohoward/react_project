import React, { useState } from 'react';
import '../styles/IntroduceCar.scss';

export default function Introducecar() {
  
  return (
    <div className='introduce'>
      <h2 className='main'>車款介紹</h2>
      <div className='carType'>
        <button className='textType' >全部</button>
        <button className='textType'>油電複合車</button>
        <button className='textType'>插電式油電複合車</button>
        <button className='textType'>轎車</button>
        <button className='textType'>掀背車</button>
        <button className='textType'>運動休閒車</button>
        <button className='textType'>多功能休旅車</button>
        <button className='textType'>跑車</button>
      </div>
    </div>
  );
}

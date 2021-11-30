import React from 'react';
import '../styles/More.scss';

export default function More() {
  return (
    <div className='more'>
      <div className='moreText'>
        <div className='newInformation'>
          <h4>掌握最新資訊</h4>
        </div>
        <div className='WEB'>
          <h4>相關網站</h4>
        </div>
      </div>
      <div className='webLink'>
        <a href='https://www.facebook.com/TOYOTA.Taiwan'>
          <img
            src='https://cdn-icons.flaticon.com/png/128/2504/premium/2504903.png?token=exp=1635428749~hmac=8b0da800522973670c951c034c9d1a09'
            width='30px'
            alt=''
          />
          <i></i>TOYOTA TAIWAN
        </a>
        <a href='https://www.facebook.com/Toyotalove.earth99'>
          <img
            src='https://cdn-icons.flaticon.com/png/128/2504/premium/2504903.png?token=exp=1635428749~hmac=8b0da800522973670c951c034c9d1a09'
            width='30px'
            alt=''
          />
          <i></i>TOYOTA 環保特攻隊
        </a>
        <a href='https://www.instagram.com/toyotatw/'>
          <img
            src='https://cdn-icons-png.flaticon.com/128/1409/1409946.png'
            width='30px'
            alt=''
          />
          <i></i>TOYOTA IG
        </a>
        <a href='https://www.youtube.com/user/TOYOTA2012TW'>
          <img
            src='https://www.toyota.com.tw/images/index-footer/icon-youtube.png'
            width='30px'
            alt=''
          />
          <i></i>TOYOTA YT
        </a>
      </div>
    </div>
  );
}

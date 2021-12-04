import React from 'react';
import '../styles/nav.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='header'>
      <div className='leftHeader'>
        <img
          className='nav_logo'
          src='https://www.toyota.com.tw/images/logo/logo-toyota.png'
          width='150px'
          alt=''
        />
        <Link to='/SecondPage' className='linkTo'>
          <i></i>品牌新知
        </Link>
        <Link to='/SecondPage' className='linkTo'>
          <i></i>購車資訊
        </Link>
        <Link to='/SecondPage' className='linkTo'>
          <i></i>售後服務
        </Link>
      </div>
      <div className='rightHeader'>
        <img
          className='label'
          src='https://t3.ftcdn.net/jpg/01/97/13/54/240_F_197135414_Hiy7mFFJQUBDoNm33L7i9sNUUtJNllXs.jpg'
          width='30px'
          alt=''
        />
        <a href='https://www.toyota.com.tw/owner_login.aspx' className='label'>
          <img
            src='https://t3.ftcdn.net/jpg/01/03/98/10/240_F_103981090_XHS2eMXAgijVqSyVuRVEFfjYDVVKrM0F.jpg'
            width='30px'
            alt=''
          />
          <i></i>追蹤清單
        </a>
        <a href='https://www.toyota.com.tw/owner_login.aspx' className='label'>
          <img
            src='https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg'
            width='30px'
            alt=''
          />
          <i></i>HI!您好
        </a>
      </div>
    </nav>
  );
}

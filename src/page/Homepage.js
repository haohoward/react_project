import React, { useEffect, useState } from 'react';
import '../styles/Homepage.scss';
import Nav from '../components/Nav';
import BigPicture from '../components/BigPicture';
import IntroduceCar from '../components/IntroduceCar';
import Information from '../components/Information';
import More from '../components/More';
import ImgCard from '../components/ImgCard';
import axios from 'axios';

export default function Homepage() {
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    const fetchCardItem = async (req, res) => {
      const apiUrl = 'https://midterm-16.herokuapp.com/api/category';
      const { data } = await axios.get(apiUrl);
      console.log(data);
      setCardItems(data);
    };
    fetchCardItem();
  }, []);
  console.log(cardItems);
  return (
    <div>
      <Nav />
      <BigPicture />
      <IntroduceCar />
      <div className='homepageCard'>
      {cardItems.map((cardItem) => {
          return (           
                <ImgCard 
                  key={cardItem.id}
                  imgUrl={cardItem.img}
                  title={cardItem.title}
                  price={cardItem.price}
                  type={cardItem.type}
                />
          );
        })}
        </div>
      <More />
      <Information />
    </div>
  );
}

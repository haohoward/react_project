import React from 'react';
import { useHistory } from 'react-router';

export default function Homepage() {
  const history = useHistory();
  function activateLasers() {
    history.push('/');
  }
  return (
    <div>
      <button onClick={activateLasers}>返回</button>
      <h2>車主快訊</h2>
      <div>
        <img src='https://hotaicdn.azureedge.net/toyotaweb/NEWS_20211101160827C648F0CF.jpg' />
        <img src='https://hotaicdn.azureedge.net/toyotaweb/NEWS_2017080410215300000000.jpg' />
        <img src='https://hotaicdn.azureedge.net/toyotaweb/NEWS_2021100109452687C21C26.jpg' />
      </div>
    </div>
  );
}

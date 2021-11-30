import React from 'react';
import Homepage from './page/Homepage';
import SecondPage from './page/SecondPage';
import { Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/secondPage' exact>
          <SecondPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

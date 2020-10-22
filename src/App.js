import React from 'react';
import Header from './component/main/header';
import Calculator from './component/main/calculator';
import Bmi from './component/main/bmi';
import Stopwatch from './component/main/stopwatch';
import Thermometer from './component/main/thermometer';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Route exact path="/" component={Calculator}></Route>
        <Route exact path="/calculator" component={Calculator}></Route>
        <Route exact path="/bmi" component={Bmi}></Route>
        <Route exact path="/stopwatch" component={Stopwatch}></Route>
        <Route exact path="/thermometer" component={Thermometer}></Route>



      </Router>

    </div>
  );
}

export default App;

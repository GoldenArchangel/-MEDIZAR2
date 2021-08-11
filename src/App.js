import React from 'react';
import './App.css';
import ABOUT from './Pages/about.js';
import START from './Pages/start.js';
import CONTACT from './Pages/contact.js';
import PRICES from './Pages/prices.js';
import EU from './Pages/eu.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



// import {useTranslation} from 'react-i18next';


function App() {


  // const { t } = useTranslation();



  return (
 
  <Router>



  <div>


    
    <Switch>
    <Route path="/" exact component={START} />
    <Route path="/about" component={ABOUT} />
    <Route path="/prices" component={PRICES} />
    <Route path="/eu" component={EU} />
    <Route path="/contact" component={CONTACT} />







    {/* <Route path="" component={} /> */}
    {/* <Route path="" component={} /> */}
    {/* <Route path="" component={} /> */}

    </Switch>
  

   
  
  </div>
  </Router>
  );






}


export default App;

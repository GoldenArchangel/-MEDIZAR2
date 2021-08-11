import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
// import i18n from 'i18next';

// import { reactI18nextModule} from 'react-i18next';
// import locale from 'react-native-locale-detector';
// import {AsyncStorage} from 'react-native';





ReactDOM.render(
  <Suspense fallback={(<div>Loading ~~~~~</div>)} >


    <App />

    </Suspense>
 , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//šbserviceWorker.unregister();

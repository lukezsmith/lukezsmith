/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import BaseRouter from './routes';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import CustomLayout from './containers/CustomLayout';



function App (){

  ReactGA.initialize('UA-142802186-1');

  function fireTracking() {
    ReactGA.pageview(window.location.hash);
  }
    return (
      <div className="App">
        <Router onUpdate={fireTracking}>
          <CustomLayout >
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }

export default App;

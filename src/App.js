/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import CustomLayout from './containers/CustomLayout';
import {favicon} from './images/favicon.ico'

function App (){
    return (
      <div className="App">
        <Router>
          <CustomLayout >
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }

export default App;

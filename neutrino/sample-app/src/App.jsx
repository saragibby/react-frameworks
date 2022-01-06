import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';

import Title from "./myComponents/Title"

const message = 'Welcome to sample-appzzz';

const App = () => (
  <div className="App">
    <h1>{message}</h1>
    <p>bacon</p>
    <Title framework="neutrino" />
  </div>
);

export default hot(module)(App);

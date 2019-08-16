import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './components/MainPage';
import ThreadPage from './components/ThreadPage';
import DataContext from './dataContext';

function App() {
  return (
    <div className="App">
      <DataContext>
      <BrowserRouter>
        <Switch>
          <Route path="/thread/:id" component = {ThreadPage}/>
          <Route path="/" component = {MainPage}/>
        </Switch>
      </BrowserRouter>
      </DataContext>
    </div>
  );
}

export default App;

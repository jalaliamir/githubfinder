import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import Home from './pages/Home';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './pages/NotFound';
const App = () => {
  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await Axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  //get user repos

  //set Alert

  return (
    <GithubState>
      <AlertState>
        <Routes>
          <div className='App'>
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert alert={alert} />
             
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route  component={NotFound} />
              
            </div>
          </div>
        </Routes>
      </AlertState>
    </GithubState>
  );
};

export default App;

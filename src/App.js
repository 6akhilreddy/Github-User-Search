import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Appbar from './components/Appbar';
import DisplayAvatar from './components/DisplayAvatar'
import DisplayRepos from './components/DisplayRepos'
import DisplayDetails from './components/DisplayDetails';
import DisplayNone from './components/DisplayNone';
import Axios from 'axios'
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {

  state={
    avatar:'',
    username:'',
    bio:'',
    repos:null,
    followers:null,
    id:null,
    reposURL:'',
    repositories:[]
  }

  changeState=(e)=>{
    this.setState({
      avatar:e.avatar,
      username:e.username,
      bio:e.bio,
      repos:e.repos,
      followers:e.followers,
      id:e.id,
      reposURL:e.reposURL
    },()=>{
      Axios.get(`${this.state.reposURL}`, {
        params: {
            client_id:'4221b3232e24bb8e26d8',
            client_secret:'44ee404fa7b7ac979c0e19060895901866bb6cca'
        }     
    }).then(res=>{
      this.setState({repositories:res.data})
    }).catch(err=>{
      console.log(err);
    })
    })
  }


  render() {
    const mainPage=(
    <Route exact path="/main">
    <div className="App">
        <Appbar change={this.changeState} />
        {this.state.id != null ? (
          <React.Fragment>
            <DisplayAvatar image={this.state.avatar}/>
            <DisplayDetails details={this.state}/>
            <DisplayRepos repos={this.state.repositories} />
          </React.Fragment>
        ) : (
          <React.Fragment>
          <DisplayNone />
          </React.Fragment>
        )}
      </div>
    </Route>  
    )
    const loginpage=(
      <Login />
    )
    return (
      <Router>
      {localStorage.usertoken ? mainPage : loginpage}
      </Router>
      
    );
  }
}

export default App;

import React,{Component} from 'react';
import './App.css';
import './components/project.css';
import Login from './components/login';
import Signup from './components/sign';
import Home from './components/home';
import Qpaper from './components/qpaper';
import Marks from './components/mark';
import Profile from './components/profile';
import Logout from './components/logout';
import Med from './components/mediator';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <>
      <div className="container-fluid header">
        <div className="row">
        <div className="col-sm-1 header-div">
        <img src={require('./components/images/4.png')} height={'80'} width={'80'}/>
      </div>
      <div className="col-sm-6">
        <h1><b>Online EXAM-nation Platform</b></h1>
      </div>
      </div>
      </div>
      <Router>
      <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home}/>
      <Route path="/qpaper" component={Qpaper}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/marks" component={Marks}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/med" component={Med}/>
      </Switch>
      </Router>
      </>
    );
  }
}

export default App;

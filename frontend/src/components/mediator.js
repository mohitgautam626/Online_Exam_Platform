import React,{Component} from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import './project.css';
import QueryString from 'query-string';

class Med extends Component{
  constructor(){
    super()
    this.state={
      success:"",
    }
  }
  componentDidMount(){
    var res=QueryString.parse(this.props.location.search);
    const sc=res.Subject_Code;
    var sc2={
      sc:sc,
    }

    axios.post(`http://localhost:5000/test_register`,sc2)
    .then(res=>{
      this.setState({
        success:res.data,
      })
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  render(){
    const {success}=this.state;
    var res=QueryString.parse(this.props.location.search);
    const sc=res.Subject_Code;
    if(success==='Inserted Successfully'){
    return <Redirect to={'/qpaper/?Subject_Code='+sc+'&que=1'}/>;
    }
    else{
      return(<p>Unable to Lodge your Request</p>);
    }
  }
}

export default Med;

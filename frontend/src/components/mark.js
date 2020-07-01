import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './project.css';

class Home extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      reg:'',
      disabled:true,
      arr:[],
      detail:[],
    }
  }
  componentDidMount(){
    axios.post(`http://localhost:5000/home`,this.state)
      .then(response=>{
        this.setState({
          detail:response.data,
        })
        console.log(response.data);
      })
      .catch(error=>{
        console.log(error);
      })

      axios.post(`http://localhost:5000/marks`,this.state)
        .then(response=>{
          this.setState({
            arr:response.data,
          })
          console.log(response.data);
        })
        .catch(error=>{
          console.log(error);
        })
  }
  render(){
    const {name,reg,arr,detail}=this.state;
    console.log(arr.length);
    return(
      <div>
      <nav className="navbar navbar-inverse">
  <div className="container-fluid nav-size">
    <div className="navbar-header">
    {
      detail.map((item,index)=>{
        return(
          <React.Fragment key={index}>
          <a className="navbar-brand" href="#"><img src={require(`./DP/1.jpg`)} height={'30'} width={'40'} alt="P"/></a>
          </React.Fragment>
        );
      })
    }
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li className="active"><Link to="/marks">Marks Analysis</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><span className="glyphicon glyphicon-log-out"></span>Log Out</a></li>
    </ul>
  </div>
</nav>
<div className="container-fluid">
<div className="row home-cat">
<div className="col-xs-2">
</div>
<div className="col-xs-8 home-contain"><br/>
<h1 className="mark-head">Result Summary</h1>
<hr className="mark-hr"/>
{
  arr.map((item,index)=>{
    var dote=item.Submission;
    var d=dote.split('T');
    return(
<div className="row home-card" disabled={this.state.disabled} key={index}>
<div className="col-xs-2">
</div>
<div className="col-xs-8 home-card-col">
<h3 className="home-card-head"><b>TID:{item.EID} {item.Subject}</b></h3>
<div className="row">
<div className="col-xs-6 mark-content">
<p className="home-card-content-2"><br/>
Submission:{d[0]}<br/>
Examiner:{item.Examiner}<br/><br/>
<b>National Institute Of Technology(Administration Reports)</b><br/>
</p>
</div>
<div className="col-xs-6 circle">
<div><br/>
<h1 className="circle-a">Obtained:{item.Obtained}</h1>
</div>
<hr className="line"/>
<div>
<h1 className="circle-a">Total:30</h1><br/>
</div>
</div>
</div>
</div>
<div className="col-xs-2">
</div>
</div>
);
})
}
<br/><br/><br/>
</div>
</div>
</div>
<br/>
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">Exam-nation.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple.</p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul className="footer-links">
            <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
            <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
            <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href="http://scanfcode.com/about/">About Us</a></li>
            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <hr/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
       <a href="#">Exam-nation</a>.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
</footer>
</div>
    );
  }
}

export default Home;

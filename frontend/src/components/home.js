import React,{Component} from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import './project.css';

class Home extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      reg:'',
      disabled:true,
      arr:[],
      logout:0,
    }
  }
  componentDidMount(){
    axios.post(`http://localhost:5000/home`,this.state)
      .then(response=>{
        this.setState({
          name:response.data.name,
          reg:response.data.reg,
        })
      })
      .catch(error=>{
        console.log(error);
      })
  }
  submitHandler(e){
    e.preventDefault();
    console.log(this.state);
    axios.post(`http://localhost:5000/exam_paper`,this.state)
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
  clickHandler(e){
    this.setState({
      [e.target.name]:e.target.value,
    })
  }
  render(){
    const {name,reg,arr}=this.state;
    console.log(arr.length);
    return(
      <div>
      <nav className="navbar navbar-inverse">
  <div className="container-fluid nav-size">
    <div className="navbar-header">
      <a className="navbar-brand" href="#"><img src={require(`./DP/1.jpg`)} height={'30'} width={'40'} alt="P"/></a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/home">Home</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/marks">Marks Analysis</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/logout"><span className="glyphicon glyphicon-log-out"></span>Log Out</Link></li>
    </ul>
  </div>
</nav>
<div className="container-fluid">
<div className="row home-cat">
<div className="col-xs-2">
</div>
<div className="col-xs-8 home-contain"><br/>
<div className="row">
<form>
<div className="col-xs-4">
<label>Programme:</label>
<select className="form-control" name="pgm" onChange={this.clickHandler.bind(this)}>
<option></option>
<option>UnderGraduate Course</option>
<option>PostGraduate Course</option>
</select>
</div>
<div className="col-xs-4">
<label>Branch:</label>
<select className="form-control" name="branch" onChange={this.clickHandler.bind(this)}>
<option></option>
<option>Computer Science</option>
<option>Electronics & Communication</option>
<option>Electrical</option>
<option>Mechanical</option>
<option>Metallurgical</option>
<option>Production & Industrial</option>
</select>
</div>
<div className="col-xs-2">
<label>Year:</label>
<select className="form-control" name="year" onChange={this.clickHandler.bind(this)}>
<option></option>
<option>Ist</option>
<option>IInd</option>
<option>IIIrd</option>
<option>IVth</option>
</select>
</div>
<div className="col-xs-2">
<button className="btn btn-success form-control btn1" type="submit" onClick={this.submitHandler.bind(this)}>Lets Go</button>
</div>
</form>
</div>
{
  arr.map((item,index)=>{
    var frodt=new Date(item.From);
    var todt=new Date(item.To);

    var res=Math.abs(todt-frodt)/1000;
    var hours=Math.floor(res / 3600) % 24;
    var min=Math.floor(res / 60) % 60;
    var sec=res % 60;

    var sc=item.Subject_Code;
    sc=sc.toLowerCase();

    return(
<div className="row home-card" disabled={this.state.disabled} key={index}>
<div className="col-xs-2">
</div>
<div className="col-xs-8 home-card-col">
<h3 className="home-card-head"><b>{item.Subject_Code}  {item.Subject_Name}</b></h3>
<p className="home-card-content">
Available : {item.From} to {item.To}<br/>
Duration of Exam:{hours} hr<br/>
Total MCQs:{item.Total_MCQ}<br/>
Attempt: 0 of 1</p>
<Link className="home-begin" to={'/med/?Subject_Code='+sc}><i className="fa fa-play"></i>Lets Begin</Link>
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

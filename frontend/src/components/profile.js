import React,{Component} from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import './project.css';
import ImageUploader from 'react-images-upload';

class Home extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      reg:'',
      disabled:true,
      arr:[],
      ha:'',
      pa:'',
      bg:'',
      ha_err:'',
      pa_err:'',
      bg_err:'',
      detail:[],
    }
  }
  componentDidMount(){
    axios.post(`http://localhost:5000/home`,this.state)
      .then(response=>{
        this.setState({
          arr:response.data,
        })
        console.log(response.data);
      })
      .catch(error=>{
        console.log(error);
      })
      axios.post(`http://localhost:5000/marks`,this.state)
        .then(response=>{
          this.setState({
            detail:response.data,
          })
          console.log(response.data);
        })
        .catch(error=>{
          console.log(error);
        })
  }
  clickHandler(event){
    this.setState({
      [event.target.name]:event.target.value,
    })
  }
  submitHandler(event){
    event.preventDefault();
    const {pa,ha,bg,pa_err,ha_err,bg_err}=this.state;
    if(pa===''){
      this.setState({
        pa_err:'*empty field',
      })
    }
    else if(ha===''){
      this.setState({
        ha_err:'*empty field',
      })
    }
    else if(bg===''){
      this.setState({
        bg_err:'*empty field',
      })
    }
    else{
      axios.post(`http://localhost:5000/update`,this.state)
        .then(response=>{
          console.log(response.data);
        })
        .catch(err=>{
          console.log(err);
        })
    }
  }
  fileUploader(event){
    var img=event.target.files;
    let reader=new FileReader();
    reader.readAsDataURL(img[0]);
    reader.onload=(event)=>{
      console.log(event.target.result);
    }
  }
  render(){
    const {arr,pa_err,ha_err,bg_err,detail}=this.state;
    var max=0,min=100;
    var name='';
    var reg_No='';
    var pass='';
    var dob='';
    var ha='';
    var pa='';
    var bg='';
    var dp='';
    arr.map(item=>{
        name=item.Name;
        reg_No=item.Reg_No;
        pass=item.Pass;
        dob=item.DOB;
        ha=item.HA;
        pa=item.PA;
        bg=item.BG;
        dp=item.DP_source;
    })
    var src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={Name:${name},Reg_No:${reg_No},Pass:${pass},DOB:${dob},Hostel_Address:${ha},Permenant_Address:${pa},Blood_Group:${bg}}`;
    return(
      <div>
      <nav className="navbar navbar-inverse">
  <div className="container-fluid nav-size">
    <div className="navbar-header">
      <a className="navbar-brand" href="#"><img src={require(`./DP/1.jpg`)} height={'30'} width={'40'} alt="P"/></a>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/home">Home</Link></li>
      <li className="active"><Link to="/profile">Profile</Link></li>
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
<h1 className="profile-head2"><b>PERSONAL INFORMATION</b></h1>
<hr className="profile-hr"/>
<div className="col-xs-2">
</div>
<div className="col-xs-3">
<div className="container123">
<img src={require("./DP/1.jpg")} className="profile-img" alt="DP"/>
  <div className="overlay">
    <div className="text"><input type="file" onChange={this.fileUploader.bind(this)} className="file-upload"/></div>
  </div>
</div>
</div>
<div className="col-xs-6 profile-pi">
{
  arr.map((item,index)=>{
    var date=new Date(item.DOB).toLocaleString({timeZone: 'Asia/Kolkata'});
    var dob=String(date).split(',');
    var d=new Date(dob[0]);
    var dd=d.getDate();
    var mm=d.getMonth()+1;
    var yy=d.getFullYear();
    dd=dd>9?dd:"0"+dd;
    mm=mm>9?mm:"0"+mm;
    return(
      <React.Fragment key={index}>
      <h4><b>Name:</b>{item.Name}</h4>
      <h4><b>Reg_No:</b>{item.Reg_No}</h4>
      <h4><b>Date Of Birth:</b>{`${dd}-${mm}-${yy}`}</h4>
      <h4><b>Gender:</b>{item.Gender}</h4>
      <h4><b>Total Attempts:</b>{detail.length}</h4>
      </React.Fragment>
    );
  })
}
</div>
</div>
<div className="row">
<div className="col-xs-1">
</div>
<div className="col-xs-10">
<table className="table table-stripped table-bordered profile-table">
<thead>
<tr>
<th className="profile-table-head">Highest Marks</th>
<th className="profile-table-head">Lowest Marks</th>
</tr>
</thead>
<tbody>
<tr>
{
  detail.map(item=>{
    if(max<item.Obtained){
      max=item.Obtained;
    }
    if(min>item.Obtained){
      min=item.Obtained;
    }
  })
}
<td>{max}</td>
<td>{min}</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="row">
<div className="col-xs-2">
</div>
<div className="col-xs-3">
<h4>QR-Code Student details</h4>
<div className="qrcode-div">
<img src={src} height={'150'} width={'150'} className="qrcode"/>
</div>
</div>
<div className="col-xs-7">
<h2>ADDITIONAL INFO<a href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-edit pencil"></i></a></h2>
<hr className="profile-hr2"/>
{
  arr.map((item,index)=>{
    return(
      <React.Fragment key={index}>
      <h4><b>Hostel Address:</b>{item.HA}</h4>
      <h4><b>Permenant Address:</b>{item.PA}</h4>
      <h4><b>Blood Group:</b>{item.BG}</h4>
      </React.Fragment>
    );
  })
}
</div>
</div>
</div>
</div>
</div>
<div className="modal fade" id="myModal" dialog="fade">
<div className="modal-dialog">
<div className="modal-content">

<div className="modal-header">
<button type="button" className="close" data-dismiss="modal">&times;</button>
<h1 className="modal-heading"><b>Additional Information</b></h1>
</div>
<form>
<div className="modal-body">
<div className="form-group">
<label>Hostel Address:</label>
<input type="text" className="form-control" onChange={this.clickHandler.bind(this)} name="ha"/>
<span className="text-danger">{ha_err}</span>
</div>
<div className="form-group">
<label>Permenant Address:</label>
<input type="text" className="form-control" onChange={this.clickHandler.bind(this)} name="pa"/>
<span className="text-danger">{pa_err}</span>
</div>
<div className="form-group">
<label>Blood Group</label>
<select className="form-control" onChange={this.clickHandler.bind(this)} name="bg">
<option></option>
<option>A+</option>
<option>B+</option>
<option>AB+</option>
<option>O+</option>
<option>A-</option>
<option>B-</option>
<option>AB-</option>
<option>O-</option>
</select>
<span className="text-danger">{bg_err}</span>
</div>
</div>

<div className="modal-footer">
<button type="submit" className="btn btn-success" onClick={this.submitHandler.bind(this)}>Update It!</button>
</div>

</form>

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

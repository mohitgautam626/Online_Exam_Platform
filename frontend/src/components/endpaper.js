import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import QueryString from'query-string';
import './project.css';
import axios from 'axios';

class Endpaper extends Component{
  constructor(){
    super();
    this.state={
      checked:0,
      results:[],
      details:[],
      answers:[],
      marks:0,
    }
  }

  async postData(datas){
    const res=await axios.post('http://localhost:5000/answers',datas);
    return await res;
  }

  async postData2(datas){
    const res=await axios.post('http://localhost:5000/answers2',datas);
    return await res;
  }

  async postData3(datas){
    const res=await axios.post('http://localhost:5000/answers3',datas);
    return await res;
  }

  componentDidMount(){
    var value=QueryString.parse(this.props.location.search);
    var subcode=value.Sub_Code;
    var datas={
      subcode:subcode,
    }

    this.postData(datas).then(res=>{
      this.setState({
        results:res.data,
      })
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

    this.postData2(datas).then(res=>{
      this.setState({
        details:res.data,
      })
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

    this.postData3(datas).then(res=>{
      this.setState({
        answers:res.data,
      })
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }


  render(){
    const {results,details,answers,marks}=this.state;
    var encounter=0;

    results.map((item,index)=>{
      answers.map((val,index2)=>{
        if(item.Q1===val.Ans && val.QID===1){
          encounter+=1;
        }
        if(item.Q2===val.Ans && val.QID===2){
          encounter+=1;
        }
        if(item.Q3===val.Ans && val.QID===3){
          encounter+=1;
        }
        if(item.Q4===val.Ans && val.QID===4){
          encounter+=1;
        }
        if(item.Q5===val.Ans && val.QID===5){
          encounter+=1;
        }
        if(item.Q6===val.Ans && val.QID===6){
          encounter+=1;
        }
        if(item.Q7===val.Ans && val.QID===7){
          encounter+=1;
        }
        if(item.Q8===val.Ans && val.QID===8){
          encounter+=1;
        }
        if(item.Q9===val.Ans && val.QID===9){
          encounter+=1;
        }
        if(item.Q10===val.Ans && val.QID===10){
          encounter+=1;
        }
        if(item.Q11===val.Ans && val.QID===11){
          encounter+=1;
        }
        if(item.Q12===val.Ans && val.QID===12){
          encounter+=1;
        }
        if(item.Q13===val.Ans && val.QID===13){
          encounter+=1;
        }
        if(item.Q14===val.Ans && val.QID===14){
          encounter+=1;
        }
        if(item.Q15===val.Ans && val.QID===15){
          encounter+=1;
        }
        if(item.Q16===val.Ans && val.QID===16){
          encounter+=1;
        }
        if(item.Q17===val.Ans && val.QID===17){
          encounter+=1;
        }
        if(item.Q18===val.Ans && val.QID===18){
          encounter+=1;
        }
        if(item.Q19===val.Ans && val.QID===19){
          encounter+=1;
        }
        if(item.Q20===val.Ans && val.QID===20){
          encounter+=1;
        }
        if(item.Q21===val.Ans && val.QID===21){
          encounter+=1;
        }
        if(item.Q22===val.Ans && val.QID===22){
          encounter+=1;
        }
        if(item.Q23===val.Ans && val.QID===23){
          encounter+=1;
        }
        if(item.Q24===val.Ans && val.QID===24){
          encounter+=1;
        }
        if(item.Q25===val.Ans && val.QID===25){
          encounter+=1;
        }
        if(item.Q26===val.Ans && val.QID===26){
          encounter+=1;
        }
        if(item.Q27===val.Ans && val.QID===27){
          encounter+=1;
        }
        if(item.Q28===val.Ans && val.QID===28){
          encounter+=1;
        }
        if(item.Q29===val.Ans && val.QID===29){
          encounter+=1;
        }
        if(item.Q30===val.Ans && val.QID===30){
          encounter+=1;
        }
      })
    })
    return(
      <>
      <div className="container-fluid">
      <div className="row">
      <div className="col-xs-3">
      </div>
      <div className="col-xs-6 end-div">
      <h1 className="end-h1"><b>Test Result</b></h1>
      <hr className="mark-hr"/>
      <table className="table table-striped table-bordered table-hover">
      <tbody>
      {
        results.map((item,index)=>{
          return(
      <React.Fragment key={index}>
      <tr>
      <td className="end-td2"><b>Name:</b></td>
      <td className="end-td2">{item.Name}</td>
      </tr>
      <tr>
      <td className="end-td2"><b>Reg No:</b></td>
      <td className="end-td2">{item.Reg_No}</td>
      </tr>
      </React.Fragment>
      );
      })
      }
      {
        details.map((item,index)=>{
          return(
            <React.Fragment key={index}>
            <tr>
            <td className="end-td2"><b>Subject Name:</b></td>
            <td className="end-td2">{item.Subject_Name}</td>
            </tr>
            <tr>
            <td className="end-td2"><b>Branch:</b></td>
            <td className="end-td2">{item.Branch}</td>
            </tr>
            </React.Fragment>
          );
        })
      }
      <tr>
      <td className="end-td2"><b>Marks Obtained:</b></td>
      <td className="end-td2">{encounter}</td>
      </tr>
      <tr>
      <td className="end-td2"><b>Out Of:</b></td>
      <td className="end-td2">30</td>
      </tr>
      </tbody>
      </table>
      <div className="row">
      <div className="col-xs-4">
      </div>
      <div className="col-xs-4">
      </div>
      <div className="col-xs-4">
      <Link to={`/home`} className="end-td2"><i className="fa fa-forward"></i>Back to home</Link><br/><br/>
      </div>
      </div>
      </div>
      </div>
      </div>
      <br/>
      </>
    );
  }
}

export default Endpaper;

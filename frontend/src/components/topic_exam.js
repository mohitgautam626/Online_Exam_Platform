import React,{Component} from 'react';

class Topic extends Component{
  render(props){
    var exam=this.props.name;
    return(
      <React.Fragment>
      {
        exam.map((item,index)=>{
          return(
            <React.Fragment key={index}>
            {item.Subject_Name} {item.Subject_Code}
            </React.Fragment>
          );
        })
      }
      </React.Fragment>
    );
  }
}

export default Topic;

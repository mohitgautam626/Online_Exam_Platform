import React from 'react';

function Qcode(props){
  var qcode=props.name;
  return(
    <>
    {
      qcode.map((item,index)=>{
        return(
          <React.Fragment key={index}>
          Question Code:#20{item.QID}
          </React.Fragment>
        );
      })
    }
    </>
  );
}

export default Qcode;

import React from 'react' //rfce

function Alert(props) {
  /*const capitalize = (word)=>{
    const lower = word;
    let newText=lower.charAt(0).toupperCase() + lower.slice(1).toLowerCase();
    return newText;
  }*/
  return (
      <div style={{height: '50px'}}>
          {/* agar props.alert null hai toh kuch ni milega vrna and ke baad wala milega!! */}
          {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{props.alert.type}</strong>: {props.alert.msg}
        
          </div>}
      </div>
    
  )
}

export default Alert


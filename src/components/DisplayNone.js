import React from 'react'


function DisplayNone() {
  return (
    <div className="App" style={backStyle}>
      <i className="fas fa-search" style={iconStyle}></i>
      <h1>Search Github Profiles and Repositories</h1>
      
    </div>
  )
}
const backStyle={
    height:'600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#fff'
}
const iconStyle={
    fontSize:'6em'
}
export default DisplayNone
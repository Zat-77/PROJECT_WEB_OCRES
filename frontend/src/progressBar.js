import React from "react";



const ProgressBar = (props) => {
  //const { completed } = props;
  const  completed  = 56;



  const containerStyles = {
    height: 25,
    width: '75%',
    backgroundColor: 'red',
    borderRadius: 20,
    margin: 25,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: 'green',
    borderRadius: 'inherit',
    textAlign: 'left'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
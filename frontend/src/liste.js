import React from "react";
import Figure from 'react-bootstrap/Figure'
import axios from 'axios';

  const fillerStyles = {
    height: '100%',
    
    
    borderRadius: 'inherit',
    textAlign: 'left'
  }
  const titre= {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
  class Liste extends React.PureComponent {
    constructor (props){
      super(props);
      this.state = {
        liste1 : "-",
        liste2 : "-",
        liste3 : "-",
        liste4 : "-", 
      };
  
    }
    async componentDidMount(){
      try{
        await axios.get('http://localhost:5000/liste/premier')
              .then(response => {
                  if (response.data.length >0) {
                      this.setState({
                        liste1: response.data
                      })
                  }
              }).catch( err => {
                  console.log(err)
              })
            
            
            await axios.get('http://localhost:5000/liste/deuxieme')
            .then(response => {
              
                if (response.data.length >0) {
                    this.setState({
                      liste2: response.data
                    })
                }
            }).catch( err => {
                console.log(err)
            })
          
          
          await axios.get('http://localhost:5000/liste/troisieme')
              .then(response => {
                console.log("BLa")
                  if (response.data.length >0) {
                      this.setState({
                        liste3: response.data
                      })
                  }
              }).catch( err => {
                  console.log(err)
              })
            
            
            await axios.get('http://localhost:5000/liste/quartieme')
              .then(response => {
                  if (response.data.length >0) {
                      this.setState({
                        liste4: response.data
                      })
                  }
              }).catch( err => {
                  console.log(err)
              })
            }
            catch (err){
              console.log(err)
            }
    }
    


    
    render (){
  return (
    <div>
    <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png"
  />
  <Figure.Caption>
  </Figure.Caption>
</Figure>

    <div>
      <div style={titre}>Liste des courses</div>
      <div style={fillerStyles}>
      <ul>
        <li>{this.state.liste1}</li>
        <li>{this.state.liste2}</li>
        <li>{this.state.liste3}</li>
        <li>{this.state.liste4}</li>
      </ul>
      </div>
    </div>
    </div>
  );
}
  }

export default Liste;
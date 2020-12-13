import React from 'react';
import axios from 'axios';

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


const titre1= {
  color: 'white',
  textAlign: 'center',
  fontSize: 30,
  fontWeight : 'bold'
}
const titre2= {
  color: 'white',
  textAlign: 'center',
  fontSize: 30,
}






class Meteo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          recherche: 'Paris',
          meteo : undefined,
        }         
    }

    chercherVille(ville)
    {
      this.setState({recherche: ville.target.value})
    }

    getTemps()
    {
      axios.get(`${API_URL}?q=${this.state.recherche}&units=metric&appid=${API_KEY}`)
      .then(res => {
        const nvmeteo = res.data;
        this.setState({ meteo: nvmeteo });
      })
    }

    infosMeteo()
    {
      let meteo;
      
      !!this.state.meteo && (meteo = this.state.meteo.weather[0].icon);
      return(`${API_URL_ICON + meteo}@2x.png`)
    }

    componentDidMount()
    {
      this.getTemps();
    }

    render=()=>
    {
        return(
            <div className="Meteo">
                <center><div style={titre1}>Météo</div></center>
                
               
                <div className="VilleTempHumi">

                  <div className="VilleTempHumi2"><center>
                    {!!this.state.meteo && (<>
                    <div style={{fontWeight: "bold"},{fontSize: 30}}>{this.state.meteo.name} </div>
                    
                    
                    <div>Température {this.state.meteo.main.temp}°C </div>

                    </>)}
                  </center></div>

                  <div className="Image"><center>
                  {!!this.state.meteo && (<>
                    <img src={this.infosMeteo()}></img>
                    <h2>{this.state.meteo.weather[0].main}</h2>  
                    </>)}           
                  </center></div>
                    
                </div>
                
            </div>
        );
    }
}

export default Meteo;
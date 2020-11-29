import React from 'react';
import './App.css';
import ProgressBar from './progressBar';
import SimpleLineGraphe from './simpleLineGraphe';
import Liste from './liste';
//import Home from './home';
//import Formulaire from './formulaire';
//import Navigation from './navigation';

function App() {

  return (

    <div className="App">

        <div>
          <SimpleLineGraphe/>
          <ProgressBar/>
          <Liste/>

        </div> 

    </div>
    
  );
}
export default App; 
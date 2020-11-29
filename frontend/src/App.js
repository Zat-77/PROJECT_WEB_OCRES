import React from 'react';
import './App.css';
import ProgressBar from './progressBar';
import SimpleLineGraphe from './simpleLineGraphe';

//import Home from './home';
//import Formulaire from './formulaire';
//import Navigation from './navigation';

function App() {

  return (

    <div className="App">

        <div>
          <SimpleLineGraphe/>
          <ProgressBar/>
        </div> 

    </div>
    
  );
}
export default App; 
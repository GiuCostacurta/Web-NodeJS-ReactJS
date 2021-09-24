import React, { Component } from 'react';
import './App.css';
import Perfil from './Perfil'
import Dados from './Dados'

class App extends Component {

  render() {
    return (
      <><div>
        <Perfil />
      </div><div>
          <Dados />
        </div></>
    )
  }

};



export default App;
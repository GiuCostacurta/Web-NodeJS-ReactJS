import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primeiroNumero: '',
      segundoNumero: '',
      resultado: ''
    };


    this.resultadoFinal = this.resultadoFinal.bind(this);

  }

  resultadoFinal() {

    this.setState({
      primeiroNumero: document.getElementById('um').value,
      segundoNumero: document.getElementById('dois').value,
      resultado: this.state.primeiroNumero * this.state.segundoNumero })
      
  }


  render() {
    return (
      <>
        <div>
              <legend>
                <h1>Multiplicador</h1>
                <h3>É necessário clicar duas vezes no botão para obter o resultado</h3>
              </legend>
              <div>
                <label><h4>Insira o primeiro número:</h4>
                  <input type="number" name="primeiroNumero" id="um"  />
                </label>
              </div>
              <div>
                <label><h4>Insira o segundo número:</h4>
                  <input type="number" name="segundoNumero" id="dois"  />
                </label>
              </div>

              <button onClick={this.resultadoFinal}>Multiplicar</button>
              <h2>{this.state.resultado}</h2>
        </div>
      </>
    );
  }
}

export default App;
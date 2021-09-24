import React, { Component } from 'react';
import './Dados.css';
 
class Dados extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Meu Perfil'
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    this.setState({
      nome: 'Giuliana Costacurta da Hora',
      dados: 'Nascida em 06/01/2001 na cidade de Santos, SP',
      formacao: 'Atualmente cursando Ciência da Computação na nstituição UNIP',
      exp: 'Conhecimento básico em JAVA, JS, Node, HTML e CSS. E também no pacote Office de Microsoft',
      projeto: 'Todos meus projetos atuais estão no GitHub em "Web-NodeJS-ReactJS"'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.dados}</h2>
          <h3>{this.state.formacao}</h3>
          <h4>{this.state.exp}</h4>
          <h5>{this.state.projeto}</h5>
        </center>
      </div>
    );
  }
}
 
export default Dados;

import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  state = {  }
  render() { 
    return (  
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;

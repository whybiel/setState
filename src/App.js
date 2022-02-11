import React, {Component} from "react"

export default class State extends Component{

  state={
    nome:"Gabriel",
    idade:17,
    cor:"Azul"
  }

  mensagem = () => {
    if (this.state.cor === "Azul"){
      this.setState({
        cor:"Amarelo",
        nome:"Henrique"
      })
    }else if(this.state.cor === "Amarelo"){
      this.setState({
        cor:"Preto",
        nome:"Ferreira"
      })
    }else{
      this.setState({
        cor:"Azul",
        nome:"Moraes"
      })
    }
  }

  render(){
    return(
      <div>
        <h1>Minha cor favorita é {this.state.cor} e meu nome é {this.state.nome}</h1>
        <button onClick={this.mensagem}>Trocar</button>
      </div>
    )
  }
}

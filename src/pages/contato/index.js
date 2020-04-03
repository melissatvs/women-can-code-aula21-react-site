import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'

export default class Contato extends Component {
  state = {
    conteudo: {}
  }

  componentDidMount = () => {
    axios.get("http://localhost:3000/contato")
      .then(resposta => {
        this.setState({ conteudo: resposta.data })
      })
  }

  render() {
    
    const { titulo, subtitulo, informacao, contatos } = this.state.conteudo

    return (
      <>
        <Helmet>
          <title>Contato</title>
        </Helmet>
        <div className="page">
          <div className="conteudo">
            <div className="flex">
              <div className="resumo">
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
                <h2>{informacao}</h2>
                {contatos !== undefined && (
                  <ul>
                  {contatos.map(item => (
                    <li key={item.id}>{item.tipo}: {item.contato}</li>
                  ))}
                    <li>Github</li>
                    <li>Linkedin</li>
                  </ul>
                )}
                
              </div>
              <img src="http://trydo.rainbowit.net/assets/images/about/about-6.jpg" alt="Perfil" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

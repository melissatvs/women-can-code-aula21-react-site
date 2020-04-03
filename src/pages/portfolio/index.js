import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import axios from 'axios'

export default class Portfolio extends Component {

  state = {
    conteudo: {}
  }

  componentDidMount = () => {
    axios.get("http://localhost:3000/portfolio")
      .then(resposta => {
        this.setState({ conteudo: resposta.data })
      })
  }

  render() {
    const { conteudo } = this.state

    return (
      <>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        <div className="page">
          <div className="conteudo">
            <h1>{conteudo.titulo}</h1>
            <div className="flex">
              <div className="portfolio-list">
              {conteudo.imagens !== undefined && 
                (<>
                    {conteudo.imagens.map(img => (
                        <img key={img.id} src={img.foto} alt={img.id} />
                    ))}
                </>
              )}
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}

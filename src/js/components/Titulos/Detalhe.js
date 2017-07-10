import React from "react";

import numeral from "numeral";

export default class Detalhe extends React.Component {
    constructor(props) {
        super(props);

        const url = this.props.location.pathname;

        var quebraUrl = url.split("/");
        this.idFilme = quebraUrl[2];

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://api.themoviedb.org/3/movie/'+this.idFilme+'?api_key=<key>&language=pt-BR')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function() {
                // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        if (this.state.isLoading) {
            return (
               <div class="container">
                    <h1> <center> Carregando </center> </h1>
                </div>
            );
        }

        const filme = this.state.dataSource;

        console.log(filme);

        var gasto = numeral(filme.budget).format('$0,0.00');
        var receita = numeral(filme.revenue).format('$0,0.00');

        return (
            <div class="container">
                <div class="notification">
                <div class="columns">
                    <div class="column is-one-third">
                        <figure class="image is-480x480">
                            <img src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                        </figure>
                    </div>
                    <div class="column">
                        <h1 class="title">{filme.title} <small>({filme.release_date})</small></h1>
                        <h2 class="subtitle">{filme.original_title}</h2>

                        <h3>Sinopse</h3>
                        <p>
                            {filme.overview}
                        </p>
                        <br />
                        <br />
                        <nav class="level is-mobile">
                          <div class="level-item has-text-centered">
                            <div>
                              <p class="heading">Avaliação</p>
                              <p class="title">{filme.vote_average}</p>
                            </div>
                          </div>
                          <div class="level-item has-text-centered">
                            <div>
                              <p class="heading">Votos</p>
                              <p class="title">{filme.vote_count}</p>
                            </div>
                          </div>
                          <div class="level-item has-text-centered">
                            <div>
                              <p class="heading">Orçamento</p>
                              <p class="title">{gasto}</p>
                            </div>
                          </div>
                          <div class="level-item has-text-centered">
                            <div>
                              <p class="heading">Receita</p>
                              <p class="title">{receita}</p>
                            </div>
                          </div>
                        </nav>
                        <br />
                        <div class="columns">

                            <div class="column">
                                <h3>Página Oficial</h3>
                                <p>
                                    {filme.homepage}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
        );
    }
}

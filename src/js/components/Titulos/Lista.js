import React from "react";
import fetch from "node-fetch";
import {Route, Link} from "react-router-dom";

import Detalhe from './Detalhe';

export default class Titulos extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=<sua_key>&language=pt-BR')
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
                <div>
                    <h2> Carregando </h2>
                </div>
            );
        }

        const fimesLista = this.state.dataSource.results.map((titulo, index) => {
            return (
                 <div class="box">
                    <article key={index.toString()} class="media">

                        <figure class="media-left">
                            <p class="image is-128x128">
                                <img src={'https://image.tmdb.org/t/p/w500/' + titulo.poster_path} />
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                            <p>
                                <strong class="titulo"><Link to={"/detalhes/" + titulo.id}> {titulo.title} </Link></strong>
                                <small class="categoria">{titulo.original_title}</small>
                                <small class="ano-tempo">{titulo.release_date} | 2h50m</small>
                                {titulo.overview}
                                <br />
                                <small class="rate">Avaliação: {titulo.vote_average}</small>
                            </p>
                            </div>
                        </div>

                    </article>
                </div>
            )
        });

        return (
            <div class="container">
                <div class="notification">
                    {fimesLista}
                </div>
            </div>
        );
    }
}

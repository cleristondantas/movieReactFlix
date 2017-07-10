import React from "react";
import fetch from "node-fetch";
import {Route, Link} from "react-router-dom";

import Detalhe from './Detalhe';

export default class Titulos extends React.Component {

    constructor(props) {
        super(props);

        const url = this.props.location.pathname;

        var quebraUrl = url.split("/");
        this.page = (quebraUrl[2] == '' ? 1 : quebraUrl[2]);

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=<key>&language=pt-BR&page=' + this.page)
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

    componentDidUpdate(prevProps, prevState) {
        const url = prevProps.history.location.pathname;

        var quebraUrl = url.split("/");
        this.newpage = (quebraUrl[2] == '' ? 1 : quebraUrl[2]);

        if (this.page != this.newpage) {
            fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=<key>&language=pt-BR&page=' + this.newpage)
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

            this.page = this.newpage;
        }
    }

    render() {

        if (this.state.isLoading) {
            return (
                <div class="container">
                    <h1> <center> Carregando </center> </h1>
                </div>
            );
        }

        var paginaAtual = this.state.dataSource.page;

        var totalDePaginas = this.state.dataSource.total_pages;

        var paginaAnterior = (paginaAtual>1 ? paginaAtual-- : '');
        var proximaPagina = (paginaAtual == totalDePaginas ? '' : paginaAtual++);

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
                                <strong class="titulo"><Link to={"/detalhes/" + titulo.id}  key={titulo.id}> {titulo.title} </Link></strong>
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

        var rows = [], i = 0, len = totalDePaginas;
        while (++i <= len) rows.push(i);

        const paginacao = rows.map((i) => {
            return (
                <li><Link to={"/lista/" + i} key={i} class="pagination-link">{i}</Link></li>
            )
        });


        return (
            <div class="container">
                <div class="notification">
                    {fimesLista}
                    <nav class="pagination">
                        <Link to={"/lista/" + paginaAnterior} class="pagination-previous" >Anterior</Link>
                        <Link to={"/lista/" + proximaPagina} class="pagination-next">Próxima</Link>
                        <ul class="pagination-list">
                            {paginacao}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

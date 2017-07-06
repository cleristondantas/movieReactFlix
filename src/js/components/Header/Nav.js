import React from "react";
import { IndexLink, Link } from "react-router-dom";

export default class Nav extends React.Component {

  render() {
    return (
        <div class="container">
        <nav class="navbar">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://github.com/cleristondantas/movieReactFlix">
                    <img src="img/logo.png" alt="Movie React Flix" width="112" height="28"/>
                </a>

                <div class="navbar-burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </div>

            <div id="navMenuExample" class="navbar-menu">
                <div class="navbar-start">
                    <Link to='/' class="navbar-item">Home</Link>
                    <Link to='/lista' class="navbar-item">Lista de Filmes</Link>
                </div>
            </div>
        </nav>
      </div>
    );
  }
}

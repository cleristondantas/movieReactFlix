
// Libs
import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, IndexRoute } from "react-router";

import { BrowserRouter } from 'react-router-dom';


import Layout from "./pages/Layout";
import Inicial from "./pages/Inicial";
import Configura from "./pages/Configura";

const app = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>
        <Route path="/"  component={Layout}>
        </Route>
    </BrowserRouter>,
app);

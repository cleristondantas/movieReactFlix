
// Libs
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, HashRouter, IndexRoute, Link, hashHistory, browserHistory} from 'react-router-dom';

import Main from "./pages/Main";

const app = document.getElementById('app');

ReactDom.render(
   <HashRouter>
        <Main />
   </HashRouter>,
    app
);

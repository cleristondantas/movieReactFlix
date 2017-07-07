import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
              <div class="container">
                <div class="content has-text-centered">
                  <p>
                    <strong>Movie React Flix</strong> by <a href="http://jgthms.com">Cleriston Dantas</a>.
                  </p>
                  <p>
                    <a class="icon" href="https://github.com/cleristondantas">
                      <i class="fa fa-github"></i>
                    </a>
                  </p>
                </div>
              </div>
            </footer>
        );
    }
}

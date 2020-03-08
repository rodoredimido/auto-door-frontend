import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Configs.css'

class Configs extends Component {
  render() {
    return (
      <div className="container">
        {/* <div className="a">s</div>
        <div className="b">s</div>
        <div className="c">s</div>
        <div className="d">s</div> */}
        {/* <h1>React Medellín: React Router</h1> */}
        {/* <div class="container principal"> */}
          <form id="msform">
            <ul id="progressbar">
              <li class="active">Login no systema</li>
              <li class="active">Configuração da conexão</li>
              <li>Finalização da configuração</li>
            </ul>
            <fieldset>
              <h2 class="fs-title">Social Profiles</h2>
              <h3 class="fs-subtitle">Your presence on the social network</h3>
              <input type="text" name="twitter" placeholder="Twitter" />
              <input type="text" name="facebook" placeholder="Facebook" />
              <input type="text" name="gplus" placeholder="Google Plus" />
              <input type="button" name="previous" class="previous action-button" value="Previous" />
              <input type="button" name="next" class="next action-button" value="Next" />
            </fieldset>
          </form> 
        {/* </div> */}
      </div>
    );
  }
}

export default withRouter(Configs);
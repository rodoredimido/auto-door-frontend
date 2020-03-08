import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './home.css'

class Home extends Component {
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
              <li>Configuração da conexão</li>
              <li>Finalização da configuração</li>
            </ul>
            <fieldset>
              <h2 class="fs-title">Fazer login</h2>
              <h3 class="fs-subtitle">Primeriro Passo</h3>
              <input type="text" name="email" placeholder="Email" />
              <input type="password" name="pass" placeholder="Password" />
              <input type="password" name="cpass" placeholder="Confirm Password" />
              <input type="button" name="next" class="next action-button" value="Seguinte" />
            </fieldset>
            <fieldset>
              <h2 class="fs-title">Social Profiles</h2>
              <h3 class="fs-subtitle">Your presence on the social network</h3>
              <input type="text" name="twitter" placeholder="Twitter" />
              <input type="text" name="facebook" placeholder="Facebook" />
              <input type="text" name="gplus" placeholder="Google Plus" />
              <input type="button" name="previous" class="previous action-button" value="Previous" />
              <input type="button" name="next" class="next action-button" value="Next" />
            </fieldset>
            <fieldset>
              <h2 class="fs-title">Personal Details</h2>
              <h3 class="fs-subtitle">We will never sell it</h3>
              <input type="text" name="fname" placeholder="First Name" />
              <input type="text" name="lname" placeholder="Last Name" />
              <input type="text" name="phone" placeholder="Phone" />
              <textarea name="address" placeholder="Address"></textarea>
              <input type="button" name="previous" class="previous action-button" value="Previous" />
              <input type="submit" name="submit" class="submit action-button" value="Submit" />
            </fieldset>
          </form> 
        {/* </div> */}
      </div>
    );
  }
}

export default withRouter(Home);
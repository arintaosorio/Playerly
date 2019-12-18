import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Registro from './components/registro';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Usuarios from './components/Usuarios';

class App extends Component {
  render(){
    return(
        <HashRouter>

          <Registro></Registro>
        
          <div className="header">
              <NavLink to="/"></NavLink>
              <button type="submit" onClick={Registro.onClickSubmit}><NavLink to="/Usuarios">Registrarse</NavLink></button>
          </div>
          <div className="content">
              <Route exact path="/" component={Registro}/>
              <Route path="/Usuarios" component={Usuarios}/>
          </div>
        </HashRouter>
    )
  }
}

export default App;

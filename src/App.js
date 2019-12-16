import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Registro from './components/registro';

class App extends Component {
  render(){
    return(
      <div>
        <Registro></Registro>
      </div>
    )
  }
}

export default App;

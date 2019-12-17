import React, { Component } from 'react';
import axios from 'axios';

class Registro extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombre:'',
            edad:0,
            ciudad: 'CDMX',
            sexo: 'M',
            genero: 'ROCK'
        }
    }

    onChangeInput = (e) => {
        const key = e.target.id;
        const val = e.target.value;
        this.setState({
            [key]:val
        })
    }

    onClickSubmit = (e) => {
        const URL = 'https://playerly.herokuapp.com/usuario';
        console.log(this.state);    
        e.preventDefault();         //evitar que se renderice cuando se oprime el boton
        axios.post(URL, this.state)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        //console.log(this.state);
        return (
            <div className="container-fluid p-0 ">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid h-100" src="https://i.ibb.co/ss84wSh/playlist.png" alt="img">
                        </img>
                    </div>
                    <div className="col-md-6 d-flex align-items-center p-5">
                        <form className="w-100" onSubmit={this.onClickSubmit}>
                            <div className="form-group">
                            <label>Nombre</label>
                            <input id="nombre" className="form-control" onChange={this.onChangeInput}></input>
                            <label>Edad</label>
                            <input id="edad" className="form-control" onChange={this.onChangeInput}></input>
                            <label>Ciudad</label>
                            <select id="ciudad" onChange={this.onChangeInput} className="form-control">
                                <option value="CDMX">Ciudad de México</option>
                                <option value="EDOMEX">Estado de México</option>
                            </select>
                            <label>Sexo</label>
                            <select id="sexo" onChange={this.onChangeInput} className="form-control">
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>
                            <label>Género musical favorito</label>
                            <select id="genero" onChange={this.onChangeInput} className="form-control">
                                <option value="ROCK">Rock</option>
                                <option value="POP">Pop</option>
                                <option value="METAL">Metal</option>
                                <option value="REGGAE">Reggae</option>
                            </select>
                            <button type="submit" className="btn btn-dark mt-5">Registrarse</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Registro;
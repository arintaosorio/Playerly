import React, { Component } from 'react';
import axios from 'axios';
∫
class Registro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            edad: 0,
            ciudad: 'CDMX',
            sexo: 'M',
            genero: []
        }
    }

    onChangeInput = (e) => {
        const key = e.target.id;
        const val = e.target.value;
        this.setState({
            [key]: val
        })
    }

    onClickSubmit = (e) => {
        const URL = 'https://playerly.herokuapp.com/usuario';
        //const URL = '/usuario';
        console.log(this.state);
        e.preventDefault();         //evitar que se renderice cuando se oprime el boton
        axios.post(URL, this.state)
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
    }

    handleCheckbox = (e) => {
        const newArray = [...this.state.genero];

        this.state.genero.indexOf(e.target.id) === -1
            ? newArray.push(e.target.id)
            : newArray.splice(newArray.indexOf(e.target.id), 1);

        this.setState({ genero: newArray });
    }

    render() {
        console.log(this.state);
        return (
            <div className="container-fluid p-0 ">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid h-100 w-100" src="https://i.ibb.co/7NYR4V8/playlist.png">
                        </img>
                    </div>
           
                <div className="col-md-6  p-5 justify-content-center">
                    <div className="row pt-5">
                        <div className="col-md-12 pt-5 text-center">
                            <img src="https://i.ibb.co/sbFYy4n/Asset-1.png"></img>
                            <img src="https://loremflickr.com/320/240/people"></img>
                            <img src="https://loremflickr.com/320/240/people"></img>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12">
                       
                            <div className="col-md-12 d-flex align-items-center p-5">
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
                                        <label className="pt-3 font-weight-bold">Género musical favorito</label><br></br>
                                        <input type="checkbox" id="ROCK" onClick={this.handleCheckbox} />Rock<br></br>
                                        <input type="checkbox" id="POP" onClick={this.handleCheckbox} />Pop<br></br>
                                        <input type="checkbox" id="REGGAE" onClick={this.handleCheckbox} />Reggae<br></br>
                                        <input type="checkbox" id="METAL" onClick={this.handleCheckbox} />Metal<br></br>
                                        <button type="submit" className="btn btn-dark mt-5">Registrarse</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Registro;
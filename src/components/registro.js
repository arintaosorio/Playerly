import React, { Component } from 'react';

class Registro extends Component {
    render() {
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
                            </div> </div>
                        <div className="row pt-5">
                        <div className="col-12">
                        <form className="w-100">
                            <div className="form-group">
                            <label>Nombre</label>
                            <input id="nombre" className="form-control"></input>
                            <label>Edad</label>
                            <input id="edad" className="form-control"></input>
                            <label>Ciudad</label>
                            <select id="ciudad" className="form-control">
                                <option value="CDMX">Ciudad de México</option>
                                <option value="EDOMEX">Estado de México</option>
                            </select>
                            <label>Sexo</label>
                            <select id="sexo" className="form-control">
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>
                            <label>Género musical favorio</label>
                            <select id="genero" className="form-control">
                                <option value="">Rock</option>
                                <option value="">Pop</option>
                                <option value="">Metal</option>
                                <option value="">Reggae</option>
                            </select>
                            <button type="submit" className="btn btn-dark mt-5">Registrarse</button>
                            </div>
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Registro;
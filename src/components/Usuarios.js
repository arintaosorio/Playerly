import React, {Component} from 'react';
import Usuario from './usuario';
import axios from 'axios';

class Usuarios extends Component {
    
    constructor(props){
        super(props);
        this.state={
            usuarios:[]
        }
    }

    componentDidMount(){
        const URL = 'https://playerly.herokuapp.com/usuarios/all';
        //const generoParam = 'ROCK'
        // eslint-disable-next-line
        //axios.get(`${URL}${generoParam}`)
        axios.get(URL)
            .then((result) => {
                //console.log(result.data);
                const data = result.data;
                const arrayUsuarios = data.map(usuario => <Usuario name={usuario.nombre} 
                                                            city={usuario.ciudad} 
                                                            edad={usuario.edad}
                                                            generos={[usuario.genero]}
                                                            />);
                //const arrayGenres = data.generos.map(genero => genero);
                //console.log(arrayGenres);
                this.setState({
                    usuarios: arrayUsuarios
                });
            }).catch((err) => {
                console.log(err);
            });
    }
    
    render(){
        console.log("en comp usuarios");
        return(
            <section className="row">
                {this.state.usuarios}
            </section>
        );
    }
}

export default Usuarios;
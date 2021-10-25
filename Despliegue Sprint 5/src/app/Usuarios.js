import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = { //Esto hace que cuando se inicie la app todos los campos esten en blanco
            ID_Usuario:'',
            Contrasena:'',
            Rol:'',
            Estado:'',
            PrimerApellido:'',
            SegundoApellido:'',
            PrimerNombre:'',
            SegundoNombre:'',
            Identificacion:'',
            Telefono:'',
            correo_electronico:'',
            _id:'',
            usuarios:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.addUsuario = this.addUsuario.bind(this);
    }

    addUsuario(e) {
        e.preventDefault();
        if (this.state._id) {
            fetch(`/api/tasks/Usuarios/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    ID_Usuario: this.state.ID_Usuario,
                    Contrasena: this.state.Contrasena,
                    Rol: this.state.Rol,
                    Estado: this.state.Estado,
                    PrimerApellido: this.state.PrimerApellido,
                    SegundoApellido: this.state.SegundoApellido,
                    PrimerNombre: this.state.PrimerNombre,
                    SegundoNombre: this.state.SegundoNombre,
                    Identificacion: this.state.Identificacion,
                    Telefono: this.state.Telefono,
                    correo_electronico: this.state.correo_electronico,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    window.M.toast({ html: 'Usuario actualizado' });
                    this.setState({_id:'',ID_Usuario:'', Contrasena:'', Rol:'', Estado:'', PrimerApellido:'', SegundoApellido:'',
                    PrimerNombre:'', SegundoNombre:'', Identificacion:'', Telefono:'', correo_electronico:'',});
                    this.fetchUsuarios();
                });
        } else {
            fetch('/api/tasks/Usuarios', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    window.M.toast({ html: 'Usuario creado' });
                    this.setState({_id:'',ID_Usuario:'', Contrasena:'', Rol:'', Estado:'', PrimerApellido:'', SegundoApellido:'',
                    PrimerNombre:'', SegundoNombre:'', Identificacion:'', Telefono:'', correo_electronico:'',});
                    this.fetchUsuarios();
                })
                .catch(err => console.error(err));
        }
    }

    componentDidMount(){
        this.fetchUsuarios();
    }

    fetchUsuarios(){
        fetch('api/tasks/Usuarios')
            .then(res=>res.json())
            .then(data=>{
                this.setState({usuarios: data });
                console.log(this.state.usuarios)
            });
    }

    editarUsuario(id) {
        fetch(`/api/tasks/Usuarios/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    ID_Usuario: data.ID_Usuario,
                    Contrasena: data.Contrasena,
                    Rol: data.Rol,
                    Estado: data.Estado,
                    PrimerApellido: data.PrimerApellido,
                    SegundoApellido: data.SegundoApellido,
                    PrimerNombre: data.PrimerNombre,
                    SegundoNombre: data.SegundoNombre,
                    Identificacion: data.Identificacion,
                    Telefono: data.Telefono,
                    correo_electronico: data.correo_electronico,
                    _id: data._id
                })
            });
    }

    nuevoUsuario() {
        fetch('/api/tasks/Usuarios')
                this.setState({
                    ID_Usuario: '',
                    Contrasena: '',
                    Rol: '',
                    Estado: '',
                    PrimerApellido: '',
                    SegundoApellido: '',
                    PrimerNombre: '',
                    SegundoNombre: '',
                    Identificacion: '',
                    Telefono: '',
                    correo_electronico: '',
                })
    }

    handleChange(e) {
        //console.log(e.target.name);
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div className="Header" title="Los borbotones">
                    <div className="Header_Logo" title="Los borbotones">
                        <a href="http://www.losborbotones.com"><img class="Logo" src="Imagenes/Logo.png" alt="Los borbotones"></img></a>
                    </div>
                    <div className="NameSite" >
                        &nbsp;
                    </div>
                </div>
                <div className="clear"></div>

                <div className="Menu">
                    <a href="#" className="nav-button">Menu</a>
                    <nav className="nav">
                        <ul>
                            <li className="nav-submenu"><a href="#">Administrar</a>
                                <ul>
                                    <li><a href="/Usuarios">Usuarios</a></li>
                                    <li><a href="/RegistrarVentas">Ventas</a></li>
                                    <li><a href="/RegistrarProductos">Productos</a></li>
                                </ul>
                            </li>
                            <li className="nav-submenu"><a href="#">Consultas</a>
                                <ul>
                                    <li><a href="/ConsultarVentas">Ventas</a></li>
                                    <li><a href="/ConsultarProductos">Productos</a></li>
                                </ul>
                            </li>
                            <li><a href="/">Cerrar sesión</a></li>
                        </ul>
                    </nav>

                    <a href="#" className="nav-close">Close Menu</a>
                </div>

                <div class="content">
                <div class="container">
                    <form id="form1" onSubmit={this.addUsuario}>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                <div class="centrar">
                                    <span class="headline-l-govco">Administración de usuarios</span>
                                </div>
                            </div>
                        </div>
                        <div class="clear10"></div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                <div class="left">
                                    <span class="headline-m-govco">Datos de acceso</span>
                                </div>
                            </div>
                        </div>
                        <div class="clear10"></div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                <label for="ID_Usuario" id="Lbl_ID_Usuario">ID Usuario:</label>
                                <input class="form-control" value={this.state.ID_Usuario} type="text" id="Text_ID_Usuario" onChange={this.handleChange} name="ID_Usuario" required minlength="4" maxlength="30" size="30" autocomplete="off"/>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                <label for="Contrasena" id="Lbl_Contrasena">Contraseña:</label>
                                <input class="form-control" value={this.state.Contrasena} type="password" id="Text_Contrasena" onChange={this.handleChange} name="Contrasena" required minlength="4" maxlength="30" size="30" autocomplete="off"/>
                            </div>
                        </div>
                        <div class="clear10"></div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                <label for="Rol" id="Lbl_Rol">Rol Usuario:</label>
                                <select class="form-control" name="Rol" size="1" value={this.state.Rol} id="DD_Rol" onChange={this.handleChange}> 
                                    <option value="" selected>Seleccione...</option>
                                    <option value="Administrador">Administrador</option>
                                    <option value="Vendedor">Vendedor</option> 
                                </select>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                <label for="Estado" id="Lbl_Estado_Usuario">Estado Usuario:</label>
                                <select class="form-control" name="Estado" value={this.state.Estado} id="DD_Estado" onChange={this.handleChange}> 
                                    <option value="" selected>Seleccione...</option>
                                    <option value="Autorizado">Autorizado</option> 
                                    <option value="No Autorizado">No autorizado</option>
                                    <option value="Pendiente">Pendiente</option>
                                </select>
                            </div>
                        </div>
                        <div class="clear10"></div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                <div class="left">
                                    <span class="headline-m-govco">Datos básicos</span>
                                </div>
                            </div>
                        </div>
                        <div class="clear10"></div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                Nombre de usuario
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3" >
                                <input class="form-control" type="text" value={this.state.PrimerApellido} id="Text_PrimerApellido" name="PrimerApellido" onChange={this.handleChange} placeholder="Primer apellido" required minlength="4" maxlength="30" size="30" autocomplete="off" />
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3" >
                                <input class="form-control" type="text" value={this.state.SegundoApellido} id="Txt_SegundoApellido" name="SegundoApellido" onChange={this.handleChange} placeholder="Segundo apellido" required minlength="4" maxlength="30" size="30" autocomplete="off"/>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3" >
                                <input class="form-control" type="text" value={this.state.PrimerNombre} id="Txt_PrimerNombre" name="PrimerNombre" onChange={this.handleChange} placeholder="Primer nombre" required minlength="4" maxlength="30" size="30" autocomplete="off"/>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3" >
                                <input class="form-control" type="text" value={this.state.SegundoNombre} id="Txt_SegundoNombre" name="SegundoNombre" onChange={this.handleChange} placeholder="Segundo nombre" required minlength="4" maxlength="30" size="30" autocomplete="off"/>
                            </div>
                        </div>
                        <div class="clear10"></div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" >
                                <label for="Identificacion" id="Lbl_Identificacion">Número de identificación:</label>
                                <input class="form-control" type="number" value={this.state.Identificacion} id="Txt_Identificacion" name="Identificacion" onChange={this.handleChange} required minlength="4" maxlength="30" size="30" autocomplete="off" />
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" >
                                <label for="Telefono" id="Lbl_Telefono">Número de teléfono: </label>
                                <input class="form-control" type="tel" value={this.state.Telefono} id="Txt_Telefono" name="Telefono" onChange={this.handleChange} required minlength="4" maxlength="30" size="30" autocomplete="off" />
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" >
                                <label for="correo_electronico" id="txt_correo_electronico">Correo electrónico:</label>
                                <input class="form-control" type="email" value={this.state.correo_electronico} id="Txt_correo_electronico" onChange={this.handleChange} name="correo_electronico" placeholder="usuario@dominio" required minlength="4" maxlength="100" size="100" autocomplete="off"/>
                            </div>
                        </div>
                        <div class="clear10"></div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                <div class="centrar">
                                    <button class="botonPregunta" id="btn_nuevo" onClick={() => this.nuevoUsuario()}> 
                                    <i className="material-icons">Limpiar</i>
                                    </button>
                                    <button class="botonPregunta" type="submit" id="btn_guardar" > Guardar </button>
                                </div>
                            </div>
                        </div>
                        <div class="clear10"></div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                <div class="centrar">
                                    <table>
                                        <thead>
                                            <th>ID usuario</th>
                                            <th>Rol usuario</th>
                                            <th>Estado usuario</th>
                                            <th>Primer Apellido</th>
                                            <th>Segundo Apellido</th>
                                            <th>Primer Nombre</th>
                                            <th>Segundo Nombre</th>
                                            <th>No. identificación</th>
                                            <th>No. teléfono</th>
                                            <th>Email</th>
                                            <th></th>
                                        </thead>
                                        <tbody id="d_usuarios">
                                        { 
                                                this.state.usuarios.map(task=>{
                                                        return(
                                                            <tr key={task._id}>
                                                                <td>{task.ID_Usuario}</td>
                                                                <td>{task.Rol}</td>
                                                                <td>{task.Estado}</td>
                                                                <td>{task.PrimerApellido}</td>
                                                                <td>{task.SegundoApellido}</td>
                                                                <td>{task.PrimerNombre}</td>
                                                                <td>{task.SegundoNombre}</td>
                                                                <td>{task.Identificacion}</td>
                                                                <td>{task.Telefono}</td>
                                                                <td>{task.correo_electronico}</td>
                                                                <td>
                                                                    <button className="botonPregunta" id="edit_btn" onClick={() => this.editarUsuario(task._id)}>
                                                                        <i className="material-icons">Editar</i>
                                                                    </button>
                                                                </td>   
                                                            </tr> )
                                                    })
                                                }
                                        </tbody>
                                    </table> 
                                </div>
                            </div>
                        </div>
                        <div class="clear10"></div>
                    </form>
                </div>
            </div>
        </div>
        
        )
    }
}

export default App;
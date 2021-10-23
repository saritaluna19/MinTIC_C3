import React, { Component, useState } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = { //Esto hace que cuando se inicie la app todos los campos esten en blanco
            IDProducto:'',
            Descripcion:'',
            productos:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.buscarProducto = this.buscarProducto.bind(this);
    }

    fetchProductos(){
        fetch('api/tasks/ConsultarProductos')
            .then(res=>res.json())
            .then(data=>{
                this.setState({productos: data });
                console.log(this.state.productos)
            });
    }

    componentDidMount() {
        this.fetchProductos();
    }

    buscarProducto(IDProducto) {
        fetch(`/api/tasks/ConsultarProductos/${IDProducto}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                componentDidMount(this.setState({productos: data }));
            });
    }

    buscarProducto(Descripcion) {
        fetch(`/api/tasks/ConsultarProductos/${Descripcion}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                componentDidMount(this.setState({productos: data }));
            });
    }

    nuevoProducto() {
                this.setState({
                    IDProducto:'',
                    Descripcion:'',
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
                <div class="Header" title="Los borbotones">
                    <div class="Header_Logo" title="Los borbotones">
                        <a href="http://www.losborbotones.com"><img class="Logo" src="Imagenes/Logo.png" alt="Los borbotones"></img></a>
                    </div>
                    <div class="NameSite" >
                        &nbsp;
                    </div>
                </div>
                <div class="clear"></div>

                <div class="Menu">
                    <a href="#" class="nav-button">Menu</a>
                    <nav class="nav">
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

                    <a href="#" class="nav-close">Close Menu</a>
                </div>


                <div class="content">
                    <div class="container">
                        <form id="form1">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="centrar">
                                        <span class="headline-l-govco">Consulta de productos</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <label for="IDProducto">ID producto:</label><br />
                                    <input class="form-control" type="number" id="Txt_IDProducto" name="IDProducto" maxlength="30" size="30" autocomplete="off"/>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <label for="Descripcion">Descripción:</label><br />
						            <input class="form-control" type="text" id="Txt_Descripcion" name="Descripcion" maxlength="100" size="10" autocomplete="off"/>
                                </div>
                            </div>
                            <div class="clear10"></div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="centrar">
                                    <button class="botonPregunta" id="btn_nuevo" onClick={() => this.nuevoProducto()}> 
                                    <i className="material-icons">Limpiar campos</i>
                                    </button>						    
							        <button class="botonPregunta" id="btn_buscar" onClick={() => this.buscarProducto(document.getElementById("Txt_IDProducto").value)}> 
                                    <i className="material-icons">Buscar Producto</i>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div class="clear10"></div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                <table id="d_productos">
                                        <thead>
                                            <th>ID producto</th>
                                            <th>Cantidad</th>
                                            <th>Precio unitario</th>
                                            <th>Descripción</th>
                                            <th>Estado</th>
                                        </thead>
                                        <tbody>
                                        { 
                                                this.state.productos.map(task=>{
                                                        return(
                                                            <tr key={task._id}>
                                                                <td>{task.IDProducto}</td>
                                                                <td>{task.Descripcion}</td>
                                                                <td>{task.ValorUnitario}</td>
                                                                <td>{task.Cantidad}</td>
                                                                <td>{task.Estado}</td>   
                                                            </tr> )
                                                    })
                                                }
                                        </tbody>
                                    </table>
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
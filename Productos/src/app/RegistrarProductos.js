import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = { //Esto hace que cuando se inicie la app todos los campos esten en blanco
            IDProducto:'',
            Descripcion:'',
            ValorUnitario:'',
            Cantidad:'',
            Estado:'',
            _id:'',
            productos:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.addProducto = this.addProducto.bind(this);
    }

    addProducto(e) {
        e.preventDefault();
        if (this.state._id) {
            fetch(`/api/tasks/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    //IDProducto: this.state.IDProducto,
                    Descripcion: this.state.Descripcion,
                    ValorUnitario: this.state.ValorUnitario,
                    Cantidad: this.state.Cantidad,
                    Estado: this.state.Estado,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    window.M.toast({ html: 'Producto actualizado' });
                    this.setState({_id:'',IDProducto:'', Descripcion:'', ValorUnitario:'', Cantidad:'', Estado:'',});
                    this.fetchProductos();
                });
        } else {
            fetch('/api/tasks', {
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
                    window.M.toast({ html: 'Producto creado' });
                    this.setState({_id:'',IDProducto:'', Descripcion:'', ValorUnitario:'', Cantidad:'', Estado:'',});
                    this.fetchProductos();
                })
                .catch(err => console.error(err));
        }
    }

    componentDidMount(){
        this.fetchProductos();
    }

    fetchProductos(){
        fetch('api/tasks')
            .then(res=>res.json())
            .then(data=>{
                this.setState({productos: data });
                console.log(this.state.productos)
            });
    }

    deleteProducto(id) {
        if (confirm('El producto se va a eliminar')) {
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    window.M.toast({ html: 'Producto eliminado' });
                    this.fetchProductos();
                });
        }
    }

    editarProducto(id) {
        fetch(`/api/tasks/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    IDProducto: data.IDProducto,
                    Descripcion: data.Descripcion,
                    ValorUnitario: data.ValorUnitario,
                    Cantidad: data.Cantidad,
                    Estado: data.Estado,
                    _id: data._id
                })
            });
    }

    nuevoProducto() {
        fetch('/api/tasks')
                this.setState({
                    IDProducto:'',
                    Descripcion:'',
                    ValorUnitario:'',
                    Cantidad:'',
                    Estado:'',
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
                                    <li><a href="/RegistrarProductos">Usuarios</a></li>
                                    <li><a href="/RegistrarProductos">Vendedores</a></li>
                                    <li><a href="/RegistrarProductos">Ventas</a></li>
                                    <li><a href="/RegistrarProductos">Productos</a></li>
                                </ul>
                            </li>
                            <li className="nav-submenu"><a href="#">Consultas</a>
                                <ul>
                                    <li><a href="/ConsultarProductos">Ventas</a></li>
                                    <li><a href="/ConsultarProductos">Productos</a></li>
                                </ul>
                            </li>
                            <li><a href="/RegistrarProductos">Cerrar sesión</a></li>
                        </ul>
                    </nav>

                    <a href="#" className="nav-close">Close Menu</a>
                </div>

                <div class="content">
                <div class="container">
                <form id="form1" onSubmit={this.addProducto}>
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
						<div class="centrar">
							<span class="headline-l-govco">Registro de productos</span>
						</div>
					</div>
				</div>
				<div class="clear10"></div>
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
						<div class="left">
							<span class="headline-m-govco">Datos de productos</span>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
						<label for="IDProducto">ID producto:</label><br />
						<input class="form-control" value={this.state.IDProducto} type="number" id="Text_IDProductoR" onChange={this.handleChange} name="IDProducto" required minlength="4" maxlength="30" size="30" autocomplete="off"/>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
						<label for="Descripcion">Descripción:</label><br />
						<input class="form-control" value={this.state.Descripcion} type="text" id="Txt_Descripcion" onChange={this.handleChange} name="Descripcion" required minlength="4" maxlength="100" size="10" autocomplete="off"/>
					</div>
				</div>
				<div class="clear10"></div>
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
						<label for="ValorUnitario">Valor unitario:</label><br />
						<input class="form-control" value={this.state.ValorUnitario} type="number" id="Txt_ValorUnitario" onChange={this.handleChange} name="ValorUnitario" required minlength="10" maxlength="30" size="30" autocomplete="off"/>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
						<label for="Cantidad">Cantidad:</label><br />
						<input class="form-control" value={this.state.Cantidad} type="number" id="Txt_Cantidad" onChange={this.handleChange} name="Cantidad" required minlength="1" maxlength="10000" size="30" autocomplete="off"/>
					</div>
				</div>
				<div class="clear10"></div>
                <div class="row">
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
						<label for="Estado" id="Lbl_Estado">Estado producto:</label>
						<select class="form-control" value={this.state.Estado} name="Estado" size="1" id="DD_Estado" onChange={this.handleChange}> 
							<option value="" selected>Seleccione...</option>
							<option value="Disponible">Disponible</option>
							<option value="No disponible">No disponible</option> 
						</select>
					</div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                            <br></br>
                            <div class="centrar">
                            <button class="botonPregunta" id="btn_nuevo" onClick={() => this.nuevoProducto()}> 
                                    <i className="material-icons">Cancelar Registro</i>
                            </button>						    
							<button class="botonPregunta" type="submit" id="btn_guardar" > Registrar Producto </button>
                            </div>
                    </div>
                </div>
                        <div class="clear10"></div>
                        <div class="clear10"></div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                <div class="centrar">
                                    <table>
                                        <thead>
                                            <th>ID producto</th>
                                            <th>Cantidad</th>
                                            <th>Precio unitario</th>
                                            <th>Descripción</th>
                                            <th>Estado</th>
                                            <th></th>
                                        </thead>
                                        <tbody id="d_productos">
                                        { 
                                                this.state.productos.map(task=>{
                                                        return(
                                                            <tr key={task._id}>
                                                                <td>{task.IDProducto}</td>
                                                                <td>{task.Descripcion}</td>
                                                                <td>{task.ValorUnitario}</td>
                                                                <td>{task.Cantidad}</td>
                                                                <td>{task.Estado}</td>
                                                                <td>
                                                                    <button className="botonPregunta" id="edit_btn" onClick={() => this.editarProducto(task._id)}>
                                                                        <i className="material-icons">Editar</i>
                                                                    </button>
                                                                    <button className="botonPregunta" id="delete_btn" onClick={() => this.deleteProducto(task._id)}>
                                                                        <i className="material-icons">Eliminar</i>
                                                                    </button>
                                                                </td>   
                                                            </tr> )
                                                    })
                                                }
                                        </tbody>
                                    </table> 
                                </div>
                            </div>
                            <div class="clear10"></div>
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
import React, { Component, useState } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = { //Esto hace que cuando se inicie la app todos los campos esten en blanco
            IDVenta: '',
            FechaVenta: '',
            ID_Vendedor: '',
            ID_Cliente: '',
            PrimerApellido: '',
            SegundoApellido: '',
            PrimerNombre: '',
            SegundoNombre: '',
            ID_Producto: '',
            CantidadProducto: '',
            PrecioUnidad: '',
            valorTotal: '',
            _id: '',
            ventas: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.addVenta = this.addVenta.bind(this);
    }

    addVenta(e) {
        e.preventDefault();
        if (this.state._id) {
            fetch(`/api/tasks/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    IDVenta: this.state.IDVenta,
                    FechaVenta: this.state.FechaVenta,
                    ID_Vendedor: this.state.ID_Vendedor,
                    ID_Cliente: this.state.ID_Cliente,
                    PrimerApellido: this.state.PrimerApellido,
                    SegundoApellido: this.state.SegundoApellido,
                    PrimerNombre: this.state.PrimerNombre,
                    SegundoNombre: this.state.SegundoNombre,
                    ID_Producto: this.state.ID_Producto,
                    CantidadProducto: this.state.CantidadProducto,
                    PrecioUnidad: this.state.PrecioUnidad,
                    valorTotal: this.state.valorTotal
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    window.M.toast({ html: 'Venta actualizada' });
                    this.setState({
                        IDVenta: '', FechaVenta: '', ID_Vendedor: '', ID_Cliente: '', PrimerApellido: '', SegundoApellido: '',
                        PrimerNombre: '', SegundoNombre: '', ID_Producto: '', CantidadProducto: '', PrecioUnidad: '', valorTotal: '', _id: ''
                    });
                    this.fetchVentas();
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
                    window.M.toast({ html: 'Venta registrada' });
                    this.setState({
                        IDVenta: '', FechaVenta: '', ID_Vendedor: '', ID_Cliente: '', PrimerApellido: '', SegundoApellido: '',
                        PrimerNombre: '', SegundoNombre: '', ID_Producto: '', CantidadProducto: '', PrecioUnidad: '', valorTotal: ''
                    });
                    this.fetchVentas();
                })
                .catch(err => console.error(err));
        }
    }

    componentDidMount() {
        this.fetchVentas();
    }

    fetchVentas() {
        fetch('api/tasks')
            .then(res => res.json())
            .then(data => {
                this.setState({ ventas: data });
                console.log(this.state.ventas)
            });
    }

    deleteVenta(id) {
        if (confirm('La venta se va a eliminar')) {
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
                    window.M.toast({ html: 'Venta eliminada' });
                    this.fetchVentas();
                });
        }
    }

    editarVenta(id) {
        fetch(`/api/tasks/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    IDVenta: data.IDVenta,
                    FechaVenta: data.FechaVenta,
                    ID_Vendedor: data.ID_Vendedor,
                    ID_Cliente: data.ID_Cliente,
                    PrimerApellido: data.PrimerApellido,
                    SegundoApellido: data.SegundoApellido,
                    PrimerNombre: data.PrimerNombre,
                    SegundoNombre: data.SegundoNombre,
                    ID_Producto: data.ID_Producto,
                    CantidadProducto: data.CantidadProducto,
                    PrecioUnidad: data.PrecioUnidad,
                    valorTotal: data.valorTotal,
                    _id: data._id
                })
            });
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
                <div class="Header" title="Nombre de la empresa">
                    <div class="Header_Logo" title="Los borbotones">
                        <a href="http://www.empresa.gov.co"><img class="Logo" src="Imagenes/Logo.png" alt="Los borbotones"></img></a>
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
                            <li><a href="#">Login</a></li>
                            <li class="nav-submenu"><a href="#">Administrar</a>
                                <ul>
                                    <li><a href="Vendedores.html">Vendedores</a></li>
                                    <li><a href="RegistrarVenta.html">Ventas</a></li>
                                    <li><a href="AdminUsuarios.html">Usuarios</a></li>
                                </ul>
                            </li>
                            <li class="nav-submenu"><a href="#">Consultas</a>
                                <ul>
                                    <li><a href="#">Ventas</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    <a href="#" class="nav-close">Close Menu</a>
                </div>

                <div className="content">
                    <div className="container">
                        <form id="form1" onSubmit={this.addVenta}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div className="centrar">
                                        <span className="headline-l-govco">Registro de ventas</span>
                                    </div>
                                </div>
                            </div>
                            <div className="clear10"></div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div className="left">
                                        <span className="headline-m-govco">Datos de ventas</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <label htmlFor="IDVenta">ID venta:</label><br />
                                    <input className="form-control" value={this.state.IDVenta} type="number" id="Text_IDVenta" onChange={this.handleChange} name="IDVenta" required minLength="4" maxLength="30" size="30" autoComplete="off" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <label htmlFor="FechaVenta">Fecha de venta:</label><br />
                                    <input className="form-control" value={this.state.FechaVenta} type="date" id="Txt_FechaIngreso" onChange={this.handleChange} name="FechaVenta" required minLength="10" maxLength="10" size="10" placeholder="AAAA-MM-DD" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" autoComplete="off" />
                                </div>
                            </div>
                            <div className="clear10"></div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <label htmlFor="ID_Vendedor">ID vendedor:</label><br />
                                    <input className="form-control" type="number" value={this.state.ID_Vendedor} id="Txt_IDVendedor" onChange={this.handleChange} name="ID_Vendedor" required minLength="10" maxLength="30" size="30" autoComplete="off" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <label htmlFor="ID_Cliente">ID cliente:</label><br />
                                    <input className="form-control" type="number" value={this.state.ID_Cliente} id="Txt_IDCliente" onChange={this.handleChange} name="ID_Cliente" required minLength="4" maxLength="30" size="30" autoComplete="off" />
                                </div>
                            </div>
                            <div className="clear10"></div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    Nombre cliente
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" >
                                    <input className="form-control" type="text" value={this.state.PrimerApellido} id="Text_PrimerApellido" onChange={this.handleChange} name="PrimerApellido" placeholder="Primer apellido" required minLength="4" maxLength="30" size="30" autoComplete="off" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" >
                                    <input className="form-control" type="text" value={this.state.SegundoApellido} id="Txt_SegundoApellido" onChange={this.handleChange} name="SegundoApellido" placeholder="Segundo apellido" required minLength="4" maxLength="30" size="30" autoComplete="off" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" >
                                    <input className="form-control" type="text" value={this.state.PrimerNombre} id="Txt_PrimerNombre" onChange={this.handleChange} name="PrimerNombre" placeholder="Primer nombre" required minLength="4" maxLength="30" size="30" autoComplete="off" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" >
                                    <input className="form-control" type="text" value={this.state.SegundoNombre} id="Txt_SegundoNombre" onChange={this.handleChange} name="SegundoNombre" placeholder="Segundo nombre" required minLength="4" maxLength="30" size="30" autoComplete="off" />
                                </div>
                            </div>
                            <div className="clear10"></div>
                            <br />
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div className="left">
                                        <span className="headline-m-govco">Datos de producto</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" >
                                    <label htmlFor="ID_Producto" id="Lbl_IDProducto">ID producto:</label><br />
                                    <input className="form-control" type="number" value={this.state.ID_Producto} id="Txt_IDProducto" onChange={this.handleChange} name="ID_Producto" required minLength="10" maxLength="30" size="30" autoComplete="off" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" >
                                    <label htmlFor="CantidadProducto" >Cantidad producto:</label><br />
                                    <input className="form-control" type="number" value={this.state.CantidadProducto} id="Txt_CantidadProducto" onChange={this.handleChange} name="CantidadProducto" required minLength="10" maxLength="30" size="30" autoComplete="off" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" >
                                    <label htmlFor="PrecioUnidad">Precio unitario:</label><br />
                                    <input className="form-control" type="number" value={this.state.PrecioUnidad} id="Txt_PrecioUnidad" onChange={this.handleChange} name="PrecioUnidad" required minLength="10" maxLength="30" size="30" autoComplete="off" />
                                </div>
                            </div>
                            <div className="clear10"></div>
                            <br />
                            <div className="clear10"></div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID producto</th>
                                                <th>Cantidad</th>
                                                <th>Precio unitario</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody id="datos_producto">
                                            {
                                                this.state.ventas.map(task => {
                                                    return (
                                                        <tr key={task._id}>
                                                            <td>{task.ID_Producto}</td>
                                                            <td>{task.CantidadProducto}</td>
                                                            <td>{task.PrecioUnidad}</td>
                                                            <td>
                                                                <button className="botonPregunta" id="edit_btn" onClick={() => this.editarVenta(task._id)}>
                                                                    <i className="material-icons">edit</i>
                                                                </button>
                                                                <button className="botonPregunta" id="delete_btn" style={{ margin: '4px' }} onClick={() => this.deleteVenta(task._id)}>
                                                                    <i className="material-icons">delete</i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="clear10"></div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    <label htmlFor="valor_total">Valor total: </label>
                                    <input className="form-control" type="number" value={this.state.valorTotal} id="Txt_ValorTotal" onChange={this.handleChange} name="valorTotal" required minLength="10" maxLength="30" size="30" autoComplete="off" />
                                </div>
                            </div>
                            <div className="clear10"></div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <div className="centrar">
                                        <button className="botonPregunta" id="Btn_Cancelar" type="submit">Cancelar venta</button>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <div className="centrar">
                                        <button className="botonPregunta" id="Btn_Registrar" type="submit">Registrar ventas</button>
                                    </div>
                                </div>
                            </div>
                            <div className="clear10"></div>
                        </form>
                    </div>
                </div>

            </div>

        )
    }
}

export default App;
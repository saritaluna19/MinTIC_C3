import React, { Component, useState } from 'react';

class App extends Component {

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
                            <li class="nav-submenu"><a href="#">Administrar</a>
                                <ul>
                                    <li><a href="Usuarios.html">Usuarios</a></li>
                                    <li><a href="Vendedores.html">Vendedores</a></li>
                                    <li><a href="Ventas.html">Ventas</a></li>
                                </ul>
                            </li>
                            <li class="nav-submenu"><a href="#">Consultas</a>
                                <ul>
                                    <li><a href="ConsultaVentas.html">Ventas</a></li>
                                </ul>
                            </li>
                            <li><a href="Login.html">Cerrar sesión</a></li>
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
                                        <span class="headline-l-govco">Consulta de ventas</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <label for="FechaInicial">Fecha inicial:</label><br />
                                    <input class="form-control" type="date" id="Text_FechaInicial" name="FechaInicial" required minlength="10" maxlength="10" size="10" placeholder="AAAA-MM-DD" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" autocomplete="off" />
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <label for="FechaFinal">Fecha final:</label><br />
                                    <input class="form-control" type="date" id="Txt_FechaFinal" name="FechaFinal" required minlength="10" maxlength="10" size="10" placeholder="AAAA-MM-DD" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" autocomplete="off"/>
                                </div>
                            </div>
                            <div class="clear10"></div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <label for="IDVenta">ID venta:</label><br />
                                    <input class="form-control" type="number" id="Txt_IDVenta" name="IDVenta" required minlength="10" maxlength="30" size="30" autocomplete="off"/>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                                    <label for="Producto">Producto:</label><br />
                                    <select class="form-control" name="Producto">
                                        <option value="value1" selected>Seleccione...</option>
                                        <option value="value2">Producto 1</option>
                                        <option value="value3">Producto 2</option>
                                        <option value="value3">Producto 3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="clear10"></div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="centrar">
                                        <input class="botonPregunta" id="Btn_ConsultarVenta" type="button" value="Consultar venta" onclick="alertar('Consulta realizada correctamente');"/>
                                    </div>
                                </div>
                            </div>
                            <div class="clear10"></div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    <table>
                                        <thead>
                                            <th>Producto</th>
                                            <th>Descripción</th>
                                            <th>Valor total</th>
                                            <th>Fecha pedido</th>
                                            <th>Estado</th>
                                        </thead>
                                        <tbody id="datos_producto">
                                            <tr>
                                                <td>Producto 1</td>
                                                <td>Descripción</td>
                                                <td>5000</td>
                                                <td>2021-10-01</td>
                                                <td>
                                                    <select class="form-control" name="Producto">
                                                        <option value="value1" selected>Seleccione...</option>
                                                        <option value="value2">Abierta</option>
                                                        <option value="value3">Cerrada</option>
                                                        <option value="value3">Cancelada</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Producto 2</td>
                                                <td>Descripción</td>
                                                <td>8000</td>
                                                <td>2021-10-02</td>
                                                <td>
                                                    <select class="form-control" name="Producto">
                                                        <option value="value1">Seleccione...</option>
                                                        <option value="value2" selected>Abierta</option>
                                                        <option value="value3">Cerrada</option>
                                                        <option value="value3">Cancelada</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Producto 3</td>
                                                <td>Descripción</td>
                                                <td>3000</td>
                                                <td>2021-09-30</td>
                                                <td>
                                                    <select class="form-control" name="Producto">
                                                        <option value="value1">Seleccione...</option>
                                                        <option value="value2">Abierta</option>
                                                        <option value="value3" selected>Cerrada</option>
                                                        <option value="value3">Cancelada</option>
                                                    </select>
                                                </td>
                                            </tr>
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
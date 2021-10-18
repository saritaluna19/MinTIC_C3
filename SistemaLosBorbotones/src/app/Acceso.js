import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            <div>
                	<div class="Header" title="Los borbotones">
			<div class="centrar">
				<a href="http://www.losborbotones.com"><img class="Logo" src="Imagenes/Logo.png" alt="Los borbotones"/></a>
			</div>
				</div>
				<div class="clear10"></div>
				<div class="content">
					<div class="containerLogin">
						<form id="form1">
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
									<div class="centrar">
										<span class="headline-l-govco">Iniciar sesión</span>
									</div>
								</div>
							</div>
							<div class="clear10"></div>
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
									<div class="centrar">
										<input class="form-control" type="text" id="Txt_Usuario" name="Usuario" placeholder="Usuario*" maxlength="30" size="30" autocomplete="off" />
									</div>
								</div>
							</div>
							<div class="clear10"></div>
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
									<div class="centrar">
										<input class="form-control" type="password" id="Txt_Contrasena" name="Contrasena" placeholder="Contraseña*" maxlength="30" size="30" autocomplete="off" />
									</div>
								</div>
							</div>
							<div class="clear10"></div>
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
									<select class="form-control" name="Perfil">
										<option value="Seleccione" selected>Seleccione el perfil...</option>
										<option value="Administrador">Administrador</option>
										<option value="Cliente">Cliente</option>
										<option value="Vendedor">Vendedor</option>
									</select>
								</div>
							</div>
							<div class="clear10"></div>
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
									<div class="centrar">
										<a href="/RegistrarProductos"><input class="botonPregunta" type="button" id="Btn_Ingresar" value="Ingresar" /></a>
									</div>
								</div>
							</div>
							<div class="clear10"></div>
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
									<div class="centrar">
										<a href="http://www.aprenderaprogramar.com" title="RecuperarContraseña">¿Olvidó su contraseña?</a>
									</div>
								</div>
							</div>
							<div class="clear10"></div>
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
									<div class="centrar">
										<a href="/auth/google/"><img src="Imagenes/googleLogo.png" height="29px"/><input class="botonLink" type="button" id="btn_google" value="Ingresar con una cuenta de Google" /></a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="clear10"></div>
        </div>
        
        )
    }
}

export default App;
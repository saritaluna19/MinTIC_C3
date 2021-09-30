function nuevo() {
      var id_usuario = document.getElementById("id_usuario").value;
      var sel_rol = document.getElementById("sel_rol").value;
      var sel_estado = document.getElementById("sel_estado").value;
      var nombre_usuario = document.getElementById("nombre_usuario").value;
      var no_identificacion = document.getElementById("no_identificacion").value;
      var no_telefono = document.getElementById("no_telefono").value;
      var correo_electronico = document.getElementById("correo_electronico").value;
      var i = 1;
      var fila = '<tr id="row' + i + '"><td>' + id_usuario + '</td><td>' + sel_rol + '</td><td>' + sel_estado + + '</td><td>' + nombre_usuario  + '</td><td>' + no_identificacion  + '</td><td>' + no_telefono  + '</td><td>' + correo_electronico + '</td><td><input type="checkbox" id="seleccionar' + i + '"></td></tr>';
    
      i++;
    
      $('#datos_usuarios tr:first').after(fila);
        var nFilas = $("#datos_usuarios tr").length;
        document.getElementById("id_usuario").value ="";
        document.getElementById("sel_rol").value = "";
        document.getElementById("sel_estado").value = "";
        document.getElementById("nombre_usuario").value ="";
        document.getElementById("no_identificacion").value = "";
        document.getElementById("no_telefono").value = "";
        document.getElementById("correo_electronico").value = "";
        document.getElementById("id_usuario").focus();
      }

function seleccionar(){
    document.getElementById("id_usuario").value ="fzapata";
    document.getElementById("sel_rol").value = "Administrador";
    document.getElementById("sel_estado").value = "Autorizado";
    document.getElementById("nombre_usuario").value ="Fabian Zapata";
    document.getElementById("no_identificacion").value = "1032420628";
    document.getElementById("no_telefono").value = "3138832810";
    document.getElementById("correo_electronico").value = "fabianza@outlook.com";
    document.getElementById("id_usuario").focus();
}
function regresar(){
    document.getElementById("id_usuario").value ="";
    document.getElementById("sel_rol").value = "";
    document.getElementById("sel_estado").value = "";
    document.getElementById("nombre_usuario").value ="";
    document.getElementById("no_identificacion").value = "";
    document.getElementById("no_telefono").value = "";
    document.getElementById("correo_electronico").value = "";
    document.getElementById("id_usuario").focus();
}
function buscar(){
    document.getElementById("id_usuario").value = document.getElementById("micelda").innerText;
}
function guardar(){
    alert('Usuario: '+ document.getElementById("id_usuario").value + ' Rol Actualizado: ' + document.getElementById("sel_rol").value + ' Estado Actualizado: '+ document.getElementById("sel_estado").value);
}
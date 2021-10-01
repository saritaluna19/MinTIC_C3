function regresar() {
    window.locationf="https://github.com/saritaluna19/MinTIC_C3/blob/main/Interfaces_Unificacion/AdminUsuarios.html";
} 
setTimeout ("regresar()", 5000);


function seleccionar(x){ 
    document.getElementById("seleccionar1").checked = false
    document.getElementById("seleccionar2").checked = false
    document.getElementById("seleccionar3").checked = false
    document.getElementById("seleccionar4").checked = false
    document.getElementById("seleccionar5").checked = false
    document.getElementById("seleccionar"+x).checked = true
};
function nuevo(){
    document.getElementById("id_usuario").value ="";
    document.getElementById("contraseña").value = "";
    document.getElementById("sel_rol").value = "";
    document.getElementById("sel_estado").value = "";
    document.getElementById("nombre_usuario").value ="";
    document.getElementById("no_identificacion").value = "";
    document.getElementById("no_telefono").value = "";
    document.getElementById("correo_electronico").value = "";
    document.getElementById("seleccionar1").checked = false
    document.getElementById("seleccionar2").checked = false
    document.getElementById("seleccionar3").checked = false
    document.getElementById("seleccionar4").checked = false
    document.getElementById("seleccionar5").checked = false
    document.getElementById("id_usuario").focus();
}
function buscar(){
    var x = document.getElementById("d_usuarios").rows.length + 1;
    for (var i = 1; i < x; i++) {
        if (document.getElementById("seleccionar"+i).checked == true){
            x = i
        };
     }
    document.getElementById("id_usuario").value =document.getElementById(x).cells[0].innerText;
    document.getElementById("contraseña").value = "password";
    document.getElementById("sel_rol").value = document.getElementById(x).cells[1].innerText;
    document.getElementById("sel_estado").value = document.getElementById(x).cells[2].innerText;
    document.getElementById("nombre_usuario").value =document.getElementById(x).cells[3].innerText;
    document.getElementById("no_identificacion").value = document.getElementById(x).cells[4].innerText;
    document.getElementById("no_telefono").value = document.getElementById(x).cells[5].innerText;
    document.getElementById("correo_electronico").value = document.getElementById(x).cells[6].innerText;
    document.getElementById("id_usuario").focus();
}
function guardar(){
    var x = document.getElementById("d_usuarios").rows.length + 1;
    for (var i = 1; i < x; i++) {
        if (document.getElementById("seleccionar"+i).checked == true){
            x = i
        };
     }
    document.getElementById(x).cells[0].innerText = document.getElementById("id_usuario").value;
    document.getElementById(x).cells[1].innerText = document.getElementById("sel_rol").value;
    document.getElementById(x).cells[2].innerText = document.getElementById("sel_estado").value;
    document.getElementById(x).cells[3].innerText = document.getElementById("nombre_usuario").value;
    document.getElementById(x).cells[4].innerText = document.getElementById("no_identificacion").value;
    document.getElementById(x).cells[5].innerText = document.getElementById("no_telefono").value;
    document.getElementById(x).cells[6].innerText = document.getElementById("correo_electronico").value;
    alert('Usuario: '+ document.getElementById("id_usuario").value + ' Rol Actualizado: ' + document.getElementById("sel_rol").value + ' Estado Actualizado: '+ document.getElementById("sel_estado").value);
    nuevo()
}
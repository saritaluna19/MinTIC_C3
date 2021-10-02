function seleccionar(x){ 
    document.getElementById("seleccionar1").checked = false
    document.getElementById("seleccionar2").checked = false
    document.getElementById("seleccionar3").checked = false
    document.getElementById("seleccionar4").checked = false
    document.getElementById("seleccionar5").checked = false
    document.getElementById("seleccionar"+x).checked = true
};
function nuevo(){
    document.getElementById("Text_ID_Usuario").value ="";
    document.getElementById("Text_Contrasena").value = "";
    document.getElementById("DD_Rol").value = "";
    document.getElementById("DD_Estado").value = "";
    document.getElementById("Text_PrimerApellido").value ="";
    document.getElementById("Txt_SegundoApellido").value ="";
    document.getElementById("Txt_PrimerNombre").value ="";
    document.getElementById("Txt_SegundoNombre").value ="";
    document.getElementById("Txt_Identificacion").value = "";
    document.getElementById("Txt_Telefono").value = "";
    document.getElementById("Txt_correo_electronico").value = "";
    document.getElementById("seleccionar1").checked = false
    document.getElementById("seleccionar2").checked = false
    document.getElementById("seleccionar3").checked = false
    document.getElementById("seleccionar4").checked = false
    document.getElementById("seleccionar5").checked = false
    document.getElementById("Text_ID_Usuario").focus();
}
function buscar(){
    var x = document.getElementById("d_usuarios").rows.length + 1;
    for (var i = 1; i < x; i++) {
        if (document.getElementById("seleccionar"+i).checked == true){
            x = i
        };
     }
    document.getElementById("Text_ID_Usuario").value =document.getElementById(x).cells[0].innerText;
    document.getElementById("Text_Contrasena").value = "password";
    document.getElementById("DD_Rol").value = document.getElementById(x).cells[1].innerText;
    document.getElementById("DD_Estado").value = document.getElementById(x).cells[2].innerText;
    document.getElementById("Text_PrimerApellido").value =document.getElementById(x).cells[3].innerText;
    document.getElementById("Txt_SegundoApellido").value =document.getElementById(x).cells[4].innerText;
    document.getElementById("Txt_PrimerNombre").value =document.getElementById(x).cells[5].innerText;
    document.getElementById("Txt_SegundoNombre").value =document.getElementById(x).cells[6].innerText;
    document.getElementById("Txt_Identificacion").value = document.getElementById(x).cells[7].innerText;
    document.getElementById("Txt_Telefono").value = document.getElementById(x).cells[8].innerText;
    document.getElementById("Txt_correo_electronico").value = document.getElementById(x).cells[9].innerText;
    document.getElementById("Text_ID_Usuario").focus();
}
function guardar(){
    var x = document.getElementById("d_usuarios").rows.length + 1;
    for (var i = 1; i < x; i++) {
        if (document.getElementById("seleccionar"+i).checked == true){
            x = i
        };
     }
    document.getElementById(x).cells[0].innerText = document.getElementById("Text_ID_Usuario").value;
    document.getElementById(x).cells[1].innerText = document.getElementById("DD_Rol").value;
    document.getElementById(x).cells[2].innerText = document.getElementById("DD_Estado").value;
    document.getElementById(x).cells[3].innerText = document.getElementById("Text_PrimerApellido").value;
    document.getElementById(x).cells[4].innerText = document.getElementById("Txt_SegundoApellido").value;
    document.getElementById(x).cells[5].innerText = document.getElementById("Txt_PrimerNombre").value;
    document.getElementById(x).cells[6].innerText = document.getElementById("Txt_SegundoNombre").value;
    document.getElementById(x).cells[7].innerText = document.getElementById("Txt_Identificacion").value;
    document.getElementById(x).cells[8].innerText = document.getElementById("Txt_Telefono").value;
    document.getElementById(x).cells[9].innerText = document.getElementById("Txt_correo_electronico").value;
    alert('Usuario: '+ document.getElementById("Text_ID_Usuario").value + ' Rol Actualizado: ' + document.getElementById("DD_Rol").value + ' Estado Actualizado: '+ document.getElementById("DD_Estado").value);
    nuevo()
}
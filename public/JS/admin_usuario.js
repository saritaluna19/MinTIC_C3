function nuevo(){
    alert("Se han limpiado todos los campos para crear un nuevo usuario.");
    top.location.href = "/menu/new";
    document.getElementById("Text_ID_Usuario").focus();
}

function buscar(){
    alert("A continuación se muestra el listado de todos los usuarios creados. Puede dar clic en seleccionar para editar.");
    top.location.href = "/";
    document.getElementById("Text_ID_Usuario").focus();
}

function guardar(){
    alert('Usuario: '+ document.getElementById("Text_ID_Usuario").value + ' Rol Asignado: ' + document.getElementById("DD_Rol").value + ' Estado Actual: '+ document.getElementById("DD_Estado").value);
    top.location.href = "/";
    document.getElementById("Text_ID_Usuario").focus();
}
function registrar(){
    var _id_producto=document.getElementById("id_producto").value;
    var _cant=document.getElementById("cant_producto").value;
    var _precio=document.getElementById("precio_unidad").value;
    var _eliminar

    var fila="<tr><td>"+_id_producto+"<tr><td>"+_cant+"<tr><td>"+_precio+"<tr><td>";
     var btn_registrar=document.createElement("TR");
        btn_registrar.innerHTML=fila;
        document.getElementById("datos_producto").appendChild(btn_registrar);
}
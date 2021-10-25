function alertar(texto) 
{ alert(texto); }

function registrar_ventas(){
    var _id_producto=document.getElementById("Txt_IDProducto").value;
    var _cant=document.getElementById("Txt_CantidadProducto").value;
    var _precio=document.getElementById("Txt_PrecioUnidad").value;
    var _eliminar

    var fila="<tr><td>"+_id_producto+"</td><td>"+_cant+"</td><td>"+_precio+"</td><td><input class='botonPregunta' id='Btn_EliminarProducto' type='button' value='Eliminar'></td>";
    var btn_registrar=document.createElement("tr");
        btn_registrar.innerHTML=fila;
        document.getElementById("datos_producto").appendChild(btn_registrar);
}

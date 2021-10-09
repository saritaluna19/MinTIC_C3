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

function registrar_productos(){
    var _id_Rproducto=document.getElementById("Text_IDProductoR").value;
    var _Rcant=document.getElementById("Txt_Cantidad").value;
    var _Rprecio=document.getElementById("Txt_ValorUnitario").value;
    var _descripcion=document.getElementById("Txt_Descripcion").value;
    var _Estado=document.getElementById("DD_Estado").value;

    var fila="<tr><td>"+_id_Rproducto+"</td><td>"+_Rcant+"</td><td>"+_Rprecio+"</td><td>"+_descripcion+"</td><td>"+_Estado+"</td>";
    var btn_registrarProducto=document.createElement("tr");
        btn_registrarProducto.innerHTML=fila;
        document.getElementById("registro_producto").appendChild(btn_registrarProducto);
}
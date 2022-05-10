 function CargarClientes(){
   var nombre= document.getElementById("name").value;
   var apellido = document.getElementById("lastName").value;
   var tel = document.getElementById("phone").value;
   var correo =  document.getElementById("email").value;
   var mensaje =  document.getElementById("text").value;

  alert(
      "Nombre : " + nombre + "\n" +"Apellido : " + apellido + "\n" +
  "Telefono : " + tel + "\n" + "Correo : " + correo + "\n" + "Mensaje : " + mensaje );
}





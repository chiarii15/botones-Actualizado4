let usuario = prompt ("Buenas, ¿Cuál es tu nombre?")
let password = "123boquita";
let estado = true;
let clave = 0;

IngresarData();

function IngresarData(){

let NuevoPass = prompt ("Ingrese su contraseña");

 while (estado == true){
    
     if (NuevoPass != password){
        alert("La contraseña esta mal");
        clave = 1
    }
    
    

    else{
        estado = false;
        clave = 0;
    }

    if (clave == 1){
        NuevoPass = prompt ("Ingrese su contraseña")
    }
  }
 
}
alert("Bienvenido/a " + usuario);


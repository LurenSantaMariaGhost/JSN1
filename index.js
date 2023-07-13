let usuario = prompt("Ingrese su nombre de usuario");
let contrasenia = prompt("Ingrese su contraseña");

while ((usuario !="man") || (contrasenia !="2076")) {
    if (alert("El usuario o contraseña no son validos"));
    usuario = prompt ("Ingrese un nombre de usuario valido");
    contrasenia = prompt('Ingrese una contraseña valida');
} 
    alert("Bienvenido al sistema :3");

let producto1 = parseFloat(prompt("Ingrese el valor del producto"));
let producto2 = parseFloat(prompt("ingrese el valor del producto"));
let producto3 = parseFloat(prompt("Ingrese el valor del producto"));
let producto4 = parseFloat(prompt("Ingrese el valor del producto"));
let producto5 = parseFloat(prompt("Ingrese el valor del producto"));

if (isNaN(producto1,producto2,producto3,producto4,producto5)) {
    alert("El valor ingresado no es un numero")
} else {
    let resultado = producto1 + producto2 + producto3 + producto4 + producto5;
    alert("El precio total es: " + resultado);
}
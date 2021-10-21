let cantidaddeintentos: number = 1;
let respuesta: string = "";

while (cantidaddeintentos < 4 && respuesta !== "eureka") {
  respuesta = prompt("Ingrese la clave: ");
  if (respuesta === "eureka") {
    console.log("la clave correcta, bienvenido");
  } else {
    console.log("has agotado todos los intentos");
    cantidaddeintentos++;
  }
}

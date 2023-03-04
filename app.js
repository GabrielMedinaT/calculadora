const pantalla = document.querySelector(".pantalla"),
  botones = document.querySelectorAll(".button");

resultado = "";
operacion = "";

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;
    if (valor === "C") {
      resultado = "";
      operacion = "";
      pantalla.textContent = 0;
    } else if (valor === "=") {
      if (operacion === "+") {
        resultado = parseFloat(resultado) + parseFloat(pantalla.textContent);
        console.log(resultado);
      } else if (operacion === "-") {
        resultado = parseFloat(resultado) - parseFloat(pantalla.textContent);
      } else if (operacion === "*") {
        resultado = parseFloat(resultado) * parseFloat(pantalla.textContent);
      } else if (operacion === "/") {
        resultado = parseFloat(resultado) / parseFloat(pantalla.textContent);
      }
      pantalla.textContent = resultado;
      operacion = "";
    } else if (boton.classList.contains("operador")) {
      operacion = valor;
      resultado = pantalla.textContent;
      pantalla.textContent = "0";
    } else {
      if (pantalla.textContent === "0") {
        pantalla.textContent = valor;
      } else {
        pantalla.textContent += valor;
      }
    }
  });
});

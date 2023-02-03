var valor1 = "";
var valor2 = "";
//var resultado;



function mostrar(numero) {
  var aux = document.getElementById("pantalla").value;
  if (aux == "0") {
    document.getElementById("pantalla").value = numero;
  } else {
    document.getElementById("pantalla").value += numero;
  }
}

// Funcion para limpiar pantalla
function limpiar() {
  document.getElementById("pantalla").value = 0;
  valor1 = "";
  operador = "";
}

function operacion(senhal) {
  if (valor1 == "") {
    operador = senhal;
    valor1 = parseFloat(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = "";
  } else {
    switch (operador) {
      case "+":
        operador = senhal;
        valor2 = document.getElementById("pantalla").value;
        valor1 = parseFloat(valor1) + parseFloat(valor2);
        document.getElementById("pantalla").value = valor1;
        document.getElementById("pantalla").value = "";
        valor2 = "";
        break;
      case "-":
        operador = senhal;
        valor2 = document.getElementById("pantalla").value;
        valor1 = parseFloat(valor1) - parseFloat(valor2);
        document.getElementById("pantalla").value = valor1;
        document.getElementById("pantalla").value = "";
        valor2 = "";
        break;
      case "/":
        operador = senhal;
        valor2 = document.getElementById("pantalla").value;
        valor1 = parseFloat(valor1) / parseFloat(valor2);
        document.getElementById("pantalla").value = valor1;
        document.getElementById("pantalla").value = "";
        valor2 = "";
        break;
      case "*":
        operador = senhal;
        valor2 = document.getElementById("pantalla").value;
        valor1 = parseFloat(valor1) * parseFloat(valor2);
        document.getElementById("pantalla").value = valor1;
        document.getElementById("pantalla").value = "";
        valor2 = "";
        break;
      default:
        resultado = valor1;
        break;
    }
  }
}

function punto() {
  document.getElementById("pantalla").value += ".";
}

// Função para alterar para número positivo ou negativo
/*function maisMenos() {
  if (document.getElementById("pantalla").value == "") {
    document.getElementById("pantalla").value = "-";
  } else {
    document.getElementById("pantalla").value = "";
  }
}*/

function calcular() {
  switch (operador) {
    case "+":
      resultado = valor1 + parseFloat(document.getElementById("pantalla").value);
      document.getElementById("pantalla").value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    case "-":
      resultado = valor1 - parseFloat(document.getElementById("pantalla").value);
      document.getElementById("pantalla").value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    case "/":
      resultado = valor1 / parseFloat(document.getElementById("pantalla").value);
      document.getElementById("pantalla").value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    case "*":
      resultado = valor1 * parseFloat(document.getElementById("pantalla").value);
      document.getElementById("pantalla").value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    
    default:
      resultado = valor1;
      document.getElementById("pantalla").value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
  }
  valor1 = "";
  operador = "";
}
//funcion para porcentaje
/*function porcentage() {
  valor2 = parseFloat(document.getElementById("pantalla").value);
  if (operador == "*") {
    resultado = (valor1 / 100) * valor2;
  }
  document.getElementById("pantalla").value = resultado;
}*/

//funcion borrar ultimo numero
function backspace() {
  del = document.getElementById("pantalla").value;
  document.getElementById("pantalla").value = del.length;
  document.getElementById("pantalla").value = del.substr(0, del.length - 1);
}
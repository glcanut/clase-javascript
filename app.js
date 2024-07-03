function sumar(numero1, numero2) {
  resultado = numero1 + numero2;
  return resultado;
}

function restar(numero1, numero2) {
  resultado = numero1 - numero2;
  return resultado;
}

function multiplicar(numero1, numero2) {
  resultado = numero1 * numero2;
  return resultado;
}

function dividir(numero1, numero2) {
  resultado = numero1 / numero2;
  return resultado;
}

let continuar = true;

function calculator() {
  while (continuar) {
    // Solicitar los dos valores
    let value1 = parseInt(prompt("Ingrese el primer valor:"));
    let value2 = parseInt(prompt("Ingrese el segundo valor:"));

    // Mostrar las opciones de operación
    let operation = prompt(
      "Seleccione la operación que desea realizar:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División"
    );

    // Realizar la operación seleccionada
    let result;
    switch (operation) {
      case "1":
        result = sumar(value1, value2);
        alert(`El resultado de la suma es: ${result}`);
        break;
      case "2":
        result = restar(value1, value2);
        alert(`El resultado de la resta es: ${result}`);
        break;
      case "3":
        result = multiplicar(value1, value2);
        alert(`El resultado de la multiplicación es: ${result}`);
        break;
      case "4":
        if (value2 !== 0) {
          result = dividir(value1, value2);
          alert(`El resultado de la división es: ${result}`);
        } else {
          alert("Error: No se puede dividir por cero.");
        }
        break;
      default:
        alert("Operación no válida. Por favor, intente nuevamente.");
        continue;
    }

    // Preguntar si el usuario quiere realizar otra operación
    let continueOperation = prompt(
      "¿Desea realizar otra operación? (si/no)"
    ).toLowerCase();
    if (continueOperation !== "si") {
      continuar = false;
      break;
    }
  }
}

// Iniciar la calculadora
calculator();

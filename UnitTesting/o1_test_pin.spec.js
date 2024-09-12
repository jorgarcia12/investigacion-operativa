//Test PIN

function checkPin(pin) {
  if (pin.toString().length == 4 || parseInt.toString().length == 6) {
    let soloNum = /^[0-9]+$/.test(pin);
    if (soloNum) {
      console.log("PIN valido, bienvenido");
      return true;
    } else {
      console.log("El PIN no debe contener letras");
      return false;
    }
  } else {
    console.log("El largo del PIN debe ser 4 o 6 digitos");
    return false;
  }
}

test("1769 deberia ingresar", () => {
  expect(checkPin(1769)).toBe(true);
});

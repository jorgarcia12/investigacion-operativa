//Test volumen
function calculateVol(diameter, height, measurement = "m") {
  if (measurement === "cm") {
    diameter = diameter / 100;
    height = height / 100;
  }
  let radius = diameter / 2;
  let volume = Math.PI * Math.pow(radius, 2) * height;
  return Math.trunc(volume);
}

test("ingresando (1.5,6,'m') deberia devolver 10 litros", () => {
  expect(calculateVol(1.5, 6, "m")).toBe(10);
});

test("ingresando (100,2000,'cm') deberia deolver 15 litros", () => {
  expect(calculateVol(100, 2000, "cm")).toBe(15);
});

//Test Siglo
function calculateCentury(year) {
  let cent = Math.ceil(year / 100);
  return cent;
}

test("ingresando el año 1705 este deberia pertenecer a siglo 18", () => {
  expect(calculateCentury(1705)).toBe(18);
});

test("Ingresando el año 1900, este deberia pertenecer al siglo 19", () => {
  expect(calculateCentury(1900)).toBe(19);
});

test("Ingresando el año 1601, este deberia pertenecer al siglo 17", () => {
  expect(calculateCentury(1601)).toBe(17);
});

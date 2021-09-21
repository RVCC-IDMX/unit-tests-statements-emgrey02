const {
  rectanglePerimeter,
  rectangleArea,
  circleCircumference,
  circleArea,
  triangleArea,
  pythagorean,
} = require('../src/stmnts-03');

test('rectanglePerimeter', () => {
  expect(rectanglePerimeter(2, 3)).toBeCloseTo(10);
  expect(rectanglePerimeter(3, 4)).toBeCloseTo(14);
  expect(rectanglePerimeter(4, 5)).toBeCloseTo(18);
});

test('rectangleArea', () => {
  expect(rectangleArea(2, 3)).toBeCloseTo(6);
  expect(rectangleArea(3, 4)).toBeCloseTo(12);
  expect(rectangleArea(4, 5)).toBeCloseTo(20);
});

test('circleCircumference', () => {
  expect(circleCircumference(2)).toBeCloseTo(12.57);
  expect(circleCircumference(3)).toBeCloseTo(18.85);
  expect(circleCircumference(4)).toBeCloseTo(25.13);
});

test('circleArea', () => {
  expect(circleArea(2)).toBeCloseTo(12.57);
  expect(circleArea(3)).toBeCloseTo(28.27);
  expect(circleArea(4)).toBeCloseTo(50.27);
});

test('triangleArea', () => {
  expect(triangleArea(2, 3)).toBeCloseTo(3);
  expect(triangleArea(3, 4)).toBeCloseTo(6);
  expect(triangleArea(4, 5)).toBeCloseTo(10);
  expect(triangleArea(4.5, 5.5)).toBeCloseTo(12.38);
});

test('pythagorean', () => {
  expect(pythagorean(3, 4)).toBeCloseTo(5);
  expect(pythagorean(4, 7)).toBeCloseTo(8.06);
  expect(pythagorean(4.5, 7.5)).toBeCloseTo(8.75);
});

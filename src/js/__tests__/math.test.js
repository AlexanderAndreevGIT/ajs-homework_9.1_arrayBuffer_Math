import Magician from '../characters/magician';

// const merlin = new Magician('Merlin');
// merlin.distance = 0;
// merlin.stoned = true;
// merlin.attack = 200;

test('class Math should set / get stoned status', () => {
  const merlin = new Magician('Merlin');
  const expected = true;
  merlin.stoned = true;
  expect(merlin.stoned).toEqual(expected);
});

test('class Math should set / get attack', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 1;
  merlin.attack = 100;
  const expected = 100;
  expect(merlin.attack).toEqual(expected);
});

test('class Math should set / get attack', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 2;
  merlin.attack = 100;
  const expected = 90;
  expect(merlin.attack).toEqual(expected);
});

test('class Math should set / get attack', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 3;
  merlin.attack = 100;
  const expected = 80;
  expect(merlin.attack).toEqual(expected);
});

test('class Math should set / get attack', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 4;
  merlin.attack = 100;
  const expected = 70;
  expect(merlin.attack).toEqual(expected);
});

test('class Math should set / get attack', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 5;
  merlin.attack = 100;
  const expected = 60;
  expect(merlin.attack).toEqual(expected);
});

test('class Math should set / get attack', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 2;
  merlin.stoned = true;
  merlin.attack = 100;
  const expected = 85;
  expect(merlin.attack).toEqual(expected);
});

// test.each([
//   [[1, 100], 100],
//   [[2, 100], 90],
//   [[3, 100], 80],
// ])(
//   ('class Character should throw name error'),
//   (input, expected) => {
//     expect(() => {
//       merlin.distance = input[0];
//       merlin.attack = input[1];
//       return merlin.attack;
//     }).toBe(expected);
//   },
// );

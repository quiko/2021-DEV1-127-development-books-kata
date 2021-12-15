import samples from "./samples"
import checkout from "./functions"

test("Price of 0 books is 0", () => {
  expect(
    checkout([])
  ).toBe(0);
});

test("Price of two different books should be equal to 95", () => {
  expect(
    checkout(samples.One)
  ).toBe(95);
});

test("Price of three different books should be equal to 135", () => {
  expect(
    checkout(samples.Three)
  ).toBe(135);
});

test("Price of a set of three books (2 same and one different ) should be 145", () => {
  expect(
    checkout(samples.Four)
  ).toBe(145);
});

test("Price of a  2 sets of 2 different books  should be 190", () => {
  expect(
    checkout(samples.Five)
  ).toBe(190);
});

test("Price of a set of three different books and one dublicated book should be equal to 210", () => {
  expect(
    checkout(samples.Six)
  ).toBe(210);
});

test("Price of five same books should be 250", () => {
  expect(
    checkout(samples.Seven)
  ).toBe(250);
});

test("Price of five different books should be equal to 187,5", () => {
  expect(
    checkout(samples.Eight)
  ).toBe(187.5);
});

test("Price of two sets of four different books should be equal to 320", () => {
  expect(
    checkout(samples.Nine)
  ).toBe(320);
});

test("Price of one book should be 50", () => {
  expect(
    checkout(samples.Ten)
  ).toBe(50);
});
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import BooksList from "./BooksList";
import Books from "../catalogue";

afterEach(cleanup);

it("should render BookList component", () => {
  const view = render(<BooksList />);
  expect(view).toBeTruthy();
});

it("renders data correctly", () => {
  const { getAllByTestId } = render(<BooksList />);
  const itemNames = getAllByTestId("single-item").map((li) => li.textContent);
  const data = Books.map((book) => book.name);
  expect(itemNames).toEqual(data);
});

it("Total length of list should be 5", () => {
  const { getByTestId } = render(<BooksList />);
  const listUl = getByTestId("item-list-wrap");
  expect(listUl.children.length).toBe(5);
});

it("should render an add to cart button with every item", () => {
  const { getAllByText } = render(<BooksList />);
  expect(getAllByText("Add to cart")).toHaveLength(5);
});

test("buttons calls function on click", () => {
  const onClick = jest.fn();

  const buttons = screen.queryAllByTestId("button");

  buttons.forEach((button) => {
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});

it("should render a  checkout button", () => {
  const { getByText } = render(<BooksList />);
  expect(getByText("Checkout")).toBeTruthy();
});

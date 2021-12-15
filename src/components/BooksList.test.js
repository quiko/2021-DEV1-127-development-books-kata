/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import {render, cleanup} from '@testing-library/react'
import BooksList from './BooksList'
import Books from '../catalogue'

afterEach(cleanup)

it("should render BookList component", () => {    
    const view = render(<BooksList />);    
    expect(view).toBeTruthy();  
});

it('renders data correctly', () => {
    const {getAllByTestId} = render(<BooksList />)
    const itemNames = getAllByTestId('single-item').map(li => li.textContent)
    const data = Books.map(c => c.name)
    expect(itemNames).toEqual(data)
     
  })

  it('Total length of list should be 5', () => {
    const {getByTestId} = render(<BooksList />)
    const listUl = getByTestId('item-list-wrap');
    expect(listUl.children.length).toBe(5);
  })
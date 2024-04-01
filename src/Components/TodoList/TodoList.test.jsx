import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from './TodoList';

test('renders todo list with input and add button', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    let inputElement = getByPlaceholderText('Add a todo...');
    let addButton = getByText('Add');

    expect(inputElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
});

test('adds todo when add button is clicked', () => {
    const { getByPlaceholderText, getByText, getByText: getByTextInList } = render(<TodoList />);
    let inputElement = getByPlaceholderText('Add a todo...');
    let addButton = getByText('Add');
    let todoText = 'Test Todo';

    fireEvent.change(inputElement, { target: { value: todoText } });
    fireEvent.click(addButton);

    expect(inputElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(getByTextInList(todoText)).toBeInTheDocument();
});

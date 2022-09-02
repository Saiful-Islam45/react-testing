import {screen, render} from '@testing-library/react';
import { Hello } from './Hello';

test('Hello world test', () => {
    render(<Hello/>)
    const testElement = screen.getByText(/hello/i);
    expect(testElement).toBeInTheDocument()
})

test('Hello world test with name', () => {
    render(<Hello name = 'Saiful'/>)
    const testElement = screen.getByText(/hello saiful/i);
    expect(testElement).toBeInTheDocument()
})

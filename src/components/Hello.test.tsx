import {screen, render} from '@testing-library/react';
import { Hello } from './Hello';
test('Hello world test', () => {
    render(<Hello/>)
    const testElement = screen.getByText(/hello/i);
    expect(testElement).toBeInTheDocument()
})
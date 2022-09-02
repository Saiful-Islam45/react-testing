import {screen, render} from '@testing-library/react';
import { TDD } from './TDD';

test.only('TDD world test', () => {
    render(<TDD/>)
    const testElement = screen.getByText(/TDD/i);
    expect(testElement).toBeInTheDocument()
})

test.skip('TDD world test with name', () => {
    render(<TDD name = 'Saiful'/>)
    const testElement = screen.getByText(/TDD saiful/i);
    expect(testElement).toBeInTheDocument()
})

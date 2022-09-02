//test file name could be name.spec.tsx 
import {screen, render} from '@testing-library/react';
import { TDD } from './TDD';

// we can use describe.only and describe.skip to test or skip specific test case  
describe('Group test', () => {
    // we can use 'it' instead of 'test' and 'fit' for 'test.only' and 'xit' for 'test.skip'
    test.only('TDD  test', () => {
        render(<TDD/>)
        const testElement = screen.getByText(/TDD/i);
        expect(testElement).toBeInTheDocument()
    })
    
    test.skip('TDD test with name', () => {
        render(<TDD name = 'Saiful'/>)
        const testElement = screen.getByText(/TDD saiful/i);
        expect(testElement).toBeInTheDocument()
    })
    
})
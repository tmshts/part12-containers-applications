/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import Todo from './Todo'
// clicking buttons in tests
import userEvent from '@testing-library/user-event'


describe('displaying a component todo', () => {

    test('renders content with getByText', () => {
        const todo = {
            text: 'Component testing is done with react-testing-library'
        }

        render(<Todo todo={todo} />)

        const element = screen.getByText('Component testing is done with react-testing-library')
        expect(element).toBeDefined()
    })

    test('renders content with container - querySelector', () => {
        const todo = {
            text: 'Component testing is done with react-testing-library'
        }

        const { container } = render(<Todo todo={todo} />)

        const div = container.querySelector('.todo')
        expect(div).toHaveTextContent(
          'Component testing is done with react-testing-library'
        )
    })

    test('testing button', async () => {
        const todo = {
            text: 'Component testing is done with react-testing-library'
        }

        const mockDelete = vi.fn()
        const mockComplete = vi.fn()

        render(<Todo todo={todo} deleteTodo={mockDelete} completeTodo={mockComplete} />)

        const user = userEvent.setup()
        const button = screen.getByText('Set as done')
        await user.click(button)
      
        expect(mockComplete.mock.calls).toHaveLength(1)
    })

})
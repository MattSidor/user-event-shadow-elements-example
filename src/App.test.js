import {renderApp, screen} from './testEnv'

// import userEvent from '@testing-library/user-event'

test('type in paper element', async () => {
  const {user} = renderApp()

  const el = await screen.findByTestId('paper-input')

  // userEvent.click(shadowInputElement);
  const input = el.shadowRoot.querySelector('input')
  await user.type(input, 'hello')

  // await user.type(screen.getByRole('textbox'), 'abc')
  expect(screen.getByTestId('output')).toHaveTextContent('hello')

  await user.clear(input)
})

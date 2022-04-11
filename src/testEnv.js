import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import {App} from './App'

export function renderApp(options) {
  const container = document.body.appendChild(document.createElement('div'))
  container.append(App())

  const user = userEvent.setup(options)

  return {container, user}
}

export {waitFor, screen} from '@testing-library/dom'

afterEach(() => (document.body.innerHTML = ``))

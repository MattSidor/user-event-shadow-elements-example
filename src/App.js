import '@polymer/paper-input/paper-input.js'

export function App() {
  const fragment = document.createRange().createContextualFragment(`
    <paper-input always-float-label label="Floating label" data-testid="paper-input"></paper-input>
    <div data-testid="output"></div>
  `)

  const output = fragment.querySelector('[data-testid="output"]')

  fragment.querySelector('paper-input').addEventListener('input', (e) => {
    output.textContent = e.currentTarget.value
  })

  return fragment
}

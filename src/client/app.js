import { alchemize, snag, listento, refresh } from 'html-alchemist'
import { NavBar } from './components/nav'
import { WorkSpace } from './components/workspace'
import { setup } from './db.js'

function Container() {
  return [
    NavBar(),
    WorkSpace()
  ]
}

class MainView extends HTMLElement {
  connectedCallback() {
    this.appendChild(alchemize(Container()))
  }
}

customElements.define("poetry-zen", MainView)
await setup()

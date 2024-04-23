import { css, html, } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TailwindElement } from '../base/tw'

const elementStyle = css`
`
@customElement('lb-divide')
export class LBDivide extends TailwindElement(elementStyle) {
  render() {
    return html`<div class="border-b border-gray-200"></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lb-divide': LBDivide
  }
}

import { css, html, } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TailwindElement } from '../base/tw'

const elementStyle = css`
`
@customElement('m-divide')
export class MDivide extends TailwindElement(elementStyle) {
  render() {
    return html`<div class="border-b border-gray-200"></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-divide': MDivide
  }
}

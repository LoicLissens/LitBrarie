import { css, html, } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindElement } from '../base/tw'

const elementStyle = css``
@customElement('lb-button')
export class LBButton extends TailwindElement(elementStyle) {

  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div>
      </div>
      <slot></slot>
      <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click=${this._onClick} part="button">
        count is ${this.count}
      </button>
      </div>
    `
  }

  private _onClick() {
    this.count++
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'lb-button': LBButton
  }
}

import { css, html, TemplateResult} from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindElement } from '../../base/tw'

const elementStyle = css``

//TODO add the possibilities to pass custom icon via slot
@customElement('lb-neuomorphic-checkbox')
export class LBNeuomorphicCheckbox extends TailwindElement(elementStyle) {

    @property({type: String})
    name = "";

    @property({type: String})
    value = "value"

    @property({type: HTMLElement})
    icon = null
    // Works well with Icon from https://heroicons.com
    static defaultIcon: TemplateResult = html`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" />
     </svg>
  `;
    render(){
        return html`
        <label class="relative cursor-pointer inline-block">
            <input type="checkbox" name=${this.name} value=${this.value} class="absolute opacity-0" @change=${this._handleCheckboxChange}>
            <div id="wrapper" class="w-14 h-14 bg-blue-100 flex justify-center items-center shadow-md rounded-lg">
                <i aria-hidden="true" class="text-3xl text-blue-400">${this.icon || LBNeuomorphicCheckbox.defaultIcon}</i>
            </div>
        </label>
        `
    }

    private _handleCheckboxChange(e) {
        const wrapper = this.shadowRoot!.getElementById('wrapper') as HTMLElement;
        if (e.target.checked) {
            wrapper!.style.boxShadow = 'inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1)';
        } else {
            wrapper!.style.boxShadow = '';
        }
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'lb-neuomorphic-checkbox': LBNeuomorphicCheckbox
    }
}
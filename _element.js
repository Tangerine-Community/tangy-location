import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `tangy-location`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TangyLocation extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'tangy-location',
      },
    };
  }
}

window.customElements.define('tangy-location', TangyLocation);

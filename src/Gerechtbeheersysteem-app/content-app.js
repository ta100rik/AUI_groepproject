import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
/**
 * @customElement
 * @polymer
 */
class ContentApp extends PolymerElement {
  static get template() {
    return html`
      <style>

        :host {
          display: block;

          margin-left: 21%;

        }

        .content{
          padding:20px;
        }
       
      </style>
     <div class="content">
       Tafelnummer: <paper-input always-float-label value="{{prop1}}"></paper-input>
       <div>[[prop1]]</div>
      </div>
     
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String
      }
    };
  }
}

window.customElements.define('content-app', ContentApp);

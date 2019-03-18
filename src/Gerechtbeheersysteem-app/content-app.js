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
            <searchable-multi placeholder="Search fruits...">
            <select multiple>
                    <option>Bai pangang</option>
                    <option>Witte rijst</option>
                    <option>Bami met ei</option>
            </select>
          </searchable-multi>
          <button></button>

      </div>
     
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String
      },
      Gerechten:{
        type:Array,
         value: [
          "Bai pangang",
          "Witte rijst",
          "Bami met ei"
        ]
      }
    };
  }
}

window.customElements.define('content-app', ContentApp);

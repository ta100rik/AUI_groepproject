import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class navApp extends PolymerElement {
  static get template() {
    return html`
      <style>

        :host {
          display: block;
        }
        aside{
          width:20%;
          position:absolute;
          border-right:2px grey solid;
          height:1000px;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;

          background-color: #f1f1f1;
        }

        li a {
          display: block;
          color: #000;
          padding: 8px 16px;
          text-decoration: none;
          border-bottom:solid black 1px;
        }

        li a:hover {
          background-color: #555;
          color: white;
        }
      </style>
      <aside>
        <ul>
          <template is="dom-repeat" items="{{Menuitems}}" as="item">
          <li><a href="#">[[item]]</a></li>
          </template>
        </ul>
      </aside>

     
    `;
  }
  static get properties() {
    return {
      Menuitems: {
        type: Array,
        value: [
          "Bestelling invoeren",
          "Gerecht status aanpasssen",
        ]
      }
    };
  }
}

window.customElements.define('navbar-app', navApp);

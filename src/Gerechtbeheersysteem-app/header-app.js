import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class HeaderApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          margin:0;
          padding:0;
          display: block;
        }
        .row{
          height:50px;

          border-bottom:solid black 2px;
        }
        
        .blok1,.blok2,.blok3{
          float:left;
        }
        .blok1{
          width:20%;
          text-align:left;
        }
        .blok2{
          width:60%;
          height:2px;
        }
        .blok3{
          text-align:right;
          width:20%;
        }

      </style>
      <nav>
        <div class="row">
          <div class="blok1">
            <h1> Gerechtbeheer systeem</h1>
          </div>
          <div class="blok2"></div>
          <div class="blok3"><h3>Ober</h3></div>
        </div>
      </nav>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Gerechtbeheersysteem-app'
      }
    };
  }
}

window.customElements.define('header-app', HeaderApp);

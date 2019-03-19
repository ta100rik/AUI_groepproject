import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import 'high-select/lib/high-select.js';

/**
 * @customElement
 * @polymer
 */


class GerechtContentApp extends PolymerElement {
  static get template() {
    return html`
        <style>

            :host {
            display: block;

            margin-left: 21%;

            }
            aside{
                width:80%;
                position:absolute;
              }

            .content{
            padding:20px;
            }

            table{
                width: 100%;
                border-collapse: collapse;
                text-align: left;
            }
            
            table, th, td{
                border: 1px solid black;
            }
       
        </style>
        <h1>Openstaande gerechten</h1>
        <div class="content">
            <table>
                <tr>
                    <th style = width:70%>Gerechtnaam</th>
                    <th style = width:30%>Gerechtstatus</th>
                </tr>
                <template is="dom-repeat" items="{{Bestellingen}}" as="bestelling">
                        <tr>
                            <td style = width:70%>[[bestelling.gerecht]]</td>
                            <td style = width:30%>
                                <high-select search>
                                    <high-option>[[bestelling.status]]</high-option> 
                                    <template is="dom-repeat" items="{{status}}" as="state">
                                        <high-option>[[state]]</high-option> 
                                    </template>
                                </high-select>
                            </td>
                        </tr>
                </template>
            </table>
      </div>
      <app-localStorage-document key="bestelling" data="{{Bestellingen}}"></app-localStorage-document>
     
    `;
  }
  static get properties() {
    return {
      Bestellingen:{
        type:Array,
         value: [
          {gerecht: "Bai pangang", status: "Besteld"},
          {gerecht: "Witte rijst", status: "Besteld"},
          {gerecht: "Bami met ei", status: "Besteld"},
          {gerecht: "Bai pangang", status: "Besteld"},
          {gerecht: "Witte rijst", status: "Besteld"},
          {gerecht: "Bami met ei", status: "Besteld"},
          {gerecht: "Bai pangang", status: "Besteld"},
          {gerecht: "Witte rijst", status: "Besteld"},
          {gerecht: "Bami met ei", status: "Besteld"},
        ]
      },
      status:{
        type:Array,
         value: [
          "Besteld",
          "Wordt bereid",
          "Serveerbaar"
         ]
      }
    };
  }
}

window.customElements.define('gerechtcontent-app', GerechtContentApp);
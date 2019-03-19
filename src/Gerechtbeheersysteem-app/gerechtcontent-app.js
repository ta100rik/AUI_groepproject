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
                    <th style = width:10%>Tafelnummer</th>
                    <th style = width:70%>Gerechtnaam</th>
                    <th style = width:30%>Gerechtstatus</th>
                </tr>
                <template is="dom-repeat" items="{{Bestellingen}}" as="bestelling">
                        <tr>
                            <td style= width:10%>[[bestelling.tafelnr]]</td>
                            <td style = width:60%>[[bestelling.gerecht]]</td>
                            <td style = width:30%>
<<<<<<< HEAD
                                <high-select search >
=======
                            
                                <high-select search on-change="hello">
>>>>>>> aac9146c8228bf3b927215a31cae6a8e3703ebe7
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
     
    `;
  }
  static get properties() {
    return {
      Bestellingen:{
        type:Object,
         value: 
          JSON.parse(localStorage.getItem("lijst"))
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
  hello(evt){

      console.log(evt.path[2].rowIndex);
      let list = JSON.parse(localStorage.getItem("lijst"));
      list[evt.path[2].rowIndex-1].status = evt.path[0].value;
      console.log(list);
      localStorage.setItem("lijst",JSON.stringify(list));
  }

}

window.customElements.define('gerechtcontent-app', GerechtContentApp);
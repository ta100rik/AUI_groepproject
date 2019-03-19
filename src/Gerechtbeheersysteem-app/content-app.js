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
        Tafelnummer: <paper-input type="number" always-float-label value="{{prop1}}"></paper-input>
            <searchable-multi placeholder="Search fruits...">
            <select multiple>
                    <option>Bai pangang</option>
                    <option>Witte rijst</option>
                    <option>Bami met ei</option>
            </select>
          </searchable-multi>
          <button raised on-click="handleClick">bestel</button>

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
      },
      Bestellingen:{
        type:Array,
        value: [
          {gerecht: "nasi goreng", status: "besteld"}
        ]
      }
    };
  }
  
 handleClick() {

        let new_array = new Array();
         let multi = this.shadowRoot.querySelector('searchable-multi');
         let input = this.shadowRoot.querySelector('paper-input');
    if(multi.value.length > 0 && input.value){
        for (var i = multi.value.length - 1; i >= 0; i--) {
          if(multi.value[i] == "Bai pangang"){
              alert("het gerecht " + multi.value[i] + " is helaas niet meer beschikbaar");
          }else{
            new_array.push({tafelnr:input.value,gerecht: multi.value[i], status: "Besteld"});
          }
        }
        localStorage.setItem("lijst",JSON.stringify(new_array)); 
       
        alert("De gerechten zijn in behandeling");
        document.location.reload(true);
        
      }else{
        alert("Er mist nog een tafelnummer of je hebt geen gerechten geslecteerd");
      }
    }
}

window.customElements.define('content-app', ContentApp);

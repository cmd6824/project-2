import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class PlayList extends DDD {

  static get tag() {
    return "play-list";
  }

  constructor() {
    super();
    this.imgArray = [];
    
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .container {
        place-content: center;
      }

      .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 16px;
        background-color: var(--ddd-theme-default-beaverBlue);
        display: none;
      }

      .next {
        right: 0;
        border-radius: 3px 0 0 3px;
      }

      .prev:hover, .next:hover {
        background-color: grey;
      }
    `;
  }

  render() {
    return html`
    <div class="container">
        <a class="prev" @click="${this.previmg}">&#10094;</a>
        <a class="next" @click="${this.nextimg}">&#10095;</a>
    </div>`;
  }

  previmg() {

  }

  nextimg() {

  }





  static get properties() {
    return {
      imgArray: { type: Array },
      
      
    };
  }
}

globalThis.customElements.define(PlayList.tag, PlayList);

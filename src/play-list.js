import { LitElement, html, css } from 'lit';


export class PlayList extends LitElement {

  static get tag() {
    return "play-list";
  }

  constructor() {
    super();
    this.imgArray = [];
    this.opened = false;
    
  }

  static get styles() {
    return css`
      :host {
        display: none;
      }

      :host([opened]) {
        display: flex;
        position: absolute;
        width: 100%;
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
        background-color: blue;
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
      opened: { type: Boolean },

      
    };
  }
}

globalThis.customElements.define(PlayList.tag, PlayList);

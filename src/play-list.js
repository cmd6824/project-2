import { LitElement, html, css } from 'lit';


export class PlayList extends LitElement {

  static get tag() {
    return "play-list";
  }

  constructor() {
    super();
    this.imgArray = [];
    this.opened = false;
    this.slide = 0;
    
  }

  static get styles() {
    return css`
      :host {
        display: none;
      }

      :host([opened]) {
        display: block;
        z-index: 10000;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      .container {
        place-content: center;
        width: auto;
        position: relative;
      }

      .slides {
        width: 1000px;
        height: 1000px;
        margin: auto;
        display: block;    
        padding: 16px;
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
        z-index: 2;
      }

      .next {
        right: 0;
        border-radius: 3px 0 0 3px;
      }

      .prev:hover, .next:hover {
        background-color: grey;
      }

      .closeImage {
        display: flex;
        background-color: red;
        cursor: pointer;
        width: auto;
        justify-content: right;
        top: 0;
        right: 0;
        position: absolute;
      }
    `;
  }

  render() {
    if(!this.opened) {
      return html``; 
    }
    
    return html`
    <div class="container">
      <button class="closeImage" @click="${this.closeBtn}">X</button>

      <button class="prev" @click="${this.previmg}">&#10094;</button>
      <img class="slides" src="${this.imgArray[this.slide]}">
      <button class="next" @click="${this.nextimg}">&#10095;</button>

      
    </div>`;
  }

  firstUpdated() {
    var mediaImage = document.querySelectorAll('media-image');
    mediaImage.forEach(image => {
      this.imgArray.push(image.getAttribute('imagesrc'));
      this.requestUpdate();
    })

    console.log(this.imgArray);

    window.addEventListener('image-clicked', (e) => {
      var clickImg = e.target.attributes[0].nodeValue;
      var index = this.imgArray.indexOf(clickImg);

      if(index != -1) {
        this.slide = index;
      }
      this.opened = true;
    })
  }


  nextimg() {
    if (this.slide < this.imgArray.length - 1) {
      this.slide++;
      this.requestUpdate();
    }
  }

  previmg() {
    if (this.slide > 0) {
      this.slide--;
      this.requestUpdate();
    }
  }

  closeBtn() {
    this.opened = false;
  }





  static get properties() {
    return {
      imgArray: { type: Array },
      opened: { type: Boolean, reflect: true },
      slide: { type: Number },

    };
  }
}

globalThis.customElements.define(PlayList.tag, PlayList);

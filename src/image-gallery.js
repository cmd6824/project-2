import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class ImageGallery extends DDD {

  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();
    this.slideIndex = 1;
    
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .gallery-container {
        margin: auto;
        position: relative;
      }

      .slide-images {
        display: none;
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
    <div class="gallery-container">
        <div class="slide-images">
            <div class="image1">
                <img src="https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg?w=1029&webp=1" style="width:100%">
                <div class="caption"></div>
            </div>
            <div class="image2">
                <img src="https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408-825x465.jpg" style="width:100%">
                <div class="caption"></div>
            </div>
        </div>
        <a class="prev">&#10094;</a>
        <a class="next">&#10095;</a>
    </div>
    
    
    `;
  }


  static get properties() {
    return {
      slideIndex: { type: String },

    };
  }
}

globalThis.customElements.define(ImageGallery.tag, ImageGallery);

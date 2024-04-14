import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class MediaImage extends DDD {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
    
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .gallery-container {
        position: relative;
      }

      .image {
        max-width: 1000px;
        cursor: pointer;
        transition: 0.3s;
      }

      .image:hover {
        opacity: 0.7;
      }


    `;
  }

  render() {
    return html`
    <div class="gallery-container">
        <div class="slide-images">
            <div class="image">
                <img src="https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg?w=1029&webp=1" style="width:100%">
                <div class="caption"></div>
            </div>
            <div class="image">
                <img src="https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408-825x465.jpg" style="width:100%">
                <div class="caption"></div>
            </div>
        </div>
    </div>
    `;
  }

  static get properties() {
    return {
      
    };
  }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);

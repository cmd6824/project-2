import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class ImageGallery extends DDD {

  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();
    
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      
    `;
  }

  render() {
    return html`
    <div>
      
    </div>
    `;
  }




  static get properties() {
    return {
      

    };
  }
}

globalThis.customElements.define(ImageGallery.tag, ImageGallery);

import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class MediaImage extends DDD {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
    this.imagesrc = "";
    this.caption = "Description of the image";
    this.description = "Longer description of the image when image is clicked on";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --gallery-container-primary: var(--ddd-theme-default-skyBlue);
        --gallery-container-secondary: var(--ddd-theme-default-original87Pink);
      }

      .gallery-container {
        position: relative;
        padding: 16px;
        background-color: var(--gallery-container-primary);
        place-content: center;
        text-align: center;
        max-width: 1000px;
      }

      .image {
        max-width: 1000px;
        cursor: pointer;
        transition: 0.3s;
        border: var(--ddd-border-md);
        border-color: var(--ddd-theme-default-potentialMidnight);
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
                <img src="${this.imagesrc}" alt="${this.caption}" style="width:100%">
            </div>
        </div>
    </div>
    `;
  }

  static get properties() {
    return {
      imagesrc: { type: String },
      caption: { type: String },
      description: { type: String },

    };
  }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);

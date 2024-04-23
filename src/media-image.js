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

      * {
        box-sizing: border-box;
      }

      .gallery-container {
        position: relative;
        padding: 16px;
        place-content: center;
        text-align: center;
        max-width: 100%;
      }

      .background {
        display: flex;
        flex-direction: column;
        padding: 16px;
        border: var(--ddd-border-md);
        border-color: var(--ddd-theme-default-potentialMidnight);
        border-radius: 8px;
        background-color: var(--gallery-container-primary);
      }

      .background:hover {
        transform: translate(8px, -8px);
        box-shadow: -8px 8px #000;
        transition: .5s;
      }

      .image {
        max-width: 100%;
        cursor: pointer;
      }


    `;
  }

  render() {
    return html`
    <div class="gallery-container">
      <div class="background">
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

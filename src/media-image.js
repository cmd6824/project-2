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
        --gallery-container-primary: var(--ddd-theme-default-skyBlue);
        --gallery-container-secondary: var(--ddd-theme-default-original87Pink);
      }

      .gallery-container {
        position: relative;
        padding: 16px;
        place-content: center;
        text-align: center;
      }


      .image {
        display: flex;
        flex-direction: column;
        padding: 16px;
        border: var(--ddd-border-md);
        border-color: var(--ddd-theme-default-potentialMidnight);
        border-radius: 8px;
        background-color: var(--gallery-container-primary);
        background-size: cover;
        cursor: pointer;
        width: 30%;
      }

      .image:hover {
        transform: translate(8px, -8px);
        box-shadow: -8px 8px #000;
        transition: .5s;
      }


    `;
  }

  render() {
    return html`
    <div class="gallery-container">
          <div class="image">
              <img id="slideImage" src="${this.imagesrc}" alt="${this.caption}" @click="${this.handleClick}"> 
          </div>
      </div>
    </div>
    `;
  }

  handleClick() {
    const evt = new CustomEvent("image-clicked", {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: {
            opened: true,
        },
    });
    this.dispatchEvent(evt);
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

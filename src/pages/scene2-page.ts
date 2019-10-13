import { LitElement, html, customElement, property, css, unsafeCSS } from 'lit-element';
import background from '../assets/images/door1.png';

@customElement('scene2-page')
export class Scene2Page extends LitElement {
  static get styles() {
    return css`
      :host {
        position: fixed;
        width: 100%;
        height: 100%;
      }
      .layout {
        width: 100%;
        height: 100%;
        background-color: skyblue;
      }
      .background {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    `
  }
  render() {
    return html`
<div class="layout">
    <img class='background' src=${background}>
</div>
    `
  }
}

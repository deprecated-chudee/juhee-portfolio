import { LitElement, html, customElement } from 'lit-element';

// @ts-ignore
import background from '../assets/imgs/out/door/out04door1.png';

@customElement('scene2-page')
export class Scene2Page extends LitElement {
  render() {
    const style = html`
      <style>
        :host {
          display: block;
          position: fixed;
          width: 100%;
          height: 100%;
          background-color: skyblue;
        }
        .layout {
          width: 100%;
          height: 100%;
        }
        .background {
          width: 100%;
          height: 100%;
          background-image: url(${background});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
      </style>
    `;
    return html`
      ${style}
      
      <div class='background' />
    `
  }
}

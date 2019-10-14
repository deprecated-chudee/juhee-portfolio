import { LitElement, html, customElement } from 'lit-element';
import { Router } from '@vaadin/router';

// @ts-ignore
import background from '../assets/imgs/intro/page1920/intro0.png';
// @ts-ignore
import mouse01 from '../assets/imgs/intro/page1920/mouse01.png';
// @ts-ignore
import mouse02 from '../assets/imgs/intro/page1920/mouse02.png';
// @ts-ignore
import click01 from '../assets/imgs/intro/page1920/click01.png';
// @ts-ignore
import click02 from '../assets/imgs/intro/page1920/click02.png';

@customElement('intro-page')
export class IntroPage extends LitElement {
  handleClick() {
    Router.go('scene1');
  }
  render() {
    const style = html`
      <style>
      :host {
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .mouse-container {
        position: absolute;
        width: 336px;
        height: 86px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .mouse-container:hover > div:nth-child(1) {
        display: none;
      }
      .mouse-container:hover > div:nth-child(2) {
        display: block;
      }
      .mouse-move {
        animation: mouse infinite 1s alternate linear;
      }
      .mouse-move-center {
        transform: translate(110px, -20px);
      } 
      .mouse-click {
        position: absolute;
        top: -22px;
        display: none;
        cursor: pointer;
      }
      .mouse-click-center {
        transform: translate(120px, -15px);
      }
      @keyframes mouse {
        0% { transform: translate(110px, -15px); }
        100% { transform: translate(110px, -25px); }
      }
      </style>
    `;
    return html`
      ${style}
      
      <div class='mouse-container'>
        <div>
          <img class='mouse mouse-move-center mouse-move' src=${mouse01} alt="">
          <img class='mouse' src=${mouse02} alt="">
        </div>
        <div class="mouse-click" @click="${this.handleClick}">
          <img class='mouse mouse-click-center' src=${click01} alt="">
          <img class='mouse' src=${click02} alt="">
        </div>
      </div>
    `
  }
}

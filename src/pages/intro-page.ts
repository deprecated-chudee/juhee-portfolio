import { LitElement, html, customElement, property, css, unsafeCSS } from 'lit-element';
import intro from '../assets/images/intro01.png';
import mouse from '../assets/images/mouse02.png';
import clicked from '../assets/images/click02_08.png';

@customElement('intro-page')
export class IntroPage extends LitElement {

  static get styles() {
    return css`
    :host {
        position: fixed;
        width: 100%;
        height: 100%;
      }
      .background {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      .mouse-wrapper {
        position: absolute;
        width: 336px;
        height: 86px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .mouse {
        position: absolute;
        object-position: bottom;
        animation: mouse infinite 1s alternate linear;
      }
      .mouse--off,
      .mouse--on {
        position: absolute;
      }
      .mouse:hover > li:nth-child(2) {
        background: url(${unsafeCSS(clicked)} no-repeat center; animation: paused; top:-50px
      }
      @keyframes mouse {
        0%{top: -33px;}
        100%{top: -43px;}
      }
     
    `
  }

  render() {
    return html`
      <img class='background' src=${intro}>
      
      <!-- TODO dom change with mouseover -->
      <div class='mouse-wrapper' @mouseover='${this.test}'>
        <img class='mouse' src=${mouse} alt="">
        <img class='mouse mouse--hover' src=${clicked} alt="">
      </div>
    `
  }

  test(e) {
    console.log(e)
  }
}

import { LitElement, html, customElement, property, css, unsafeCSS } from 'lit-element';
import intro from '../assets/images/intro0.png';

import { Router } from '@vaadin/router';

@customElement('scene1-page')
export class Scene1Page extends LitElement {

  protected firstUpdated() {
    this.scroll();
  }

  scroll() {
    const ref = this.shadowRoot.querySelector('.wrapper');
    console.log(ref);

    document.addEventListener('scroll', function (event) {
      event.preventDefault();
      let scrollTop = $(document).scrollTop();
      $('.posNum').text(scrollTop);

      ref.setAttribute(
        'style',
        `transform: translate3d(0, ${parseInt(scrollTop)/15}px, ${parseInt((-2160) + scrollTop)}px)`
      );

      if(scrollTop >= 2800) {  //스크롤 값
          Router.go('/scene2');
      }
    }, true);
  }

  static get styles() {
    return css`
      .container {
        position: absolute;
        width: 100%;
        height: 4000px;
        overflow:auto;
      }
      .scroll {
        position: fixed;
        width: 1920px;
        height: 1080px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        perspective: 2160px;
        transition: all 10s;
      }
      .wrapper {
        width: 1920px;
        height: 1080px;
        position: absolute;
        transform: translate3d(0, 0, -2160px);
        top: 0;
        left: 0;
        background-size: cover;
      }
      .background {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 3840px;
        height: 2160px;
        background-image: url(${unsafeCSS(intro)});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    `
  }

  render() {
    return html`
      <div class="container">
        <div class="scroll">
          <article class="wrapper">
            <img class='background' src=${intro}>
          </article>
        </div>
      </div>
    `
  }

  test(e) {
    console.log(e)
  }
}

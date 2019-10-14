import { LitElement, html, customElement } from 'lit-element';
import { Router } from '@vaadin/router';

// @ts-ignore
import background from '../assets/imgs/intro/intro3840.jpg';

const NEXT_PAGE = 2800;
const PERSPECTIVE = -2160;
const DIVSION = 15;

@customElement('scene1-page')
export class Scene1Page extends LitElement {

  protected firstUpdated() {
    this.scroll();
  }

  scroll() {
    const ref = this.shadowRoot.querySelector('.wrapper');
    document.addEventListener('scroll', function (event: Event) {
      event.preventDefault();
      const scrollTop = document.scrollingElement.scrollTop;

      ref.setAttribute(
        'style',
        `transform: translate3d(0, ${scrollTop / DIVSION}px, ${PERSPECTIVE + scrollTop}px)`
      );

      if(scrollTop >= NEXT_PAGE) {
        Router.go('scene2');
      }
    }, true);
  }

  render() {
    const style = html`
      <style>
        :host {
          display: block;
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
          background-image: url(${background});
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
      </style>
    `;

    return html`
      ${style}
     
      <div class="scroll">
        <article class="wrapper">
          <div class='background' />
        </article>
      </div>
    `
  }

  test(e) {
    console.log(e)
  }
}

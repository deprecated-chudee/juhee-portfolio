import { LitElement, html, customElement } from 'lit-element';

// @ts-ignore
import background from '../assets/imgs/in/background.png';
// @ts-ignore
import img1 from '../assets/imgs/in/음료냉장고/딸기우유.png';
// @ts-ignore
import img2 from '../assets/imgs/in/음료냉장고/문.png';
// @ts-ignore
import img3 from '../assets/imgs/in/음료냉장고/사이다.png';
// @ts-ignore
import img4 from '../assets/imgs/in/음료냉장고/삼다수3.png';
// @ts-ignore
import img5 from '../assets/imgs/in/음료냉장고/삼다수-2.png';
// @ts-ignore
import img6 from '../assets/imgs/in/음료냉장고/콜라.png';
// @ts-ignore
import img7 from '../assets/imgs/in/음료냉장고/파란우유.png';
// @ts-ignore
import img8 from '../assets/imgs/in/음료냉장고/음료냉장고 문만.png';

@customElement('scene3-page')
export class Scene3Page extends LitElement {
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
          background-size: contain;
          background-position: center;
        }
        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          z-index: 1;
        }
      </style>
    `;
    return html`
      ${style}
      
      <img class="overlay" src=${img1} />
      <img class="overlay" src=${img2} />
      <img class="overlay" src=${img3} />
      <img class="overlay" src=${img4} />
      <img class="overlay" src=${img5} />
      <img class="overlay" src=${img6} />
      <img class="overlay" src=${img7} />
      <img class="overlay" src=${img8} />
    `
  }
}

import { LitElement, html, property, customElement } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {

  @property({type: String})
  myString: string = 'World';
  myArray: Array<string> = ['an','array','of','test','data'];
  myBool: boolean = true;

  render() {
    return html`
      <p>${this.myString}</p>
      <ul>
        ${this.myArray.map(i => html`<li>${i}</li>`)}
      </ul>
      ${this.myBool?
      html`<p>Render some HTML if myBool is true</p>`:
      html`<p>Render some other HTML if myBool is false</p>`}
    `;
  }
}

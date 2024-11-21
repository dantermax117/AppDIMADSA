import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class AppDimadsa extends LitElement {
  static properties = {

  }

  static styles = css`
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <h1>Hola alan</h1>
      <h2>adios alan</h2>
    `;
  }
}

customElements.define('app-dimadsa', AppDimadsa);
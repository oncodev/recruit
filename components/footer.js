export default class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <p>footer</p>
    `;
  }
}

customElements.define("wc-footer", FooterComponent);

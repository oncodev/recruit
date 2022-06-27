// const map = recruit.map(a =>
// )
export default class CardComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    `;
  }
}

customElements.define("wc-card", CardComponent);

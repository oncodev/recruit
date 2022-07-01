export default class ModalComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="inner">
        <div>1</div>
        <div>2</div>
      </div>
      <div class="inner">
        <div>3</div>
        <div>4</div>
      </div>
    `;
  }
}

customElements.define("wc-modal", ModalComponent);

const template = document.createElement("template");
template.innerHTML = `
  <p>Header</p>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("wc-header", HeaderComponent);

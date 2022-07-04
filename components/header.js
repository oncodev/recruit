export default class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="logo">
        <a href="/"><span></span>Careers</a>
      </div>
      <div class="gnb">
        <a href="../recruit/pages/company.html">채용 안내</a>
        <a href="../recruit/pages/lab.html">직무 소개</a>
        <a href="../recruit/pages/faq.html">문의</a>
      </div>
    `;
  }
}
customElements.define("wc-header", HeaderComponent);

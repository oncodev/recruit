export default class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="logo">
        <a href="/">홈</a>
      </div>
      <div class="gnb">
        <!-- <a href="../pages/recruit.html">채용 안내</a> -->
        <a href="../pages/company.html">채용 안내</a>
        <a href="../pages/lab.html">직무 소개</a>
        <a href="../pages/faq.html">문의</a>
      </div>
    `;
  }
}

customElements.define("wc-header", HeaderComponent);

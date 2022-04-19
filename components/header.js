export default class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="/recruit">홈</a>
      <a href="../pages/company.html">온코크로스는 어떤 회사일까</a>
      <a href="../pages/work.html">우리가 하는 의미있는 일</a>
      <a href="../pages/recruit.html">업무의 기회와 따뜻한 복지</a>
    `;
  }
}

customElements.define("wc-header", HeaderComponent);

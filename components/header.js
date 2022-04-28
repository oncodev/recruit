export default class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="header">
        <div class="header_mobile_menu">메뉴</div>
        <div class="logo">
          <a href="/recruit">홈</a>
          <!-- <a href="/">홈</a> -->
        </div>
        <div class="gnb">
          <a href="../pages/company.html">온코크로스는 어떤 회사일까</a>
          <a href="../pages/work.html">우리가 하는 의미있는 일</a>
          <a href="../pages/welfare.html">업무의 기회와 따뜻한 복지</a>
        </div>
      </div>
    `;
  }
}

customElements.define("wc-header", HeaderComponent);

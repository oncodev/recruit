export default class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer">
        <p>사람을 치료하는 여정에 <br/> 온코크로스와 함께 가실분을 모십니다.</p>
        <div class="openlink">
          <a href="/">채용 중인 공고 보기</a>
        </div>
        <p>채용 관련 문의는 이메일로 문의 주시면 1~3일 이내로 답변을 드립니다. <br/> oncocross@oncocross.com</p>
        <p>온코크로스 공식 홈페이지에 들어오시면 더 많은 소개를 보실 수 있습니다. <br/> https://www.oncocross.com</p>
      </div>
    `;
  }
}

customElements.define("wc-footer", FooterComponent);

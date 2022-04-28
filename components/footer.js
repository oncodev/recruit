export default class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer">
        <p>사람을 치료하는 여정에 <br/> 온코크로스와 함께 가실분을 모십니다.</p>
        <div class="openlink">
          <a href="/recruit/">채용 중인 공고 보기</a>
        </div>
        <a href="mailto:oncocross@oncocross.com"><b>채용 관련 문의</b>는 <u>oncocross@oncocross.com</u> 메일로 문의 주시면 1~3일 이내로 답변을 받으실 수 있습니다.</a>
        <a href="https://www.oncocross.com">온코크로스 <b>공식 홈페이지</b> <u>https://www.oncocross.com</u> 들어오시면 더 많은 소개를 보실 수 있습니다.</a>
      </div>
    `;
  }
}

customElements.define("wc-footer", FooterComponent);

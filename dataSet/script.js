import jsonData from '../dataSet/data.json' assert{type: "json"};

/* 카드 선택해서 데이터 추가하기 ------------------------------- */

const selectCard = document.querySelector('#card');

jsonData.data.map((item)=>{
  const li = document.createElement('li');
  // console.log(li.dataset)
  li.dataset.id = item.id;
  li.innerHTML += `
    <p>Lab<span class="lab">${item.lab}</span></p>
    <p>Position<span class="position">${item.position}</span></p>
    <p>Due<span class="due">${item.due}</span></p>
    <a src=${item.url} onclick="callModal(${item.id});">For more information</a>
    `;
  selectCard.append(li)
});

/* 모달 선택해서 노드 복사해서 넣기 ----------------------------- */

const addModal = document.querySelector('.modal');

function callModal(id) {
  addModal.classList.add('modalActive');

  let clickedCard = selectCard.querySelector(`li[data-id="${id}"]`);
  
  let cloneCard = clickedCard.cloneNode(true);
  cloneCard.classList.add('cloneActive');

  // 카드에 있는 클래스 선택
  let lab = cloneCard.querySelector(".lab");
  let position = cloneCard.querySelector(".position");
  let due = cloneCard.querySelector(".due");
  // let experience = cloneCard.querySelector(".experience");
  // let recruitment = cloneCard.querySelector(".recruitment");
  // let stack = cloneCard.querySelector(".stack");
  // let duty = cloneCard.querySelector(".duty");
  // let requirements = cloneCard.querySelector(".requirements");
  // let preferential = cloneCard.querySelector(".preferential");

  cloneCard.innerHTML = `
    <div class="modal_inner">
      <div class="modal_area">
        <div class="modal_intro">
            <p>Department : ${lab.textContent}</p>
            <p>Position : ${position.textContent}</p>
            <p>Due : ${due.textContent}</p>
            <a href="#">직무 소개 보러가기</a>
        </div>
        <div class="modal_intro">
          <ul>
            <li><p>직무</p><p>Front-End ~ DevOps까지의 플랫폼 설계 및 개발 총괄</p></li>
            <li><p>자격요건</p><p>Back End에 대한 개발 경험이 있으신 분Python 등 언어로 어플리케이션 설계 및 개발 경험이 있으신 분SPA(React, Vue.js 등) 개발 경험이 있으신 분DB 설계 경험이 있으신 분Git을 이용한 코드 형상 관리 및 협업이 가능한 분긍정적이며 자기 주도적인 성장이 가능한 분</p></li>
            <li><p>우대사항</p><p>Front-End 개발 관리 경험이 있으신 분프로젝트의 초기 설계 참여, 개발 및 운영을 해보신 분오픈소스 프로젝트 참여 또는 Contribution 경험 있으신 분스타트업 환경에 이해도가 있으신 분</p></li>
            <!-- <li>직무 : ${jsonData.data.duty}</li>
            <li>자격요건 : ${jsonData.data.requirements}</li>
            <li>우대사항 : ${jsonData.data.preferential}</li> -->
            <li><p>공통 안내사항</p><p>허위로 작성한 경우</p></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="modal_inner">
      <div class="modal_area">
        <ul class="modal_to">
          <div class="modal_intro">
            <span>지원 서류 및 방식</span>
            <button id="close"></button>
          </div>
          <li>
            <p>지원 서류</p>
            <p>CV, 자기소개서(Motivation letter)</p>
          </li>
          <li>
            <p>지원 방식</p>
            <p>E-mail로 제출 recruit@oncocross.com</p>
          </li>
          <li>
            <img src="https://user-images.githubusercontent.com/97486189/180773549-dc293c76-48e9-4a31-9146-08214d20c74d.png" alt="image"/>
            <button>지원하기</button>
          </li>
        </ul>
      </div>
    </div>
  `;
  addModal.appendChild(cloneCard);
  clickedCard.after(addModal);

  return true;
}
window.callModal = callModal;


let closeButton = document.querySelector("#close");
let removeClass = ["modalActive", "cloneActive"]; // 모달창, 클론노드 닫기
let removeModal = addModal.classList.remove(...removeClass);
// let cloneNode = removeModal.removeChild(cloneCard); // 클론 노드창 삭제

addModal.addEventListener('click', (e) => {
  console.log(removeModal);
  e.target === addModal ? removeModal : false
  // cloneNode();
});


  // addModal.addEventListener('click', (e) => {
  //   modalActive.style.display = "none"
  //   // e.target == closeButton ? removeModal : false
  // });
  
  
    // 모달창 클릭 시 - 창 안닫힘
    // else (modalArea)
    // return false
    // addModal.classList.remove('cloneActive'); // 클론노드
    // addModal.removeChild(cloneCard); // 클론 노드창 삭제
    // return true;

  // #close를 클릭 시 - 창 닫힘
  // const closeButton = document.getElementById("close");
  // const modalArea = document.getElementById("inner");
  // const removeModal = callModal.classList.remove(...removeClass);



// window.addEventListener('click', (e) => {
//   e.target === addModal ? addModal.classList.remove('modalActive') : false
// })

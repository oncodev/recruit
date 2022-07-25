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
          <div class="modal_card_text">
            <p>Department : ${lab.textContent}</p>
            <p>Position : ${position.textContent}</p>
            <p>Due : ${due.textContent}</p>
          </div>
          <a href="#">직무 소개 보러가기</a>
        </div>
        <div class="modal_intro">
          <div>경력 : ${jsonData.data.experience}</div>
          <div>모집인원 : ${jsonData.data.recruitment}</div>
          <div>스택 : ${jsonData.data.stack}</div>
          <div>직무 : ${jsonData.data.duty}</div>
          <div>자격요건 : ${jsonData.data.requirements}</div>
          <div>우대사항 : ${jsonData.data.preferential}</div>
        </div>
      </div>
      <div class="modal_area">
        <p>공통 안내사항</p>
        <p>허위로 작성한 경우</p>
      </div>
    </div>
    <div class="modal_inner">
      <p>지원 서류 및 방식</p>
      <div class="modal_area">
        <ul>
          <li>지원 서류</li>
          <li>CV</li>
          <li>자기소개서</li>
        </ul>
        <ul>
          <li>지원 방식</li>
          <li>E-mail로 제출</li>
          <li>oncocross@oncocross.com</li>
        </ul>
      </div>
      <div class="modal_area">
        <img src="https://user-images.githubusercontent.com/97486189/180773549-dc293c76-48e9-4a31-9146-08214d20c74d.png" alt="image"/>
      </div>
    </div>
    <button id="close"></button>
  `;
  addModal.appendChild(cloneCard);
  clickedCard.after(addModal);

  return true;
}
window.callModal = callModal;


let closeButton = document.querySelector("#close");
let removeClass = ["modalActive", "cloneActive"]; // 모달창, 클론노드 닫기
let removeModal = addModal.classList.remove(...removeClass);
let cloneNode = removeModal.removeChild(cloneCard); // 클론 노드창 삭제

addModal.addEventListener('click', (e) => {
  console.log(removeModal);
  e.target === addModal ? removeModal : false
  cloneNode();
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

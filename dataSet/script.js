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
          <div>직무</div>
          <div>자격요건</div>
          <div>우대사항</div>
        </div>
      </div>
      <div class="modal_area">
        <p>공통 안내사항</p>
        <p>허위로 작성한 경우</p>
      </div>
    </div>
    <div class="modal_inner">
      <div class="modal_area"></div>
      <div class="modal_area"></div>
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

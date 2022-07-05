import jsonData from './data.json' assert{type: "json"};

const recruitDataSet = document.querySelector('#card');

jsonData.data.map((i)=>{
  const li = document.createElement('li');
  console.log(li.dataset)
  li.dataset.id = i.id;
  li.innerHTML += `
    <p>Lab<span class="lab">${i.lab}</span></p>
    <p>Position<span class="position">${i.position}</span></p>
    <p>Due<span class="due">${i.due}</span></p>
    <a src=${i.url} onclick="callModal(${i.id});">For more information</a>
  `;
  recruitDataSet.append(li)
});


function callModal(id) {
  console.log('modal', id);

  let addNode = document.querySelector('.modal');
  addNode.classList.add('modalActive');
  
  let clickedCard = recruitDataSet.querySelector(`li[data-id="${id}"]`);
  
  let cardNode = clickedCard.cloneNode(true);
  cardNode.classList.add('cloneActive');
  // cardNode.dataset.id = (parseInt(cardNode.dataset.id) + 100).toString();

  let lab = cardNode.querySelector(".lab");
  let position = cardNode.querySelector(".position");
  let due = cardNode.querySelector(".due");
  cardNode.innerHTML = `
    <div class="inner">
      <div class="area">
        <p>Department : ${lab.textContent}</p>
        <p>Position : ${position.textContent}</p>
        <p>Due : ${due.textContent}</p>
      </div>
      <div class="area">
        <p>공통 안내사항</p>
        <p>허위로 작성한 경우</p>
      </div>
    </div>
    <div class="inner">
      <div class="area"></div>
      <div class="area"></div>
    </div>
    <button id="close"></button>
  `;
  addNode.appendChild(cardNode);
  clickedCard.after(addNode);

  addNode.addEventListener('click', () => { // 현재는 창 자체를 클릭하면 닫히는데 -> close를 클릭 시 창이 닫히도록 해야함
    addNode.classList.remove('modalActive'); // 모달창 닫기
    addNode.classList.remove('cloneActive'); // 클론노드
    addNode.removeChild(cardNode); // 클론 노드창 삭제
  });

  return true;
}
window.callModal = callModal;

// window.addEventListener('click', (e) => {
//   e.target === addNode ? addNode.classList.remove('modalActive') : false
// })

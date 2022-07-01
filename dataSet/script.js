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
  cardNode.dataset.id = (parseInt(cardNode.dataset.id) + 100).toString();

  let lab = cardNode.querySelector(".lab");
  let position = cardNode.querySelector(".position");
  let due = cardNode.querySelector(".due");
  cardNode.innerHTML = `
    <div class="inner">
      <div>${lab.textContent}</div>
      <div>${position.textContent}</div>
      <div>${due.textContent}</div>
    </div>
    <div class="inner">
      <div>1</div>
      <div>2</div>
    </div>
  `;
  addNode.appendChild(cardNode);
  clickedCard.after(addNode);

  return true;
}
window.callModal = callModal;

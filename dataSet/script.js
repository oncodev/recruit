// import data from './data.json' assert{type: "json"};

const jsonData = JSON.parse(
`{
  "data": [
    {"id": "1", "lab": "AI 연구소", "position": "Data analyst", "due": "2022. 01. 01", "stack": "원하는 스택과 경험 1", "url": "/"},
    {"id": "2", "lab": "AI 연구소", "position": "Data analyst", "due": "2022. 01. 01", "stack": "원하는 스택과 경험 2", "url": "/"},
    {"id": "3", "lab": "AI 연구소", "position": "Data analyst", "due": "2022. 01. 01", "stack": "원하는 스택과 경험 3", "url": "/"},
    {"id": "4", "lab": "바이오 연구소", "position": "Bioinfomatics", "due": "2022. 01. 01", "stack": "원하는 스택과 경험 4", "url": "/"},
    {"id": "5", "lab": "바이오 연구소", "position": "Bioinfomatics", "due": "2022. 01. 01", "stack": "원하는 스택과 경험 5", "url": "/"},
    {"id": "6", "lab": "바이오 연구소", "position": "Bioinfomatics", "due": "2022. 01. 01", "stack": "원하는 스택과 경험 6", "url": "/"}
  ]
}`);

const recruitDataSet = document.querySelector('#card');
// const recruitDataSet = document.querySelector('#recruitData');
// const fragment = document.createDocumentFragment();
// const card = document.createElement('div');

jsonData.data.map((i)=>{
  const li = document.createElement('li');
  // li.textContent
  // += "<p>" + i.id + "</p>"
  // + "<p>" + i.lab + "</p>"
  // + "<p>" + i.position + "</p>"
  // + "<p>" + i.stack + "</p>";
  // + "<a src=\""+i.url+"\">button</a>";
  li.innerHTML += `
    <p>${i.id}</p>
    <p>${i.lab}</p>
    <p>${i.position}</p>
    <p>${i.stack}</p>
    <a src=${i.url}>button</a>
  `;
  recruitDataSet.append(li)
});

// card.append(fragment);
// recruitDataSet.append(card);

// fragment 참고 : https://blogpack.tistory.com/671


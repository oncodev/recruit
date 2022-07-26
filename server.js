import fetch from "node-fetch";
import dotenv from 'dotenv';
import { fstat, writeFileSync } from "fs";

// 키는 .env에 저장해서 읽도록 해볼께요.
// npm i dotenv

dotenv.config()

console.log(process.env.NOTION_API_KEY)

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = process.env.DATABASE_ID;
const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${NOTION_API_KEY}`,
    'Notion-Version': '2022-02-22',
  },
})

const data = await res.json()
/*
Response schema:
  {
    results: [
      {
        properties: {
          COLUMN 이름: {
            type: rich_text or title or etc...
            plain_text: 실제 값
          }
        }
      },
      ...
    ]
  }

Notion API 결과값에서 실제 key와 값을 추출한다.
*/
/*
url, due 이런 분류가 컬럼이에요. 컬럼 값들의 모임을.. DB에서는 레코드라고 하는데 그냥 레코드라고 쓸까요? 네에!
*/
// results키의 값은 Database의 레코드(=row)의 배열이므로 순회하면서 각 레코드의 컬럼 값을 추출한다.
let values = data.results.map((row) => {
  // 레코드의 properties에 각 column들이 Object 형태로 들어가있다. 키가 컬럼 이름, 값에는 컬럼의 타입과 값이 들어가 있음.
  // Notion API 결과 형태는 바로 쓰기 불편하니 '컬림이름: 값' 형태로 단순하게 변경.
  const extracted = Object.entries(row.properties).map(([k, v]) => {
    // 각 값들은 type 형태에 따라 type이름의 키에 object로 서식이나 값들이 들어가있음.
    // 우선 서식은 고려하지 않고 순수 텍스트만 가져온다.
    if (v.type == "rich_text") {
      // 빈값이 들어오는 경우가 있으므로 예외처리
      if (v.rich_text.length == 0) {
        return {}
      }
      // 컬림이름: plain_text 형태로 반환시킨다. 
      return { 
        [k]: v.rich_text[0].plain_text 
      }
    }
    else if (v.type == "title") {
      if (v.title.length == 0) {
        return {}
      }
      return { [k]: v.title[0].plain_text } 
    }
    else {
      throw new Error('Unknown type', v.type)
    }
  })

  /*
  extracted는 다음처럼로 반환됨. 이것을 하나의 object로 합치자.
  [
    { 컬럼이름1: 값 }
    { 컬럼이름2: 값 }
    { 컬럼이름3: 값 }
  ]
  */

  /*
  빈 object를 만들고 이 object에 extracted의 값들을 assign 하면 하나의 object로 합쳐짐.
  ex)
  const ret = {}
  Object.assign(ret, {a: 1})
  Object.assign(ret, {b: 2})

  ret -> {a: 1, b: 2}
  */
  
  const ret = {}
  extracted.forEach((v) => {
    Object.assign(ret, v)
  })
  return ret;
})

// 위에서 빈값을 반환하는 경우가 있으니 key가 하나도 없는건 filter로 제외시킴
values = values.filter(v => Object.keys(v).length != 0)
// 원래 data.json은 { data: [값들] } 의 형태니 맞춰준다.
values = {
  data: values
}

console.dir(values, { depth: null, colors: true })

// 파일에 처리 결과를 쓴다.
// 4 -> space 4칸으로 포맷팅해서 보여줌
writeFileSync("test.json", JSON.stringify(values, null, 4))

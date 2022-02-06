import * as React from "react";
import { useEffect, useState } from 'react';
import ReactDOM from "react-dom";

const Content = () => {
  const [path, setPath] = useState(window.location.pathname)
  const [list, setList] = useState(null);
  const idName = "t-account-picker";

  // hooksが反応しないので無理やり動かす
  setInterval(() => {
    if (window.location.pathname === path) return;
    setPath(window.location.pathname);
  }, 500);

  useEffect(() => {
    const style: any = document.querySelector('#' + idName);
    if (style !== null) {
      style.textContent = '';
    }
    rewrite(list)
  }, [path]);

  const rewrite = (value: any) => {
    if (value === null) return;

    let content: any = document.querySelector('[data-testid="UserName"]');
  
    if (content == null) return;
  
    let userDom: any = content.querySelector('[dir="ltr"]');
  
    if (userDom == null) return;
  
    let klassNameA: string = '';
    for (let i = 0; i < userDom.classList.length; i++) {
      klassNameA += '.' + userDom.classList[i];
    }
  
    if (klassNameA === '') return;
  
    userDom = userDom.querySelector('span');
  
    if (userDom == null) return;
  
    let klassNameB: string = '';
    for (let i = 0; i < userDom.classList.length; i++) {
      klassNameB += '.' + userDom.classList[i];
    }
  
    if (klassNameB === '') return;
    
    const styleDom = document.querySelector('#' + idName) ?? document.createElement("style");
  
    styleDom.setAttribute("id", idName);

    value.whiteList.forEach((name: string) => {
      if (-1 < name.indexOf(userDom.textContent)) {
        styleDom.textContent = `
          div[data-testid="UserName"] > div > div > div > div${klassNameA} > span${klassNameB} {
            color: lime;
            font-size: 1.2em;
            font-weight: bold;
            line-height: 160%;
          }
          div[data-testid="UserName"] > div > div > div > div${klassNameA} > span${klassNameB}:before {
            content: '【★ホワイトリスト】';
          }
        `;
        content.prepend(styleDom);
        return;
      }
    });

    value.blackList.forEach((name: string) => {
      if (-1 < name.indexOf(userDom.textContent)) {
        styleDom.textContent = `
          div[data-testid="UserName"] > div > div > div > div${klassNameA} > span${klassNameB} {
            color: red;
            font-size: 1.2em;
            font-weight: bold;
            line-height: 160%;
          }
          div[data-testid="UserName"] > div > div > div > div${klassNameA} > span${klassNameB}:before {
            content: '【ブラックリスト】';
          }
        `;
        content.prepend(styleDom);
        return;
      }
    });

    value.uncheckedList.forEach((name: string) => {
      if (-1 < name.indexOf(userDom.textContent)) {
        styleDom.textContent = `
          div[data-testid="UserName"] > div > div > div > div${klassNameA} > span${klassNameB} {
            color: yellow;
            font-size: 1.2em;
            font-weight: bold;
            line-height: 160%;
          }
          div[data-testid="UserName"] > div > div > div > div${klassNameA} > span${klassNameB}:before {
            content: '【確認待ち】';
          }
        `;
        content.prepend(styleDom);
        return;
      }
    });
  }

  chrome.runtime.onMessage.addListener((value: any) => {
    setList(value);
    rewrite(value);
  });

  return <div>test</div>;
}

const ROOT_DOM_NAME = "t-account-picker-root";
const rootDom = document.createElement("div");

rootDom.setAttribute("id", ROOT_DOM_NAME);
document.body.append(rootDom);

ReactDOM.render(<Content />, document.getElementById(ROOT_DOM_NAME));

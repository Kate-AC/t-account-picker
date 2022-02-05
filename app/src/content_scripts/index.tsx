import * as React from "react";

let isReceived = false;
chrome.runtime.onMessage.addListener((value: any) => {
  if (isReceived) return;

  let content: any = document.querySelector('[data-testid="UserName"]');

  if (content == null) return;

  let userName: any = content.querySelector('[dir="ltr"]');

  if (userName == null) return;

  let found = false;

  value.whiteList.forEach((name: string) => {
    if (name === userName.textContent) {
      userName.style.color = 'white';
      userName.style.textShadow = '0 0 4px rgba(255,255,255,0.8)';
      userName.textContent = '★' + userName.textContent;
      found = true;
      return;
    }
  });

  value.blackList.forEach((name: string) => {
    if (name === userName.textContent) {
      userName.style.color = 'red';
      userName.textContent = '【ブラックリスト】' + userName.textContent;
      found = true;
      return;
    }
  });

  value.uncheckedList.forEach((name: string) => {
    if (name === userName.textContent) {
      userName.style.color = 'yellow';
      userName.textContent = '【未確認】' + userName.textContent;
      found = true;
      return;
    }
  });

  if (found) {
    userName.style.fontSize = '1.2em';
    userName.style.fontWeight = 'bold';
    userName.style.marginTop = '10px';
  }

  isReceived = true;
});



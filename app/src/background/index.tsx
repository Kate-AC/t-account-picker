import axios from "axios";

chrome.runtime.onInstalled.addListener(() => main());
chrome.runtime.onStartup.addListener(() => main());

const main = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, loadSpreadSheet);

  setInterval(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, loadSpreadSheet);
  }, 1000 * 180);

  setInterval(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, sendList);
  }, 500);
}

const sendList = (tabs: any) => {
  chrome.storage.sync.get(['list'], (value: any) => {
    if (0 === Object.entries(value).length) return;

    chrome.tabs.sendMessage(tabs[0].id, value.list);
  });
}

type ModeType = 'none' | 'white' | 'black' | 'unchecked';

let mode: ModeType = 'none';

const switchMode = (row: string) => {
  switch (true) {
    case -1 < row.indexOf('ホワイトリスト'):
      mode = 'white';
      break;
    case -1 < row.indexOf('ブラックリスト'):
      mode = 'black';
      break;
    case -1 < row.indexOf('確認リスト'):
      mode = 'unchecked';
      break;
  }
}

const loadSpreadSheet = async () => {
  try {
    const whiteList: string[] = [];
    const blackList: string[] = [];
    const uncheckedList: string[] = [];

    const sheet = await axios.get('https://docs.google.com/spreadsheets/d/10bUPSUuBUdQEnBpwACFODaRwIn8VTSamRUPSMEm5RWU/export?format=csv&gid=0')
      .then(response => {
        const { data } = response;
        return data;
      })
      .catch((error: any) => {
        console.log(error);
      });

    const rows: string[] = sheet.split('\n');

    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      switchMode(row);
      if (mode === 'white' && -1 < row.indexOf('@')) {
        whiteList.push(row.split(',')[3].replace('"', '').replace('"', ''));
      }

      if (mode === 'black' && -1 < row.indexOf('@')) {
        blackList.push(row.split(',')[3].replace('"', '').replace('"', ''));
      }

      if (mode === 'unchecked' && -1 < row.indexOf('@')) {
        uncheckedList.push(row.split(',')[3].replace('"', '').replace('"', ''));
      }
    }

    const list = {
      'whiteList': whiteList,
      'blackList': blackList,
      'uncheckedList': uncheckedList
    }

    chrome.storage.sync.set({'list': list }, () => console.log('Updated list.'));
  } catch (e: any) {
    console.log(`Error: ${e.message}`);
  }
};

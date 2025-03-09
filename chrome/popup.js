document.getElementById('exportTab').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.runtime.sendMessage({ action: 'exportTab', tab: tabs[0] });
  });
});

document.getElementById('exportWindow').addEventListener('click', () => {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    chrome.runtime.sendMessage({ action: 'exportWindow', tabs: tabs });
  });
});

document.getElementById('exportAllWindows').addEventListener('click', () => {
  chrome.windows.getAll({ populate: true }, (windows) => {
    chrome.runtime.sendMessage({ action: 'exportAllWindows', windows: windows });
  });
});
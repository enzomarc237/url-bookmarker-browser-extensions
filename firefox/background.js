browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: 'exportTab',
    title: 'Export Tab',
    contexts: ['page'],
  });

  browser.contextMenus.create({
    id: 'exportWindow',
    title: 'Export Window',
    contexts: ['page'],
  });

  browser.contextMenus.create({
    id: 'exportAllWindows',
    title: 'Export All Windows',
    contexts: ['page'],
  });
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'exportTab') {
    exportTab(tab);
  } else if (info.menuItemId === 'exportWindow') {
    exportWindow(tab);
  } else if (info.menuItemId === 'exportAllWindows') {
    exportAllWindows();
  }
});

function exportTab(tab) {
  // TODO: Export tab
}

function exportWindow(tab) {
  // TODO: Export window
}

function exportAllWindows() {
  // TODO: Export all windows
}
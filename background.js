chrome.action.onClickedAddListener(tab) => {
  chrome.scripting.executeScript({target: { tabId: tab.id },
    files: ["content.js"]
  });
});

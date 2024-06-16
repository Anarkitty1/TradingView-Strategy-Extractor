chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
  if (message.action === 'strategyData') {
    let dataDiv = document.getElementById('data');
    dataDiv.innerHTML = JSON.stringify(message.data, null, 2);
  }
});

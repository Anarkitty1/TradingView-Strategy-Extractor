function extractStrategyData() {
  let strategyData = [];

  // Locate and extract the strategy properties and inputs
  // The exact selectors will depend on TradingView's page structure
  document.querySelectorAll('.strategy-property-selector').forEach(element => {
    let property = {
      name: element.querySelector('.property-name').innerText,
      value: element.querySelector('.property-value').innerText
    };
    strategyData.push(property);
  });

  console.log(strategyData);
  chrome.runtime.sendMessage({ action: 'strategyData',
    data: strategyData
  });
}

extractStrategyData();

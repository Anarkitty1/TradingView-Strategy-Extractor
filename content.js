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
  return strategyData;
}

 // Execute the function and send data to background or popup
let data = extractStrategyData();
export default data;

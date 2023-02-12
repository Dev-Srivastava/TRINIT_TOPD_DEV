async function getWebsiteData() {
  const getCurrentTab = () => new Promise(resolve => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      resolve(tabs[0].url);
    });
  });

  const url = await getCurrentTab();
  const apiEndpoint = `https://api.websitecarbon.com/site?url=www.instagram.com`;
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    document.querySelector('#bytes').innerHTML = data.bytes + ' B';
    document.querySelector('#carbon').innerHTML = data.statistics.co2.grid.grams + ' gCO2';
    // console.log(apiEndpoint);
  } catch (error) {
    console.error(error);
    document.querySelector('#bytes').innerHTML = 'Error';
    document.querySelector('#carbon').innerHTML = 'Error';
  }
}

getWebsiteData();

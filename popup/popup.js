fetch('https://api.websitecarbon.com/v1/?url=' + window.location.href)
  .then(response => response.json())
  .then(data => {
    document.querySelector('#bytes').innerHTML = data.bytes + ' B';
    document.querySelector('#carbon').innerHTML = data.carbon + ' gCO2';
  });

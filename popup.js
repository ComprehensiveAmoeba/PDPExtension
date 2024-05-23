document.getElementById('open-btn').addEventListener('click', function() {
  const asin = document.getElementById('asin').value.trim();
  const marketplace = document.getElementById('marketplace').value;

  if (asin) {
    const url = `https://www.amazon.${marketplace}/dp/${asin}`;
    chrome.tabs.create({ url });
  } else {
    alert('Please enter a valid ASIN.');
  }
});

const rowListEl = document.getElementById('rowList')





let DATA = []

async function getData(url) {
    const response = await fetch(url)
    console.log(response)
    DATA = await response.json()
    renderRows(DATA.world, rowListEl)
    console.log(DATA)
}


getData(`https://api-covid19.rnbo.gov.ua/data?to=${new Date().toJSON().split('T')[0]}`)


function renderRows(data_array, node) {
    let html = ''
  
    data_array.forEach(el => html += createRowHTML(el));
  
    node.innerHTML = html
  }
  
function createRowHTML(card_data) {
    return `<div class="cards d-flex justify-content-between p-3 fs-4">
    <div class="country">${card_data.country}</div>
    <div class="confirmed">${card_data.confirmed}</div>
    <div class="deaths">${card_data.deaths}</div>
    <div class="recovered">${card_data.recovered}</div>
    <div class="existing">${card_data.existing}</div>
</div>`
}
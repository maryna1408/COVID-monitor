const rowListEl = document.getElementById('rowList')
const globalNumConfirmedEl = document.getElementById('globalNumConfirmed')




let DATA = []
let confirmed = []

async function getData(url) {
    const response = await fetch(url)
    console.log(response)
    DATA = await response.json()
    renderRows(DATA.world, rowListEl)
    DATA.world.forEach( el => {
        confirmed.push(el.confirmed)
    }) 
    globalNumConfirmedEl.textContent = confirmed.reduce((total, amount) => total + amount)
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
    <div class="country w-100">${card_data.country}</div>
    <div class="confirmed w-100">${card_data.confirmed}</div>
    <div class="deaths w-100">${card_data.deaths}</div>
    <div class="recovered w-100">${card_data.recovered}</div>
    <div class="existing w-100">${card_data.existing}</div>
</div>`
}





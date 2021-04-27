const rowListEl = document.getElementById('rowList')
const globalNumConfirmedEl = document.getElementById('globalNumConfirmed')
const globalNumDeathsEl = document.getElementById('globalNumDeaths')
const globalNumRecoveredEl = document.getElementById('globalNumRecovered')
const globalNumExistingEl = document.getElementById('globalNumExisting')



let DATA = []

async function getData(url) {
    const response = await fetch(url)
    console.log(response)
    DATA = await response.json()
    renderRows(DATA.world, rowListEl)
    let confirmed = []
    let deaths = []
    let recovered = []
    let existing = []
    DATA.world.forEach( el => {
        confirmed.push(el.confirmed), 
        deaths.push(el.deaths), 
        recovered.push(el.recovered), 
        existing.push(el.existing)
    }) 
    globalNumConfirmedEl.textContent = confirmed.reduce((total, amount) => total + amount)
    globalNumDeathsEl.textContent = deaths.reduce((total, amount) => total + amount)
    globalNumRecoveredEl.textContent = recovered.reduce((total, amount) => total + amount)
    globalNumExistingEl.textContent = existing.reduce((total, amount) => total + amount)
    console.log(DATA)
}


getData(`https://api-covid19.rnbo.gov.ua/data?to=${new Date().toJSON().split('T')[0]}`)


function renderRows(data_array, node) {
    let html = ''
  
    data_array.forEach(el => html += createRowHTML(el));

  
    node.innerHTML = html
  }
  
function createRowHTML(card_data) {
    return `<div class="cards d-flex justify-content-between  text-center py-3 fs-4">
    <div class="country w-100 text-start">${card_data.country}</div>
    <div class="confirmed w-100">${card_data.confirmed}</div>
    <div class="deaths w-100">${card_data.deaths}</div>
    <div class="recovered w-100">${card_data.recovered}</div>
    <div class="existing w-100">${card_data.existing}</div>
</div>`
}





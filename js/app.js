const rowListEl = document.getElementById('rowList')
const globalNumEl = document.getElementById('globalNum')


let DATA = []

async function getData(url) {
    const response = await fetch(url)
    console.log(response)
    DATA = await response.json()
    renderRows(DATA.world, rowListEl)
    let globalNums = {
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        existing: 0
    }
    DATA.world.forEach(el => {
        globalNums = {
            confirmed: globalNums.confirmed + el.confirmed,
            deaths: globalNums.deaths + el.deaths,
            recovered: globalNums.recovered + el.recovered,
            existing: globalNums.existing + el.existing
        }
    })
    console.log(DATA)
    renderNums(globalNums)
}

getData(`https://api-covid19.rnbo.gov.ua/data?to=${new Date().toJSON().split('T')[0]}`)


function renderNums(data) {
    globalNumEl.innerHTML = `<div class="globalNumSection w-100">Confirmed: <span>${data.confirmed}</span> </div>
    <div class="globalNumSection w-100">Deaths: <span>${data.deaths}</span> </div>
    <div class="globalNumSection w-100">Recovered: <span>${data.recovered}</span> </div>
    <div class="globalNumSection w-100">Existing: <span>${data.existing}</span> </div>`
}


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





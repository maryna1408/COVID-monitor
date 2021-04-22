const cardListEl = document.getElementById('cardList')





let DATA = []

async function getData(url) {
    const response = await fetch(url)
    console.log(response)
    DATA = await response.json()
    renderCards(DATA, cardListEl)
    console.log(DATA)
}

getData('https://api-covid19.rnbo.gov.ua/data?to=2021-04-19')


function renderCards(data_array, node) {
    let html = ''
  
    data_array.forEach(el => html += createCardHTML(el));
  
    node.innerHTML = html
  }
  
function createCardHTML(card_data) {
    return `<div class="card h-25">
    <div class="country"></div>
    <div class="confirmed"></div>
    <div class="deaths"></div>
    <div class="recovered"></div>
    <div class="existing"></div>
</div>`
}
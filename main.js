class character {
  constructor(name, image, species) {
      this.name = name
      this.image = image
      this.species = species
  }

  get show() {
    return `
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="${this.image}" alt="image ${this.name}">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${this.name}</div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#${this.species}</span>
        </div>
      </div>
    `;
  }
}


// get character from rick and morty api
const getCharacter = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await response.json()
    return data
}

getCharacter().then(data => {
    data.results.forEach(result => {
        let chart = new character(result.name, result.image, result.species)
        document.getElementById('app').innerHTML += chart.show
    })
})

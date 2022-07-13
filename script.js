const SUPERHERO_TOKEN = '10223569763528853'

const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newHeroButton = document.getElementById('newHeroButton')

const searchButton = document.getElementById('searchButton')

const searchInput = document.getElementById('searchInput')


const heroImageDiv = document.getElementById('heroImage')



//FUNCTIONS
const getSuperHero = (id, name) => {

  fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json => {

     console.log(json.powerstats)
    const superHero = json
    showHeroInfo(superHero)
   
    
    
    })
  
}

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡️',
  durability: '🪨',
  power: '🔋',
  combat: '⚔️'
}

const showHeroInfo = (character) => {

  const name = `<h2>${character.name}</h2>`

  const img = `<img src ="${character.image.url}" height=200 width=200 />`
  
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`}).join('')

  //sconsole.log(stats.join(''))

heroImageDiv.innerHTML = `${name}${img}${stats}`
  

  
}


const getSearchSuperhero = (name) => {

  console.log(searchInput.value)
  fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json => {

    
     const hero = json.results[0]
     
     
    showHeroInfo(hero)
    
 
    
    })
  
}



const randomHero = () => {

  const numberOfHeroes = 731

  console.log(Math.floor(Math.random() * numberOfHeroes) + 1)
  
  return Math.floor(Math.random() * numberOfHeroes) + 1
  
} 


//CALL FUNCTIONS ON CLICK
newHeroButton.onclick = () => getSuperHero(randomHero())

searchButton.onclick = () => getSearchSuperhero(searchInput.value)



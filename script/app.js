const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')

const form = document.querySelector('.form')
const input = document.querySelector('.input__search')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

//-- Funções de tratamento e render --

const fetchPokemon = async(pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIresponse.status == 200) {

    const data = await APIresponse.json();
    return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Loading...'
    

    data = await fetchPokemon(pokemon);


if (data) {
        pokemonImage.style.display = 'block'
        pokemonName.innerHTML = data.name 
        pokemonNumber.innerHTML = data.id
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value =''
        pokemonSearch = data.id
    }
    else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found. :(';
        pokemonNumber.innerHTML = '';
        input.value =''
    }

    
}
// -- configurações dos botões --
form.addEventListener ('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase())
    
})

let pokemonSearch = 1;

btnNext.addEventListener ('click', () => {

    pokemonSearch += 1
    renderPokemon(pokemonSearch)
})

btnPrev.addEventListener ('click', () => {
    if (pokemonSearch > 1) {
   
    pokemonSearch -= 1
    renderPokemon(pokemonSearch)
}
})

renderPokemon('25')
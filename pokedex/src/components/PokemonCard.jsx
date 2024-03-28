function PokemonCard() {
    let pokemon = pokemonList[0]
    return (
      <div>
        <figure>
            {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt={pokemon.name}/>: <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
    );
};


const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Mew",
    },
  ];

export default PokemonCard;
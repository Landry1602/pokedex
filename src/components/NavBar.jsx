function NavBar({pokemonList, handleClick}) {
    return (
        
        <div>
        {pokemonList.map((pokemon, index) => (
            <button key={pokemon.name} onClick={() => pokemon.name === "pikachu" ? (alert("Pika pikachuuu !!"), handleClick(index)) : handleClick(index)}>
               {pokemon.name}
            </button>
                 ))}
        </div> 
    )}

export default NavBar;
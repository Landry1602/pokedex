function NavBar({pokemonIndex, handleClickNext, handleClickPrev, pokemonList}) {
    return (
        <div>
            {pokemonIndex > 0 ? <button onClick={handleClickPrev}>Précédent</button> : <button onClick={handleClickPrev} hidden>Précédent</button>}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Suivant</button> : <button onClick={handleClickNext} hidden>Suivant</button>}
        </div> 
    )
}

export default NavBar;
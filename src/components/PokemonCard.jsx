import PropTypes from 'prop-types';

function PokemonCard({pokemon}) {
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired, 
      imgSrc: PropTypes.string,
    }).isRequired,
  }
  return (
    <div>
      <figure>
          {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt={pokemon.name}/>: <p>???</p>}
          <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
};



export default PokemonCard;
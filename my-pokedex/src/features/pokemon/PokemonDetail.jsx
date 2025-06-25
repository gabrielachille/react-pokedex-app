import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPokemonByName } from './PokemonAPI';

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemonByName(name).then(data => {
      setPokemon(data);
      setLoading(false);
    });
  }, [name]);

  if (loading) return <p>Loading details...</p>;
  if (!pokemon) return <p>Not found.</p>;

  return (
    <div>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
}

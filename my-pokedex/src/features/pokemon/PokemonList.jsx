import { useEffect, useState } from 'react';
import { fetchPokemonList } from './PokemonAPI';
import PokemonCard from '../../components/PokemonCard';
import { Link } from 'react-router-dom';

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemonList().then(data => {
      setPokemon(data.results);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="pokemon-list">
      {pokemon.map(p => (
        <Link to={`/pokemon/${p.name}`} key={p.name}>
          <PokemonCard name={p.name} />
        </Link>
      ))}
    </div>
  );
}

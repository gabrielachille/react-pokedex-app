import { POKE_API } from '../../config';

export async function fetchPokemonList(limit = 190, offset = 0) {
  const res = await fetch(`${POKE_API}/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon');
  return res.json();
}

export async function fetchPokemonByName(name) {
  const res = await fetch(`${POKE_API}/pokemon/${name}`);
  if (!res.ok) throw new Error('Pokémon not found');
  return res.json();
}

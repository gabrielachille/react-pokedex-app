export default function PokemonCard({ name }) {
  return (
    <div className="pokemon-card">
      <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
    </div>
  );
}

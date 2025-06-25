import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PokemonDetail from '../features/pokemon/PokemonDetail';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
}

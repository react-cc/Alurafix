
import Formulario from './components/Formulario';
import Inicio from './pages/Inicio';
import PaginaBase from './pages/PaginaBase';    
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function AppRoutes() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<PaginaBase />}>
        <Route index element={<Inicio />}></Route>
        <Route path="favoritos" element={<Formulario />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
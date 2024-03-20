import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { ShowProductos } from './componentes/ShowProductos';
import { CreateProducto } from './componentes/CreateProducto';
import { EditProducto } from './componentes/EditProducto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>

        <Route path='/' element={<ShowProductos/>} />
        <Route path='/create' element={<CreateProducto/>}/>
        <Route path='/edit/:id' element={<EditProducto/>}/>

       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

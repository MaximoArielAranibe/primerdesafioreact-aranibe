import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListcontainer.jsx';
import ItemList from './Components/ItemList/ItemList.jsx';
import { Link, Routes, Route } from 'react-router-dom';
import { Suplementos } from './pages/Suplementos';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path='/suplementos' element={<Suplementos />} />
        </Route>
      </Routes>
      <NavBar />

      <ItemListContainer>
        <ItemList></ItemList>
      </ItemListContainer>
    </div>
  );
}

export default App;

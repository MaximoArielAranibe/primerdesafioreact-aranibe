import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListcontainer.jsx';
import ItemList from './Components/ItemList/ItemList.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer>
        <ItemList></ItemList>
      </ItemListContainer>
    </div>
  );
}

export default App;

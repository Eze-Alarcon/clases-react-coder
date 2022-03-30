import './App.css';
import { Navbar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemCount } from './components/ItemCount'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Hola Mundo!"/>
      <ItemCount></ItemCount>
    </div>
  );
}


export default App;

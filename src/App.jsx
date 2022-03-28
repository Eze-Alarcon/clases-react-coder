import './App.css';
import { Navbar } from './Components/NavBar/NavBar'
import { ItemListContainer } from './Pages/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Hola Mundo!"/>
    </div>
  );
}


export default App;

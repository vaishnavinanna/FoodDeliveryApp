import './App.css';
import Navbar from './components/Navbar';
import BgContainer from './components/BgContainer'
import Menu from './components/Menu';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BgContainer/>
      <Categories/>
      <Menu/>
    </div>
  );
}

export default App;

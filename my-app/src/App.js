import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import DataSong from './Components/DataSong';
import ListSong from './Components/ListSong';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className='grid grid-cols-3 bg-slate-400 h-screen-navbar-player'>
            <DataSong/>
            <ListSong/>
        </div>
    </div>
  );
}

export default App;

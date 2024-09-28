import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AppHeader from './components/AppHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';


function App() {
  return (
    <div >
      <Search/>

      <AppHeader/>
       {/* <Home/> */}
    </div>
  );
}

export default App;

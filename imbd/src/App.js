
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Movies from "./components/Movies"
import Pagination from './components/Pagination';


function App() {
  return (
    <>
    <h1> Hello Sukanya</h1>
    <NavBar>test</NavBar>
    <Banner></Banner>
    <Movies></Movies>
    <Pagination></Pagination>
    {/* NavBar
    * Banner
    * Movies
  * pagination  **/ }
    </>
  );
}

export default App;

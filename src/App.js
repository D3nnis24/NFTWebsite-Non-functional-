import './App.css';
import NFTCarousel from './Components/NFTCarousel/NFTCarousel';
import NFTSocials from "./Components/NFTSocials/NFTSocials";
import NavBar from './Components/NFTNavBar/NFTNavBar';

function App() {
  return (
    <div>
      <NFTCarousel /> 
      <NFTSocials />
      <NavBar />
    </div>
  );
}

export default App;

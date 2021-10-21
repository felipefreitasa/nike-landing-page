import Banner from "./Components/Banner/Banner";
import './App.scss'
import AirForce from "./Components/AirForce/AirForce";
import Navbar from "./Components/Navbar/Navbar";
import SidebarRight from "./Components/SidebarRight/SidebarRight";
import Footer from './Components/Footer/Footer'
import Content from "./Components/Content/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SidebarRight />
      <Banner>
        <Content />
        <AirForce />
      </Banner>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <HeroComponent />
      {/* Add your routes here later */}
    </Router>
  );
}

export default App;

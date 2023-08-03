import "./App.css";
import { Carousel } from "./Components/Carousel";

import { slides } from "./Data/carrouselData.json";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Carousel data={slides} />
      </div>
    </div>
  );
}

export default App;

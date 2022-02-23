import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChoicePage from "./ChoicePage/ChoicePage";
import HomePage from "./HomePage/HomePage";

function App() {

  const [imagesNames, setImagesNames]= useState<String[]>([])
  return (
    <div className="App h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setImagesNames={setImagesNames}
                imagesNames={imagesNames}
              />
            }
          />
          {/* <Route path="/result" element={<Result />} /> */}
          <Route
            path="/choice"
            element={<ChoicePage imagesNames={imagesNames} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

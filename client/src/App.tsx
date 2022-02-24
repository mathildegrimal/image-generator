import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChoicePage from "./ChoicePage/ChoicePage";
import HomePage from "./HomePage/HomePage";
import Result from "./Result/Result";

function App() {
   const [linkSource, setLinkSource] = useState("");

  const [imagesNames, setImagesNames]= useState<String[]>([])
  return (
    <div className="App h-screen w-screen justify-center">
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
            element={<ChoicePage setLinkSource={setLinkSource} imagesNames={imagesNames} />}
          />
          <Route path="/result" element={<Result linkSource={linkSource} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

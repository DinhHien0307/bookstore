import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./screens/Home";
import ProductPage from "./screens/ProductPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/books/1" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

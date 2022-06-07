import './App.css';
import Index from "./screens/Home";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Company from "./screens/Company";
import Details from "./screens/Details";
import Contact from "./screens/Contact";
import NewReleases from "./screens/NewReleases";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="books">
              <Route path=":slug" element={<Details />} />
          </Route>
          <Route path="company" element={<Company />} />
          <Route path="contact" element={<Contact />} />
          <Route path="newreleases" element={<NewReleases />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

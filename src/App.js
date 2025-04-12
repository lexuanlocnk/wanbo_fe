import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

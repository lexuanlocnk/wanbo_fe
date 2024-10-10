import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import đúng cách
import DefaultLayout from "./Layout/DefaultLayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import đúng cách
import DefaultLayout from "./Layout/DefaultLayout";

function App() {
  return (
    <div>
      {/* Sử dụng BrowserRouter để bao bọc các Routes */}
      <Router>
        {/* Đảm bảo Routes bao quanh các Route */}
        <Routes>
          {/* Route cho path "/" và element là DefaultLayout */}
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

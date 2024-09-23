import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/Login";
import LandingPage from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;

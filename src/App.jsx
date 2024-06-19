import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SubmitRecipe from "./pages/SubmitRecipe.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/submit-recipe" element={<SubmitRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;

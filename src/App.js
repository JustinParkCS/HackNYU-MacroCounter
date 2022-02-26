import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="h-full w-full">
          <Routes>
            <Route exact path="/" element={<Landing />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

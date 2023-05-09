import { useState } from "react";
import Sidebarcomp from "./components/Sidebar/Sidebarcomp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeHomePages from "./Pages/WelcomeHomePages/WelcomeHomePages";
import MoviePages from "./Pages/MoviePages/MoviePages";
import SeriesPages from "./Pages/SeriesPages/SeriesPages";

function App() {
  const [isExpanded, setExpandState] = useState(false);

  return (
    <Router>
      <Sidebarcomp isExpanded={isExpanded} setExpandState={setExpandState} />
      {isExpanded ? (
        <div style={{ marginLeft: "300px"}}>
          <Routes>
            <Route path="/" exact element={<WelcomeHomePages />} />
            <Route path="/movie" exact element={<MoviePages />} />
            <Route path="/series" exact element={<SeriesPages />} />
          </Routes>
        </div>
      ) : (
        <div style={{ marginLeft: "40px" }}>
          <Routes>
            <Route path="/" exact element={<WelcomeHomePages />} />
            <Route path="/movie" exact element={<MoviePages />} />
            <Route path="/series" exact element={<SeriesPages />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;

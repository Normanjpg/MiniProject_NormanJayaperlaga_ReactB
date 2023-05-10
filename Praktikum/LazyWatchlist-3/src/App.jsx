import { useState } from "react";
import Sidebarcomp from "./components/Sidebar/Sidebarcomp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeHomePages from "./Pages/WelcomeHomePages/WelcomeHomePages";
import MoviePages from "./Pages/MoviePages/MoviePages";
import SeriesPages from "./Pages/SeriesPages/SeriesPages";
import DetailPlaylistPages from "./Pages/DetailPlaylistPages/DetailPlaylistPages";
import CreatePlaylistPages from "./Pages/CreatePlaylistPages/CreatePlaylistPages";

function App() {
  const [isExpanded, setExpandState] = useState(false);

  return (
    <Router>
      <Sidebarcomp isExpanded={isExpanded} setExpandState={setExpandState} />
      {isExpanded ? (
        <div style={{ marginLeft: "300px"}}>
          <Routes>
            <Route path="/" exact element={<WelcomeHomePages />} />
            <Route path="/movie"  element={<MoviePages />} />
            <Route path="/series"  element={<SeriesPages />} />
            <Route path="/savedwatchlist"  element={<DetailPlaylistPages />} />
            <Route path="/createwatchlist"  element={<CreatePlaylistPages />} />
          </Routes>
        </div>
      ) : (
        <div style={{ marginLeft: "40px" }}>
          <Routes>
            <Route path="/" exact element={<WelcomeHomePages />} />
            <Route path="/movie" exact element={<MoviePages />} />
            <Route path="/series" exact element={<SeriesPages />} />
            <Route path="/savedwatchlist"  element={<DetailPlaylistPages />} />
            <Route path="/createwatchlist"  element={<CreatePlaylistPages />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;

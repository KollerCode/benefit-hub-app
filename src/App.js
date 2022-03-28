import Header from "./components/Header";
import Details from "./components/Details";
import Main from "./components/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App({todos}) {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <Header />
        </header>
      </div>
      <Routes>
        {/* <Route path="/todo/:id" element={<Details />} /> */}
        <Route path="/details" element={<Details/>} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;

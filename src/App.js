import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header  from "./components/Header";
import './App.css';
import NotesListPage from './pages/NotesListPage';
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
    <Routes>
    <Route exact path="/" element={<NotesListPage />} />
    <Route exact path="/note/:id" element={<NotePage />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;

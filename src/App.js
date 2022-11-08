import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header  from "./components/Header";
import './App.css';
import NotesListPage from './pages/NotesListPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
    <Routes>
    <Route path="/" exact component= {NotesListPage} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;

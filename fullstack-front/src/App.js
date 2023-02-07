import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/addexercise" element={<AddUser/>}/>
          <Route exact path="/editexercise/:id" element={<EditUser/>}/>
          <Route exact path="/viewexercise/:id" element={<ViewUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

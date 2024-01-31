import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./views/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import PrivateRouter from "./utils/PrivateRoute";
import { AuthProvider } from "./context/Auth";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route exact path="/dashboard" element={<PrivateRouter />}>
              {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
              {/* <PrivateRouter component={Dashboard} path={"/dashoard"} /> */}
            </Route>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

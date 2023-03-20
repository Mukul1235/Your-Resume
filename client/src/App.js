import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Templates from "./pages/formats";

function App() {
  return (
    <Routes>
      <Route path="/home"element={<ProcetedRoutes><Home /></ProcetedRoutes>}/>
      <Route path="/"element={<ProcetedRoutes><Home /></ProcetedRoutes>}/>
      <Route path="/profile"element={<ProcetedRoutes><Profile /></ProcetedRoutes>}/>
      <Route path="/template/:id"element={<ProcetedRoutes><Templates /></ProcetedRoutes>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

export function ProcetedRoutes(props) {
  // const Navigate = useNavigate();
  if (localStorage.getItem("resumebuilder-user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

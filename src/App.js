import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Profile from "./Profile";
import MyOrders from "./MyOrders";
import Blogs from "./Blogs";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/admin/dashboard">Dashboard</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/myorders">My Orders</Link>
    <Link to="/blogs">Blogs</Link>
  </nav>
);

export default function App() {
  const { isAuthenticated } = useSelector((state) => state.root);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myorders"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import RouteRecommend from "./pages/RouteRecommend";
import Carpooling from "./pages/Carpooling";
import Redeem from "./pages/Redeem";
import Community from "./pages/Community";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Custom component to control the visibility of Navbar and Footer
function NavigationControl() {
  const location = useLocation();
  const hideNavbarAndFooter =
    location.pathname === "/signup" || location.pathname === "/login";

  return (
    <React.Fragment>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/route-recommendation" element={<RouteRecommend />} />
        <Route path="/car-pooling" element={<Carpooling />} />
        <Route path="/redeem" element={<Redeem />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <NavigationControl />
    </Router>
  );
}

export default App;

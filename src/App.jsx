import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Appointment from "./pages/Appointment";
import Payment from "./pages/Payment";
import Receipt from "./pages/Receipt";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/doctors"
            element={<Doctors />}
          />

          <Route
            path="/doctors/:doctorId"
            element={<DoctorDetails />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          {/* PROTECTED ROUTES */}
          <Route element={<ProtectedRoute />}>

            <Route
              path="/appointment"
              element={<Appointment />}
            />

            <Route
              path="/payment"
              element={<Payment />}
            />

            <Route
               path="/receipt"
               element={<Receipt />}
             />

          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
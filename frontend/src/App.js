import "./App.css";
import Login from "./Components/login";
import Register from "./Components/register";
import Home from "./Components/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <AboutUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Navbar />
          <Register />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;






// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Components/navbar";
// import Home from "./Components/home";
// import Login from "./Components/login";
// import Register from "./Components/register";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

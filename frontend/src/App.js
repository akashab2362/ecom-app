import "./App.css";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
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

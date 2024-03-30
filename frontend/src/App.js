import "./App.css";
import Login from "./Authentication/login";
import Register from "./Authentication/register";
import Home from "./Layout/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Layout/navbar";
import Footer from "./Layout/Footer";
import AboutUs from "./Layout/AboutUs";
import ProductDetails from "./Products/ProductDetails";
import WomenProducts from "./Products/WomenProducts";
import MenProducts from "./Products/MenProducts";
import KidsProducts from "./Products/KidsProduct";
import Cart from "./Cart/Cart";
import Shipping from "./Cart/Shipping";
import ConfirmOrder from "./Cart/ConfirmOrder";

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
    {
      path: "/Women",
      element: (
        <>
          <Navbar />
          <WomenProducts />
          <Footer />
        </>
      )
    },
    {
      path: "/Men",
      element: (
        <>
          <Navbar />
          <MenProducts />
          <Footer />
        </>
      )
    },
    {
      path: "/Kids",
      element: (
        <>
          <Navbar />
          <KidsProducts />
          <Footer />
        </>
      )
    },
    {
      path: "/product/:id",
      element: (
        <>
          <Navbar />
          <ProductDetails />
          <Footer />
        </>
      )
    },
    {
      path: "/products/:keyword",
      element: (
        <>  
          <Navbar />
          <WomenProducts />
          <MenProducts />
          <KidsProducts />
          <Footer />
        </>
      )
    },
    {
      path: "/cart",
      element: (
        <>  
          <Navbar />
          <Cart />
          <Footer />
        </>
      )
    },
    {
      path: "/shipping",
      element: (
        <>
          <Shipping />
          <Footer />
        </>
      )
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Navbar history={router.history} /> */}
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
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//           <Route path="/about-us" component={AboutUs} />
//           <Route path="/product/:id" component={ProductDetails} />
//           <Route path="/women" component={WomenProducts} />
//           <Route path="/men" component={MenProducts} />
//           <Route path="/kids" component={KidsProducts} />
//           <Route path="/search" component={Search} />
//         </Switch>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;


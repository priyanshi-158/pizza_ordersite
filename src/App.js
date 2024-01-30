import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import RootLayout from "./layout/RootLayout";
import Contact from "./pages/Contact";
import MenuLayout from "./layout/MenuLayout";
import Menu from "./pages/Menu";
import SinglePizza, { SinglePizzaLoader } from "./pages/SinglePizza";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Login from "./pages/login";
import SignUp from "./pages/signup";

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=":id" element={<SinglePizza/>} loader={SinglePizzaLoader}/>
      <Route path="/contact" element={<Contact />} />
      <Route path='/about' element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/menu" element={<MenuLayout />}>
        <Route index element={<Menu />}/>
        <Route path=":id" element={<SinglePizza/>} loader={SinglePizzaLoader}/>
      </Route>
      <Route path="/cart" element={<Cart/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

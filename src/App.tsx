
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom'

import About from "#components/About";
import Contact from "#components/Contact";
import PageNotFound from "#components/Error 404";
import Home from "#components/Home";
import Detail from '#components/Detail';
import Product from '#components/Product';
import ProductDetails from '#components/ProductDetails';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:id" element={<Detail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<PageNotFound />} />
      </>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;


import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom'

import About from "#components/About";
import Contact from "#components/Contact";
import PageNotFound from "#components/Error404";
import Home from "#components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
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

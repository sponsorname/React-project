
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
import EventHandling from "#components/EventHandling"
import Hook from "#components/Hook"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/eventhandling" element={<EventHandling />} />
      <Route path="/Hook" element={<Hook />} />
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

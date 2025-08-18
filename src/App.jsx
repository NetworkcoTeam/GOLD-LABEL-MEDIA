import About from "./Components/About"
import HomePage from "./Components/HomePage"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";
import ContactUs from "./Components/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index='/HomePage' element={<HomePage />} />
      <Route path='/HomePage' element={<HomePage />} />
      <Route path='/About' element={<About />} />
      <Route path='/Service' element={<Service />} />
      <Route path='/Portfolio' element={<Portfolio />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      

    </>
  )
)

;

function App() {

  return (
    <div >
     
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App

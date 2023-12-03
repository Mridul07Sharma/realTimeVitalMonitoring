import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Tempsensor from "../pages/Tempsensor";
import PulserateSensor from "../pages/pulserate-sensor";
import Spo2Sensor from "../pages/Spo2-sensor";
import Homepage from "../pages/homepage";
import Header from "./Header";
import Footer from "./Footer";

const MainApp = () => {
    return (<>
      <Header />
      <Outlet />
      <Footer />
    </>)
}

const appRouter = createBrowserRouter([
    { path: '/',
      element: <MainApp />,
      errorElement: (<h1>Please pick right sensor.</h1>),
      children: [
        {
            path: '/',
            element: <Homepage />
        },
        {
            path: '/tempsensor',
            element: <Tempsensor />
        },
        {
            path: '/pulserate-sensor',
            element: <PulserateSensor />
        },
        {
            path: '/Spo2-sensor',
            element: <Spo2Sensor />
        }
      ]
    }
])
const Routing = () => {
    return(<>
       <RouterProvider router={appRouter} />
    </>)
}
export default Routing;
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Tempsensor from "../pages/Tempsensor";
import Sensor2 from "../pages/Sensor2";
import Sensor3 from "../pages/Sensor3";
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
            element: <h1>Please chose sensor from the navbar.</h1>
        },
        {
            path: '/tempsensor',
            element: <Tempsensor />
        },
        {
            path: '/sensor2',
            element: <Sensor2 />
        },
        {
            path: '/sensor3',
            element: <Sensor3 />
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
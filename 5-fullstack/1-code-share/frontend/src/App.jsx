import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([{path: '/', element: <Home/>, errorElement: <Error/>}, {
    path: '/:id',
    element: <Home/>,
    errorElement: <Error/>
}


])

function App() {
    return <RouterProvider router={router}/>
}

export default App

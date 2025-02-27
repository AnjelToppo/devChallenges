import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
import Board from "./pages/Board.jsx";

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/board/:boardId', element: <Board />}
]);

function App() {
    return <RouterProvider router={router} />
}

export default App

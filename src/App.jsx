import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path={"/"} element={<MainLayout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path={"about"} element={<h1>About</h1>} />
    </Route>
));
export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
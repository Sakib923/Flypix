import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path={"/"} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={"about"} element={<h1>About</h1>} />
        <Route path={"blog"} element={<h1>About</h1>} />
        <Route path={"shop"} element={<ShopPage />} />
        <Route path={"product"} element={<ProductPage />} />
        <Route path={"favourite"} element={<h1>Favourite</h1>} />
        <Route path={"profile"} element={<h1>User</h1>} />
        <Route path={"cart"} element={<h1>Cart</h1>} />
    </Route>
));
export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
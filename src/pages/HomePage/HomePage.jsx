import { Button } from "@/components/ui/button";
import ProductCard from "../../components/ProductCard.jsx";
import Banner from "./components/Banner.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import CartItemCard from "@/components/CartItemCard.jsx";
import WeFeature from "./components/WeFeature.jsx";
import MostSelling from "./components/MostSelling.jsx";
import HappyCustomers from "./components/HappyCustomers.jsx";

export default function HomePage() {
    return (
        <>
            <Banner />
            <WhyChooseUs />
            <WeFeature />
            <MostSelling />
            <HappyCustomers />
            {/* <ProductCard /> */}
            {/* <Button className="w-fit ">Hello world</Button> */}
            {/* <CartItemCard /> */}
        </>

    )
}
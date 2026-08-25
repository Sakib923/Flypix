import {Link, NavLink} from "react-router";
// import { ReactComponent as UserIcon } from "../assets/user.svg";

import Menu from "../assets/menu.svg?react";
import Icon from "../assets/icon.svg?react";
import User from "../assets/user.svg?react";
import Search from "../assets/search.svg?react";
import Basket from "../assets/shopping-basket-01.svg?react";
import Favourite from "../assets/favourite.svg?react";
import CompanyLogo from "./CompanyLogo";

export default function Navbar() {

    const activeClass = "text-black"
    const nonActiveClass = "text-[#CBD5E1]"

    return (
        <div className=" items-center">
        <div className="mx-0 px-4 md:mx-20 md:px-0 flex justify-between  h-20 items-center border-b-2 border-[#CBD5E1] ">
            <div className="flex items-center gap-1 md:gap-2 ">
                <Menu className="block md:hidden" />
                <CompanyLogo />
            </div>

            <div className="space-x-10 hidden md:block font-medium text-[16px]">
                <NavLink to="/" className={(isActive) => isActive ? activeClass : nonActiveClass}> Home </NavLink>
                <NavLink to="/shop" className={(isActive) => isActive ? activeClass : nonActiveClass}> Shop </NavLink>
                <NavLink to="/blog" className={(isActive) => isActive ? activeClass : nonActiveClass}> Blog </NavLink>
                {/*<NavLink to="/shop" > Pages </NavLink>*/}
            </div>

            <div className="space-x-6 flex " >
                <Link to='/user' className=""> <Search /> </Link>
                <Link to='/favourite' className="hidden md:block"> <Favourite /> </Link>
                <Link to='/cart'> <Basket /> </Link>
                <Link to='/profile' className="hidden md:block"> <User /> </Link>
            </div>
        </div>
        </div>
    )
}
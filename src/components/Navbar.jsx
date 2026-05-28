import {Link, NavLink} from "react-router";
// import { ReactComponent as UserIcon } from "../assets/user.svg";

import Menu from "../assets/menu.svg?react";
import Icon from "../assets/icon.svg?react";
import User from "../assets/user.svg?react";
import Search from "../assets/search.svg?react";
import Basket from "../assets/shopping-basket-01.svg?react";
import Favourite from "../assets/favourite.svg?react";

export default function Navbar() {
    return (
        <div className="px-4 md:px-20 flex justify-between w-screen h-20 items-center">
            <div className="flex items-center gap-1 md:gap-2 ">
                <Menu className="block md:hidden" />
                <Icon className="h-5 md:h-6 lg:h-10" />
                <h1 className="text-[14px] md:text-[16px] lg:text-[26px] font-orbitral font-medium">Flypix</h1>
            </div>

            <div className="space-x-10 hidden md:block">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/shop"> Shop </NavLink>
                <NavLink to="/shop"> Blog </NavLink>
                {/*<NavLink to="/shop" > Pages </NavLink>*/}
            </div>

            <div className="space-x-6 flex " >
                <Link to='/user' className=""> <Search /> </Link>
                <Link to='/user' className="hidden md:block"> <Favourite /> </Link>
                <Link to='/user'> <Basket /> </Link>
                <Link to='/user' className="hidden md:block"> <User /> </Link>
            </div>
        </div>
    )
}
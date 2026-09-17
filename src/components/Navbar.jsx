import { Link, NavLink } from 'react-router';
import Menu from '../assets/menu.svg?react';
import User from '../assets/user.svg?react';
import Search from '../assets/search.svg?react';
import Basket from '../assets/shopping-basket-01.svg?react';
import Favourite from '../assets/favourite.svg?react';
import CompanyLogo from './CompanyLogo';

export default function Navbar() {
    const activeClass = 'text-[#476b16]';
    const nonActiveClass = 'text-[#0f172a]';

    return (
        <div className="items-center">
            <div className="mx-0 flex h-20 items-center justify-between border-b-2 border-[#CBD5E1] px-4 md:mx-20 md:px-0">
                <div className="flex items-center gap-1 md:gap-2">
                    <Menu className="block md:hidden" />
                    <CompanyLogo />
                </div>

                <div className="hidden space-x-10 text-[16px] font-medium md:block">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeClass : nonActiveClass
                        }
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            isActive ? activeClass : nonActiveClass
                        }
                        end
                    >
                        Shop
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? activeClass : nonActiveClass
                        }
                        end
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? activeClass : nonActiveClass
                        }
                        end
                    >
                        Contact Us
                    </NavLink>
                    {/*<NavLink to="/shop" > Pages </NavLink>*/}
                </div>

                <div className="flex space-x-6">
                    <Link to="/user" className="">
                        <Search />
                    </Link>
                    <Link to="/favourite" className="hidden md:block">
                        <Favourite />
                    </Link>
                    <Link to="/cart">
                        <Basket />
                    </Link>
                    <Link to="/profile" className="hidden md:block">
                        <User />
                    </Link>
                </div>
            </div>
        </div>
    );
}

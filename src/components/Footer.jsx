import { Link } from 'react-router';
import CompanyLogo from './CompanyLogo';
import ArrowUpRight from '../assets/arrow-up-right.svg?react';
import { Button } from './ui/button';

export default function Footer() {
    return (
        <div className="space-y-[80px] bg-[#0F172A] px-[16px] py-[32px] lg:px-[80px] lg:pt-[56px]">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-[32px] lg:space-x-[20px] text-white  lg:px-[20px] xl:px-[80px] lg:pt-[56px]">
                <div className="flex flex-col items-center space-y-[16px] lg:items-start">
                    <div>
                        <CompanyLogo className="text-white" />
                    </div>
                    <p className="max-w-[344px] text-[16px] font-normal">
                        Lorem ipsum dolor sit amet consectetur. Mauris sit
                        faucibus tellus tellus arcu imperdiet neque.
                    </p>
                    <div className="flex space-x-4">
                        <div className="size-[32px] rounded-full bg-white p-[7px] hover:bg-[#A8FF35]"></div>
                        <div className="size-[32px] rounded-full bg-white p-[7px] hover:bg-[#A8FF35]"></div>
                        <div className="size-[32px] rounded-full bg-white p-[7px] hover:bg-[#A8FF35]"></div>
                        <div className="size-[32px] rounded-full bg-white p-[7px] hover:bg-[#A8FF35]"></div>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-2 lg:items-start">
                    <h1 className="text-[16px] font-medium">Company</h1>
                    <Link className="text-[14px] font-normal">Home</Link>
                    <Link className="text-[14px] font-normal">About Us</Link>
                    <Link className="text-[14px] font-normal">Contact Us</Link>
                    <Link className="text-[14px] font-normal">Shop</Link>
                </div>
                <div className="flex flex-col items-center space-y-2 lg:items-start">
                    <h1 className="text-[16px] font-medium">Category</h1>
                    <Link className="text-[14px] font-normal">
                        Camera Drone
                    </Link>
                    <Link className="text-[14px] font-normal">FPV Drone</Link>
                    <Link className="text-[14px] font-normal">Toy Drone</Link>
                    <Link className="text-[14px] font-normal">Gimble</Link>
                </div>
                <div className="space-y-[24px]">
                    <div className="space-y-[16px] text-center lg:text-start">
                        <h1 className="text-[16px] font-medium">
                            SUBSCRIBE TO OUR NEWSLETTER
                        </h1>
                        <p className="text-[16px] font-normal">
                            Lorem ipsum dolor sit amet consectetur. Mauris sit
                            faucibus
                        </p>
                    </div>
                    <div className="flex items-center justify-center space-x-[8px] lg:justify-start">
                        <input
                            type="email"
                            className="h-[48px] w-[287px] rounded-[8px] bg-white p-[16px] text-black decoration-2 placeholder:text-[#64748B] invalid:underline invalid:decoration-red-500 invalid:underline-offset-3"
                            placeholder="Your Email Address"
                        />
                        <Button className="h-[48px] w-[56px]">
                            <ArrowUpRight />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center border-t border-[#475569] p-2.5 text-[#475569]">
                @2024 Fliyfix All rights reserved
            </div>
        </div>
    );
}

import Cart from '../assets/cart.svg?react';
import Star from '../assets/star.svg?react';
import LoveIcon from '../assets/loveIcon.svg?react';
import { useState } from 'react';

export default function ProductCard({
    rattings = 3,
    productName = 'DJI Drone',
    price = 500,
    favourite = true,
}) {
    const [flag, setFlag] = useState(true);
    return (
        <div className="w-75 space-y-3 ">
            <div className="group relative rounded-xl">
                <img
                    src="https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg"
                    alt=""
                    className="z-0 h-75 w-75 overflow-hidden rounded-xl object-cover"
                />
                <button
                    className={`drop-shadow-[0_2px_8px_rgba(15,28,51,0.05)]_drop-shadow-[0_10px_14px_rgba(15,28,51,0.08)] ${flag ? "flex" : "hidden group-hover:flex"} absolute top-3 right-3 z-10 flex size-12 items-center justify-center rounded-full bg-white`}
                    onClick={() => setFlag(!flag)}
                >
                    <LoveIcon
                        className={`${flag ? 'text-red-500' : 'stroke-[#64748B] stroke-2 text-white'} size-6`}
                    />
                </button>
                <button className="absolute bottom-4 left-1/2 z-10 hidden w-67 -translate-x-1/2 justify-between rounded-lg bg-[#99E830] p-4 text-[#0F172A] group-hover:flex">
                    <p className="text-[16px] font-medium">Add to cart</p>
                    <Cart />
                </button>
            </div>
            <div className="flex justify-between">
                <div className="space-y-1">
                    <h1 className="text-[16px] font-normal"> {productName} </h1>
                    <p className="text-[20px] font-medium"> {`$${price}`} </p>
                </div>
                <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, index) => {
                        const isFilled = rattings - 1 >= index;

                        return (
                            <Star
                                className={` ${isFilled ? 'text-[#FF9900]' : 'text-white  stroke-gray-500'}`}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

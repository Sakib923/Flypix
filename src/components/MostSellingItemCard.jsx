import { Button } from './ui/button';
import ArrowUpRight from '../assets/arrow-up-right.svg?react';

export default function MostSellingItemCard({ name, price, image }) {
    return (
        <div className="flex h-fit w-full min-w-57.5 flex-col items-end -space-y-10 rounded-[12px]">
            <div className="flex h-fit max-h-45.5 w-full justify-center overflow-hidden rounded-[12px] bg-[#E2E8F0] px-14 py-8 lg:max-h-58">
                <img
                    src={image}
                    alt=""
                    className="block max-h-full max-w-full object-contain"
                />
            </div>
            <div className="flex w-[90.43%] justify-between rounded-l-[8px] rounded-b-[8px] bg-white px-6 py-4 shadow-[0_2.945px_17.672px_0_rgba(0,0,0,0.08)]">
                <div className="flex flex-col space-y-1">
                    <h3 className="text-[14px] font-normal"> {name}</h3>
                    <h2 className="text-[16px] font-semibold">${price}</h2>
                </div>
                <div className="flex items-center justify-end">
                    <Button>
                        <ArrowUpRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}

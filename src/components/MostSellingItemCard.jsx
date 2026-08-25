import { Button } from "./ui/button";
import ArrowUpRight from "../assets/arrow-up-right.svg?react"

export default function MostSellingItemCard({name, price, image}){
    return (
        <div className="w-[230px] h-[222px] flex flex-col items-end rounded-[12px] space-y-[-40px]">
            <div className="px-[56px] py-[32px] bg-[#E2E8F0] w-[230px] h-[182px] rounded-[12px] ">
                <img src={image} alt="" />
            </div>
            <div className="px-[24px] w-[208px] py-[16px] flex justify-between bg-white rounded-b-[8px] rounded-l-[8px] shadow-[0_2.945px_17.672px_0_rgba(0,0,0,0.08)]">
                <div className="flex flex-col space-y-[4px]">
                    <h3 className="text-[14px] font-normal"> {name }</h3>
                    <h2 className="text-[16px] font-semibold">${price}</h2>
                </div>
                <div className="flex items-center justify-end">
                    <Button >
                        <ArrowUpRight />
                    </Button>
                </div>
            </div>

        </div>
    )
}
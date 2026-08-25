import Heading from './Heading';
import { Button } from './ui/button';
import ArrowUpRightIcon from '../assets/arrow-up-right.svg?react';
import DroneIcon from '../assets/doneIcon.svg?react';

export default function CategoryCard({ image, name, description }) {
    return (
        <div className="space-x-[32px] flex bg-white p-[16px] lg:space-x-[52px] lg:px-[24px] lg:py-[20px] items-center rounded-[8px] md:rounded-[16px]">
            <div className="flex items-center w-[141px] h-[133px]
sm:w-[170px] sm:h-[160px]
md:w-[210px] md:h-[195px]
lg:w-[258px] lg:h-[236px]
xl:w-[300px] xl:h-[275px]
2xl:w-[340px] 2xl:h-[310px] shrink-0 md:size-[200px] justify-center rounded-[8px] bg-[#F1F5F9] px-[16px] py-[12px] lg:rounded-[16px] lg:px-[29px] lg:py-[18px]">
                <img src={image} alt="" />
            </div>

            <div className="space-y-[16px] lg:space-y-[32px]">
                <div className="space-y-[8px] lg:space-y-[12px]">
                    <h1 className="text-[16px] text-[#0F172A] lg:text-[24px] font-medium">
                        {name}
                    </h1>

                    <p className="text-[14px] lg:text-[16px]">{description}</p>
                </div>
                <div className="flex justify-between">
                    <Button className="p-[8px] md:p-[12px] size-[32px] md:size-[48px] ">
                        <ArrowUpRightIcon />
                    </Button>
                    <DroneIcon className="size-[32px] md:size-[48px]" />
                </div>
            </div>
        </div>
    );
}

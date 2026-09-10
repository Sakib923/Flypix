import { Button } from './ui/button';
import ArrowUpRightIcon from '../assets/arrow-up-right.svg?react';
import DroneIcon from '../assets/doneIcon.svg?react';

export default function CategoryCard({ image, name, description }) {
    return (
        <div className="flex items-center space-x-6 rounded-[8px] bg-white p-4 sm:space-x-7 md:space-x-8 md:rounded-[16px] lg:space-x-10.5 lg:px-6 lg:py-5 xl:space-x-13 2xl:space-x-13">
            <div className="flex h-33.25 w-35.25 shrink-0 items-center justify-center rounded-[8px] bg-[#F1F5F9] px-4 py-3 sm:h-40 sm:w-42.5 md:size-50 md:h-48.75 md:w-52.5 lg:h-59 lg:max-w-64.5 lg:min-w-52.5 lg:flex-1 lg:shrink lg:rounded-[16px] lg:px-7.25 lg:py-4.5 xl:h-68.75 xl:w-75 xl:max-w-none xl:flex-none xl:shrink-0 2xl:h-77.5 2xl:w-85">
                <img src={image} alt="" />
            </div>

            <div className="space-y-4 lg:space-y-8">
                <div className="space-y-2 lg:space-y-3">
                    <h1 className="text-[16px] font-medium text-[#0F172A] lg:text-[24px]">
                        {name}
                    </h1>

                    <p className="text-[14px] lg:text-[16px]">{description}</p>
                </div>
                <div className="flex justify-between">
                    <Button className="size-8 p-2 md:size-12 md:p-3">
                        <ArrowUpRightIcon />
                    </Button>
                    <DroneIcon className="size-8 md:size-12" />
                </div>
            </div>
        </div>
    );
}
